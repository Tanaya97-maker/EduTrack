<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

require_once 'db_connect.php';

$action = $_GET['action'] ?? '';
$input = json_decode(file_get_contents('php://input'), true);

switch ($action) {
    case 'login':
        $email = $input['email'] ?? '';
        $password = $input['password'] ?? '';

        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ? AND is_active = 1");
        $stmt->execute([$email]);
        $user = $stmt->fetch();

        // Note: In a real app, use password_verify for password_hash. 
        // For simplicity here, we match the mock requirement of '123' or direct match.
        if ($user && ($user['password_hash'] === $password || $password === '123')) {
            unset($user['password_hash']);
            echo json_encode($user);
        } else {
            echo json_encode(['error' => 'Invalid email or password']);
        }
        break;

    case 'get_all':
        $data = [
            'students' => $pdo->query("SELECT * FROM students")->fetchAll(),
            'faculty' => $pdo->query("SELECT * FROM faculty")->fetchAll(),
            'subjects' => $pdo->query("SELECT * FROM subjects")->fetchAll(),
            'enrollments' => $pdo->query("SELECT * FROM enrollments")->fetchAll(),
            'attendance' => $pdo->query("SELECT * FROM attendance")->fetchAll(),
            'timetable' => $pdo->query("SELECT * FROM timetable")->fetchAll(),
        ];
        echo json_encode($data);
        break;

    case 'attendance':
        // Implementation for marking attendance
        $stud_id = $input['stud_id'];
        $subject_id = $input['subject_id'];
        $faculty_id = $input['faculty_id'];
        $date = $input['attendance_date'];
        $status = $input['status'];

        $stmt = $pdo->prepare("INSERT INTO attendance (stud_id, subject_id, faculty_id, attendance_date, status) VALUES (?, ?, ?, ?, ?)");
        $success = $stmt->execute([$stud_id, $subject_id, $faculty_id, $date, $status]);
        echo json_encode(['success' => $success]);
        break;

    case 'manage_user':
        $op = $input['op'];
        unset($input['op']);

        if ($op === 'add_student') {
            $stmt = $pdo->prepare("INSERT INTO users (email, password_hash, user_type, is_active) VALUES (?, '123', 'student', 1)");
            $stmt->execute([$input['email']]);
            $user_id = $pdo->lastInsertId();

            $stmt = $pdo->prepare("INSERT INTO students (user_id, roll_no, stud_name, email) VALUES (?, ?, ?, ?)");
            $success = $stmt->execute([$user_id, $input['roll_no'], $input['stud_name'], $input['email']]);
            echo json_encode(['success' => $success]);
        } elseif ($op === 'add_faculty') {
            $stmt = $pdo->prepare("INSERT INTO users (email, password_hash, user_type, is_active) VALUES (?, '123', 'faculty', 1)");
            $stmt->execute([$input['email']]);
            $user_id = $pdo->lastInsertId();

            $stmt = $pdo->prepare("INSERT INTO faculty (user_id, faculty_name, email) VALUES (?, ?, ?)");
            $success = $stmt->execute([$user_id, $input['faculty_name'], $input['email']]);
            echo json_encode(['success' => $success]);
        } elseif ($op === 'edit_student') {
            $stmt = $pdo->prepare("UPDATE students SET stud_name = ?, email = ?, roll_no = ? WHERE stud_id = ?");
            $success = $stmt->execute([$input['stud_name'], $input['email'], $input['roll_no'], $input['stud_id']]);
            
            // Update email in users table as well
            $stmt = $pdo->prepare("UPDATE users SET email = ? WHERE user_id = (SELECT user_id FROM students WHERE stud_id = ?)");
            $stmt->execute([$input['email'], $input['stud_id']]);
            
            echo json_encode(['success' => $success]);
        } elseif ($op === 'edit_faculty') {
            $stmt = $pdo->prepare("UPDATE faculty SET faculty_name = ?, email = ? WHERE faculty_id = ?");
            $success = $stmt->execute([$input['faculty_name'], $input['email'], $input['faculty_id']]);

            // Update email in users table as well
            $stmt = $pdo->prepare("UPDATE users SET email = ? WHERE user_id = (SELECT user_id FROM faculty WHERE faculty_id = ?)");
            $stmt->execute([$input['email'], $input['faculty_id']]);

            echo json_encode(['success' => $success]);
        } elseif ($op === 'delete_student') {
            // Get user_id first
            $stmt = $pdo->prepare("SELECT user_id FROM students WHERE stud_id = ?");
            $stmt->execute([$input['stud_id']]);
            $uid = $stmt->fetchColumn();

            // Cascading delete should handle students table, but we explicitly delete from users
            if ($uid) {
                $stmt = $pdo->prepare("DELETE FROM users WHERE user_id = ?");
                $success = $stmt->execute([$uid]);
                echo json_encode(['success' => $success]);
            } else {
                 echo json_encode(['success' => false]);
            }
        } elseif ($op === 'delete_faculty') {
            // Get user_id first
            $stmt = $pdo->prepare("SELECT user_id FROM faculty WHERE faculty_id = ?");
            $stmt->execute([$input['faculty_id']]);
            $uid = $stmt->fetchColumn();

             if ($uid) {
                $stmt = $pdo->prepare("DELETE FROM users WHERE user_id = ?");
                $success = $stmt->execute([$uid]);
                echo json_encode(['success' => $success]);
            } else {
                 echo json_encode(['success' => false]);
            }
        }
        break;

    case 'manage_subject':
        $op = $input['op'];
        unset($input['op']);

        if ($op === 'add_subject') {
            $stmt = $pdo->prepare("INSERT INTO subjects (subject_code, subject_name, semester, credits, faculty_id) VALUES (?, ?, ?, ?, ?)");
            $success = $stmt->execute([$input['subject_code'], $input['subject_name'], $input['semester'], $input['credits'], $input['faculty_id']]);
            echo json_encode(['success' => $success]);
        } elseif ($op === 'edit_subject') {
            $stmt = $pdo->prepare("UPDATE subjects SET subject_code = ?, subject_name = ?, semester = ?, credits = ?, faculty_id = ? WHERE subject_id = ?");
            $success = $stmt->execute([$input['subject_code'], $input['subject_name'], $input['semester'], $input['credits'], $input['faculty_id'], $input['subject_id']]);
            echo json_encode(['success' => $success]);
        } elseif ($op === 'delete_subject') {
            $stmt = $pdo->prepare("DELETE FROM subjects WHERE subject_id = ?");
            $success = $stmt->execute([$input['subject_id']]);
             echo json_encode(['success' => $success]);
        }
        break;

    default:
        echo json_encode(['error' => 'Invalid action']);
        break;
}
?>
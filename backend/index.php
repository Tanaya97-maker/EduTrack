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
            // First create user
            $stmt = $pdo->prepare("INSERT INTO users (email, password_hash, user_type, is_active) VALUES (?, '123', 'student', 1)");
            $stmt->execute([$input['email']]);
            $user_id = $pdo->lastInsertId();

            $stmt = $pdo->prepare("INSERT INTO students (user_id, roll_no, stud_name, email) VALUES (?, ?, ?, ?)");
            $success = $stmt->execute([$user_id, $input['roll_no'], $input['stud_name'], $input['email']]);
            echo json_encode(['success' => $success]);
        }
        // ... more ops would be added here ...
        break;

    default:
        echo json_encode(['error' => 'Invalid action']);
        break;
}
?>
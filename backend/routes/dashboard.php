<?php
// Routes for Dashboard Data

if ($action === 'get_all') {
    $userId = $_GET['user_id'] ?? null;
    $userType = $_GET['user_type'] ?? 'admin';

    if ($userType === 'admin') {
        $data = [
            'students' => $pdo->query("SELECT * FROM students")->fetchAll(),
            'faculty' => $pdo->query("SELECT * FROM faculty")->fetchAll(),
            'subjects' => $pdo->query("
                SELECT s.*, (SELECT COUNT(*) FROM enrollments e WHERE e.subject_id = s.subject_id) as enrollment_count 
                FROM subjects s
            ")->fetchAll(),
            'enrollments' => $pdo->query("SELECT * FROM enrollments")->fetchAll(),
            'attendance' => $pdo->query("SELECT * FROM attendance")->fetchAll(),
            'timetable' => $pdo->query("SELECT * FROM timetable")->fetchAll(),
            'stats' => [
                'total_users' => $pdo->query("SELECT COUNT(*) FROM users WHERE is_active = true")->fetchColumn(),
                'total_courses' => $pdo->query("SELECT COUNT(*) FROM subjects")->fetchColumn(),
            ]
        ];
    } elseif ($userType === 'faculty') {
        // Find faculty_id for this user_id
        $stmt = $pdo->prepare("SELECT faculty_id FROM faculty WHERE user_id = ?");
        $stmt->execute([$userId]);
        $facultyId = $stmt->fetchColumn();

        if (!$facultyId) {
            echo json_encode(['error' => 'Faculty record not found']);
            exit;
        }

        $data = [
            'faculty' => $pdo->query("SELECT * FROM faculty WHERE faculty_id = $facultyId")->fetchAll(),
            'subjects' => $pdo->query("SELECT * FROM subjects WHERE faculty_id = $facultyId")->fetchAll(),
            'students' => $pdo->query("
                SELECT DISTINCT s.* FROM students s
                JOIN enrollments e ON s.stud_id = e.stud_id
                JOIN subjects sub ON e.subject_id = sub.subject_id
                WHERE sub.faculty_id = $facultyId
            ")->fetchAll(),
            'enrollments' => $pdo->query("
                SELECT e.* FROM enrollments e
                JOIN subjects s ON e.subject_id = s.subject_id
                WHERE s.faculty_id = $facultyId
            ")->fetchAll(),
            'attendance' => $pdo->query("SELECT * FROM attendance WHERE faculty_id = $facultyId")->fetchAll(),
            'timetable' => $pdo->query("
                SELECT t.* FROM timetable t
                JOIN subjects s ON t.subject_id = s.subject_id
                WHERE s.faculty_id = $facultyId
            ")->fetchAll(),
        ];
    } elseif ($userType === 'student') {
        // Find stud_id for this user_id
        $stmt = $pdo->prepare("SELECT stud_id FROM students WHERE user_id = ?");
        $stmt->execute([$userId]);
        $studId = $stmt->fetchColumn();

        if (!$studId) {
            echo json_encode(['error' => 'Student record not found']);
            exit;
        }

        $data = [
            'students' => $pdo->query("SELECT * FROM students WHERE stud_id = $studId")->fetchAll(),
            'subjects' => $pdo->query("
                SELECT s.* FROM subjects s
                JOIN enrollments e ON s.subject_id = e.subject_id
                WHERE e.stud_id = $studId
            ")->fetchAll(),
            'enrollments' => $pdo->query("SELECT * FROM enrollments WHERE stud_id = $studId")->fetchAll(),
            'attendance' => $pdo->query("SELECT * FROM attendance WHERE stud_id = $studId")->fetchAll(),
            'timetable' => $pdo->query("
                SELECT t.* FROM timetable t
                JOIN enrollments e ON t.subject_id = e.subject_id
                WHERE e.stud_id = $studId
            ")->fetchAll(),
        ];
    }

    echo json_encode($data);
} elseif ($action === 'attendance') {
    $stud_id = $input['stud_id'];
    $subject_id = $input['subject_id'];
    $faculty_id = $input['faculty_id'];
    $date = $input['attendance_date'];
    $status = $input['status'];

    $stmt = $pdo->prepare("
        INSERT INTO attendance (stud_id, subject_id, faculty_id, attendance_date, status) 
        VALUES (?, ?, ?, ?, ?)
        ON CONFLICT (stud_id, subject_id, attendance_date) 
        DO UPDATE SET status = EXCLUDED.status, faculty_id = EXCLUDED.faculty_id
    ");
    $success = $stmt->execute([$stud_id, $subject_id, $faculty_id, $date, $status]);

    // Notification Trigger (Mock)
    if ($success) {
        // Trigger system notification to all Students and Faculty associated with that specific Subject ID
        // echo "Notification sent to context of subject_id: " . $subject_id;
    }

    echo json_encode(['success' => $success]);
}
?>
<?php
// Routes for Dashboard Data

if ($action === 'get_all') {
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
    ];
    echo json_encode($data);
} elseif ($action === 'attendance') {
    $stud_id = $input['stud_id'];
    $subject_id = $input['subject_id'];
    $faculty_id = $input['faculty_id'];
    $date = $input['attendance_date'];
    $status = $input['status'];

    $stmt = $pdo->prepare("INSERT INTO attendance (stud_id, subject_id, faculty_id, attendance_date, status) VALUES (?, ?, ?, ?, ?)");
    $success = $stmt->execute([$stud_id, $subject_id, $faculty_id, $date, $status]);

    // Notification Trigger (Mock)
    if ($success) {
        // Trigger system notification to all Students and Faculty associated with that specific Subject ID
        // echo "Notification sent to context of subject_id: " . $subject_id;
    }

    echo json_encode(['success' => $success]);
}
?>
<?php
// Routes for Subject Management

if ($action === 'manage_subject') {
    $op = $input['op'];
    unset($input['op']);

    if ($op === 'add_subject') {
        $stmt = $pdo->prepare("INSERT INTO subjects (subject_code, subject_name, semester, credits, faculty_id) VALUES (?, ?, ?, ?, ?)");
        $success = $stmt->execute([$input['subject_code'], $input['subject_name'], $input['semester'], $input['credits'], $input['faculty_id']]);
        echo json_encode(['success' => $success]);
    } elseif ($op === 'edit_subject') {
        $stmt = $pdo->prepare("UPDATE subjects SET subject_code = ?, subject_name = ?, semester = ?, credits = ?, faculty_id = ? WHERE subject_id = ?");
        $success = $stmt->execute([$input['subject_code'], $input['subject_name'], $input['semester'], $input['credits'], $input['faculty_id'], $input['subject_id']]);

        if ($success) {
            // Mock notification trigger
            // echo "Subject architecture updated. Notifying all enrolled students.";
        }
        echo json_encode(['success' => $success]);
    } elseif ($op === 'delete_subject') {
        $stmt = $pdo->prepare("DELETE FROM subjects WHERE subject_id = ?");
        $success = $stmt->execute([$input['subject_id']]);
        echo json_encode(['success' => $success]);
    } elseif ($op === 'add_timetable') {
        $stmt = $pdo->prepare("INSERT INTO timetable (subject_id, day_of_week, start_time, end_time, room_no) VALUES (?, ?, ?, ?, ?)");
        $success = $stmt->execute([$input['subject_id'], $input['day_of_week'], $input['start_time'], $input['end_time'], $input['room_no']]);

        if ($success) {
            // Mock notification trigger
            // echo "New timetable slot registered. Broadcasting to relevant cohorts.";
        }
        echo json_encode(['success' => $success]);
    } elseif ($op === 'remove_timetable') {
        $stmt = $pdo->prepare("DELETE FROM timetable WHERE timetable_id = ?");
        $success = $stmt->execute([$input['id']]);
        echo json_encode(['success' => $success]);
    }
}
?>
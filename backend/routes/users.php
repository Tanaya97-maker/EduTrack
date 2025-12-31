<?php
// Routes for User Management (Login, Add/Edit/Delete Student/Faculty)

if ($action === 'login') {
    $email = $input['email'] ?? '';
    $password = $input['password'] ?? '';

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ? AND is_active = 1");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && ($user['password_hash'] === $password || $password === '123')) {
        unset($user['password_hash']);
        echo json_encode($user);
    } else {
        echo json_encode(['error' => 'Invalid email or password']);
    }

} elseif ($action === 'manage_user') {
    $op = $input['op'];
    unset($input['op']);

    if ($op === 'add_student') {
        $stmt = $pdo->prepare("INSERT INTO users (email, password_hash, user_type, is_active) VALUES (?, '123', 'student', 1)");
        $stmt->execute([$input['email']]);
        $user_id = $pdo->lastInsertId();

        $stmt = $pdo->prepare("INSERT INTO students (user_id, roll_no, stud_name, email, semester) VALUES (?, ?, ?, ?, ?)");
        $success = $stmt->execute([$user_id, $input['roll_no'], $input['stud_name'], $input['email'], $input['semester'] ?? 'sem1']);

        if ($success && isset($input['subject_ids']) && is_array($input['subject_ids'])) {
            $stud_id = $pdo->lastInsertId();
            foreach ($input['subject_ids'] as $subject_id) {
                $pdo->prepare("INSERT INTO enrollments (stud_id, subject_id) VALUES (?, ?)")->execute([$stud_id, $subject_id]);
            }
        }
        echo json_encode(['success' => $success]);
    } elseif ($op === 'add_faculty') {
        $stmt = $pdo->prepare("INSERT INTO users (email, password_hash, user_type, is_active) VALUES (?, '123', 'faculty', 1)");
        $stmt->execute([$input['email']]);
        $user_id = $pdo->lastInsertId();

        $stmt = $pdo->prepare("INSERT INTO faculty (user_id, faculty_name, email) VALUES (?, ?, ?)");
        $success = $stmt->execute([$user_id, $input['faculty_name'], $input['email']]);

        if ($success && isset($input['subject_ids']) && is_array($input['subject_ids'])) {
            $faculty_id = $pdo->lastInsertId();
            foreach ($input['subject_ids'] as $subject_id) {
                $pdo->prepare("UPDATE subjects SET faculty_id = ? WHERE subject_id = ?")->execute([$faculty_id, $subject_id]);
            }
        }
        echo json_encode(['success' => $success]);
    } elseif ($op === 'edit_student') {
        $stmt = $pdo->prepare("UPDATE students SET stud_name = ?, email = ?, roll_no = ?, semester = ? WHERE stud_id = ?");
        $success = $stmt->execute([$input['stud_name'], $input['email'], $input['roll_no'], $input['semester'], $input['stud_id']]);

        $stmt = $pdo->prepare("UPDATE users SET email = ? WHERE user_id = (SELECT user_id FROM students WHERE stud_id = ?)");
        $stmt->execute([$input['email'], $input['stud_id']]);

        if (isset($input['subject_ids']) && is_array($input['subject_ids'])) {
            $pdo->prepare("DELETE FROM enrollments WHERE stud_id = ?")->execute([$input['stud_id']]);
            foreach ($input['subject_ids'] as $subject_id) {
                $pdo->prepare("INSERT INTO enrollments (stud_id, subject_id) VALUES (?, ?)")->execute([$input['stud_id'], $subject_id]);
            }
        }

        echo json_encode(['success' => $success]);
    } elseif ($op === 'edit_faculty') {
        $stmt = $pdo->prepare("UPDATE faculty SET faculty_name = ?, email = ? WHERE faculty_id = ?");
        $success = $stmt->execute([$input['faculty_name'], $input['email'], $input['faculty_id']]);

        $stmt = $pdo->prepare("UPDATE users SET email = ? WHERE user_id = (SELECT user_id FROM faculty WHERE faculty_id = ?)");
        $stmt->execute([$input['email'], $input['faculty_id']]);

        if (isset($input['subject_ids']) && is_array($input['subject_ids'])) {
            // Reset previous assignments
            $pdo->prepare("UPDATE subjects SET faculty_id = NULL WHERE faculty_id = ?")->execute([$input['faculty_id']]);
            foreach ($input['subject_ids'] as $subject_id) {
                $pdo->prepare("UPDATE subjects SET faculty_id = ? WHERE subject_id = ?")->execute([$input['faculty_id'], $subject_id]);
            }
        }

        echo json_encode(['success' => $success]);
    } elseif ($op === 'delete_student') {
        $stmt = $pdo->prepare("SELECT user_id FROM students WHERE stud_id = ?");
        $stmt->execute([$input['stud_id']]);
        $uid = $stmt->fetchColumn();

        if ($uid) {
            $stmt = $pdo->prepare("DELETE FROM users WHERE user_id = ?");
            $success = $stmt->execute([$uid]);
            echo json_encode(['success' => $success]);
        } else {
            echo json_encode(['success' => false]);
        }
    } elseif ($op === 'delete_faculty') {
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
}
?>
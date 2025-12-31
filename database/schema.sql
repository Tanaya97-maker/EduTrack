-- Database schema for EduTrack

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    user_type ENUM('student', 'faculty', 'admin') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE faculty (
    faculty_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    faculty_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE students (
    stud_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    roll_no VARCHAR(50) UNIQUE NOT NULL,
    stud_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    semester VARCHAR(10), -- added semester
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE subjects (
    subject_id INT AUTO_INCREMENT PRIMARY KEY,
    subject_code VARCHAR(50) UNIQUE NOT NULL,
    subject_name VARCHAR(255) NOT NULL,
    faculty_id INT,
    semester VARCHAR(10), -- Changed to VARCHAR for sem1-sem8
    credits INT,
    FOREIGN KEY (faculty_id) REFERENCES faculty(faculty_id) ON DELETE SET NULL
);

CREATE TABLE enrollments (
    stud_id INT,
    subject_id INT,
    PRIMARY KEY (stud_id, subject_id),
    FOREIGN KEY (stud_id) REFERENCES students(stud_id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id) ON DELETE CASCADE
);

CREATE TABLE timetable (
    timetable_id INT AUTO_INCREMENT PRIMARY KEY,
    subject_id INT,
    day_of_week INT,
    start_time TIME,
    end_time TIME,
    room_no VARCHAR(50),
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id) ON DELETE CASCADE
);

CREATE TABLE attendance (
    attendance_id INT AUTO_INCREMENT PRIMARY KEY,
    stud_id INT,
    subject_id INT,
    faculty_id INT,
    attendance_date DATE,
    status ENUM('present', 'absent', 'holiday') NOT NULL,
    FOREIGN KEY (stud_id) REFERENCES students(stud_id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id) ON DELETE CASCADE,
    FOREIGN KEY (faculty_id) REFERENCES faculty(faculty_id) ON DELETE CASCADE
);

-- Seed Data
INSERT INTO users (email, password_hash, user_type) VALUES 
('admin@edu.com', '123', 'admin'),
('faculty.john@edu.com', '123', 'faculty'),
('student.alice@edu.com', '123', 'student');

INSERT INTO faculty (user_id, faculty_name, email) VALUES (2, 'Dr. John Smith', 'faculty.john@edu.com');
INSERT INTO students (user_id, roll_no, stud_name, email) VALUES (3, 'CS101', 'Alice Johnson', 'student.alice@edu.com');
INSERT INTO subjects (subject_code, subject_name, faculty_id, semester, credits) VALUES ('CS301', 'Database Systems', 1, 3, 4);
INSERT INTO enrollments (stud_id, subject_id) VALUES (1, 1);

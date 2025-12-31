-- SQLite schema for EduTrack

DROP TABLE IF EXISTS attendance;
DROP TABLE IF EXISTS timetable;
DROP TABLE IF EXISTS enrollments;
DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS faculty;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    user_type TEXT CHECK(user_type IN ('student', 'faculty', 'admin')) NOT NULL,
    is_active INTEGER DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE faculty (
    faculty_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    faculty_name TEXT NOT NULL,
    email TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE students (
    stud_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    roll_no TEXT UNIQUE NOT NULL,
    stud_name TEXT NOT NULL,
    email TEXT,
    semester TEXT DEFAULT 'sem1',
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE subjects (
    subject_id INTEGER PRIMARY KEY AUTOINCREMENT,
    subject_code TEXT UNIQUE NOT NULL,
    subject_name TEXT NOT NULL,
    faculty_id INTEGER,
    semester TEXT, -- Changed to TEXT for sem1-sem8
    credits INTEGER,
    FOREIGN KEY (faculty_id) REFERENCES faculty(faculty_id) ON DELETE SET NULL
);

CREATE TABLE enrollments (
    stud_id INTEGER,
    subject_id INTEGER,
    PRIMARY KEY (stud_id, subject_id),
    FOREIGN KEY (stud_id) REFERENCES students(stud_id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id) ON DELETE CASCADE
);

CREATE TABLE timetable (
    timetable_id INTEGER PRIMARY KEY AUTOINCREMENT,
    subject_id INTEGER,
    day_of_week INTEGER,
    start_time TEXT,
    end_time TEXT,
    room_no TEXT,
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id) ON DELETE CASCADE
);

CREATE TABLE attendance (
    attendance_id INTEGER PRIMARY KEY AUTOINCREMENT,
    stud_id INTEGER,
    subject_id INTEGER,
    faculty_id INTEGER,
    attendance_date TEXT,
    status TEXT CHECK(status IN ('present', 'absent', 'holiday')) NOT NULL,
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
INSERT INTO students (user_id, roll_no, stud_name, email, semester) VALUES (3, 'CS101', 'Alice Johnson', 'student.alice@edu.com', 'sem1');
INSERT INTO subjects (subject_code, subject_name, faculty_id, semester, credits) VALUES ('CS301', 'Database Systems', 1, 'sem1', 4);
INSERT INTO enrollments (stud_id, subject_id) VALUES (1, 1);

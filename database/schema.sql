-- Database schema for EduTrack (PostgreSQL Version)

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    user_type VARCHAR(20) NOT NULL CHECK (user_type IN ('student', 'faculty', 'admin')),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE faculty (
    faculty_id SERIAL PRIMARY KEY,
    user_id INT,
    faculty_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    department VARCHAR(20) CHECK (department IN ('comp', 'mech', 'ece')),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE students (
    stud_id SERIAL PRIMARY KEY,
    user_id INT,
    roll_no VARCHAR(50) UNIQUE NOT NULL,
    stud_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    semester VARCHAR(10),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE subjects (
    subject_id SERIAL PRIMARY KEY,
    subject_code VARCHAR(50) UNIQUE NOT NULL,
    subject_name VARCHAR(255) NOT NULL,
    faculty_id INT,
    semester VARCHAR(10),
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
    timetable_id SERIAL PRIMARY KEY,
    subject_id INT,
    day_of_week INT,
    start_time TIME,
    end_time TIME,
    room_no VARCHAR(50),
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id) ON DELETE CASCADE
);

CREATE TABLE attendance (
    attendance_id SERIAL PRIMARY KEY,
    stud_id INT,
    subject_id INT,
    faculty_id INT,
    attendance_date DATE,
    status VARCHAR(20) NOT NULL CHECK (status IN ('present', 'absent', 'holiday')),
    FOREIGN KEY (stud_id) REFERENCES students(stud_id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id) ON DELETE CASCADE,
    FOREIGN KEY (faculty_id) REFERENCES faculty(faculty_id) ON DELETE CASCADE,
    UNIQUE (stud_id, subject_id, attendance_date)
);

CREATE TABLE faculty_attendance (
    faculty_attendance_id SERIAL PRIMARY KEY,
    faculty_id INT NOT NULL,
    attendance_date DATE NOT NULL,
    check_in_time TIME,
    check_out_time TIME,
    leave_date DATE,
    status VARCHAR(20) NOT NULL CHECK (status IN ('present', 'absent', 'leave')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (faculty_id) REFERENCES faculty(faculty_id) ON DELETE CASCADE,
    UNIQUE (faculty_id, attendance_date)
);

CREATE TABLE faculty_leave (
    leave_id SERIAL PRIMARY KEY,
    faculty_id INT NOT NULL,
    leave_date DATE NOT NULL,
    reason TEXT,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (faculty_id) REFERENCES faculty(faculty_id) ON DELETE CASCADE
);

CREATE TABLE faculty_notes (
    note_id SERIAL PRIMARY KEY,
    faculty_id INT NOT NULL,
    title VARCHAR(255),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (faculty_id) REFERENCES faculty(faculty_id) ON DELETE CASCADE
);

CREATE TABLE faculty_announcements (
    announcement_id SERIAL PRIMARY KEY,
    faculty_id INT NOT NULL,
    target_type VARCHAR(20) NOT NULL CHECK (target_type IN ('student', 'faculty')),
    semester VARCHAR(10),
    subject_id INT,
    department VARCHAR(20) CHECK (department IN ('comp', 'mech', 'ece')),
    title VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (faculty_id) REFERENCES faculty(faculty_id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id) ON DELETE SET NULL
);

-- Seed Data
INSERT INTO users (email, password_hash, user_type) VALUES 
('admin@edu.com', '123', 'admin'),
('faculty.john@edu.com', '123', 'faculty'),
('student.alice@edu.com', '123', 'student');

INSERT INTO faculty (user_id, faculty_name, email) VALUES (2, 'Dr. John Smith', 'faculty.john@edu.com');
INSERT INTO students (user_id, roll_no, stud_name, email) VALUES (3, 'CS101', 'Alice Johnson', 'student.alice@edu.com');
INSERT INTO subjects (subject_code, subject_name, faculty_id, semester, credits) VALUES ('CS301', 'Database Systems', 1, '3', 4);
INSERT INTO enrollments (stud_id, subject_id) VALUES (1, 1);

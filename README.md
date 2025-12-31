
# EduTrack - Attendance Tracking System

EduTrack is a modern, high-performance web portal designed to streamline academic management, specifically focusing on attendance tracking, schedule management, and academic reporting.

## Project Overview

EduTrack provides a unified platform for three primary user roles:
- **Administrators**: Manage the entire ecosystem including students, faculty, subjects, and the master timetable.Admin login-admin@edu.com,Password-123
- **Faculty**: Mark daily attendance, view personal lecture schedules, and manage assigned cohorts.Faculty login-faculty.john@edu.com,Password-123
- **Students**: Track personal attendance percentages and view their weekly schedule.Student login-student.bob@edu.com,Password-123

## Core Objectives

1.  **Automation**: Automate the calculation of attendance percentages to ensure students meet the required 75% threshold.
2.  **Centralization**: Create a single source of truth for academic schedules and user data.
3.  **Insights**: Provide data-driven insights through a "Academic Insights" dashboard for monitoring module progress and user activity.
4.  **Accessibility**: Ensure real-time access to attendance records and schedules for both students and staff.

## Technical Implementation Flow

### Backend (PHP & SQLite/MySQL)

The backend is built as a lightweight RESTful API using PHP.

- **Architecture**: A modular route-based architecture where `index.php` acts as the entry point, delegating tasks to specific route files (`users.php`, `subjects.php`, `dashboard.php`).
- **Data Layer**: Uses a flexible database connection (`db.php`) supporting both SQLite (for portability) and MySQL (for production).
- **Security**: Implements basic authentication and role-based access control.
- **Logic Flow**:
    1.  Receive HTTP requests via `api/index.php`.
    2.  Process input via `json_decode(file_get_contents('php://input'))`.
    3.  Execute PDO-prepared statements for secure database interactions.
    4.  Return structured JSON responses.

### Frontend (React & TypeScript)

The frontend is a modern SPA (Single Page Application) built with React and styled with vanilla CSS and Lucide icons.

- **Type Safety**: Fully typed with TypeScript to ensure data consistency across the application.
- **State Management**: Centralized state in `App.tsx` handles data synchronization and user sessions.
- **Global Search**: A high-efficiency search provider in `Header.tsx` that filters records globally using a reactive filter applied in `App.tsx`.
- **Component Flow**:
    1.  **Authentication**: Users log in via the `Login` view.
    2.  **Data Sync**: `fetchData()` retrieves the latest state from the PHP backend on mount and after every mutation.
    3.  **Role-Based Rendering**: Components like `AdminDashboard`, `FacultyDashboard`, and `StudentDashboard` are rendered conditionally based on the user type.
    4.  **Services**: Interaction with the backend is abstracted into `apiService.ts` and specialized services like `attendanceService.ts`.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    cd frontend
    npm install
    ```

2.  **Start Frontend**:
    ```bash
    npm run dev
    ```

3.  **Start Backend**:
    Run a local PHP server targeting the `backend/public` directory:
    ```bash
    & "C:\Program Files\xampp\php\php.exe" -S localhost:8000 -t backend/public
    ```

4.  **Database**:
    Ensure `database/edutrack.db` exists. You can use `backend/public/setup_sqlite.php` to initialize the database schema.

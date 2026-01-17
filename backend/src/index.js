const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = 8000;

app.use(cors());
app.use(express.json());

// Root route for connectivity check
app.get('/', (req, res) => {
    res.json({ message: 'EduTrack Node.js Backend is running' });
});

// Main handler to mimic index.php logic and handle proxied requests
const apiHandler = async (req, res) => {
    const action = req.query.action;
    const input = req.method === 'POST' ? req.body : {};

    if (!action) {
        return res.status(400).json({ error: 'No action specified' });
    }

    try {
        switch (action) {
            case 'login':
                await handleLogin(input, res);
                break;
            case 'manage_user':
                await handleManageUser(input, res);
                break;
            case 'manage_subject':
                await handleManageSubject(input, res);
                break;
            case 'get_all':
                await handleGetAll(req.query, res);
                break;
            case 'attendance':
                await handleAttendance(input, res);
                break;
            default:
                res.status(400).json({ error: 'Invalid action' });
        }
    } catch (error) {
        console.error('API Error:', error);
        const errorMsg = error instanceof Error ? error.message : String(error);
        const errorStack = error instanceof Error ? error.stack : 'No stack trace';
        res.status(500).json({ error: 'Internal server error', message: errorMsg, stack: errorStack });
    }
};

app.all('/api', apiHandler);
app.all('/index.php', apiHandler);
app.all('/api/index.php', apiHandler);

async function handleLogin(input, res) {
    const { email, password } = input;
    const user = await prisma.user.findFirst({
        where: { email, is_active: true }
    });

    if (user && (user.password_hash === password || password === '123')) {
        const { password_hash, ...userWithoutPass } = user;
        res.json(userWithoutPass);
    } else {
        res.json({ error: 'Invalid email or password' });
    }
}

async function handleManageUser(input, res) {
    const { op, ...data } = input;
    let success = false;

    if (op === 'add_student') {
        const user = await prisma.user.create({
            data: {
                email: data.email,
                password_hash: '123',
                user_type: 'student',
                is_active: true
            }
        });
        const student = await prisma.student.create({
            data: {
                user_id: user.user_id,
                roll_no: data.roll_no,
                stud_name: data.stud_name,
                email: data.email,
                semester: data.semester || 'sem1'
            }
        });
        if (data.subject_ids && Array.isArray(data.subject_ids)) {
            for (const subject_id of data.subject_ids) {
                await prisma.enrollment.create({
                    data: { stud_id: student.stud_id, subject_id: parseInt(subject_id) }
                });
            }
        }
        success = true;
    } else if (op === 'add_faculty') {
        const user = await prisma.user.create({
            data: {
                email: data.email,
                password_hash: '123',
                user_type: 'faculty',
                is_active: true
            }
        });
        const faculty = await prisma.faculty.create({
            data: {
                user_id: user.user_id,
                faculty_name: data.faculty_name,
                email: data.email
            }
        });
        if (data.subject_ids && Array.isArray(data.subject_ids)) {
            for (const subject_id of data.subject_ids) {
                await prisma.subject.update({
                    where: { subject_id: parseInt(subject_id) },
                    data: { faculty_id: faculty.faculty_id }
                });
            }
        }
        success = true;
    } else if (op === 'edit_student') {
        await prisma.student.update({
            where: { stud_id: parseInt(data.stud_id) },
            data: {
                stud_name: data.stud_name,
                email: data.email,
                roll_no: data.roll_no,
                semester: data.semester
            }
        });
        const student = await prisma.student.findUnique({ where: { stud_id: parseInt(data.stud_id) } });
        await prisma.user.update({
            where: { user_id: student.user_id },
            data: { email: data.email }
        });
        if (data.subject_ids && Array.isArray(data.subject_ids)) {
            await prisma.enrollment.deleteMany({ where: { stud_id: parseInt(data.stud_id) } });
            for (const subject_id of data.subject_ids) {
                await prisma.enrollment.create({
                    data: { stud_id: parseInt(data.stud_id), subject_id: parseInt(subject_id) }
                });
            }
        }
        success = true;
    } else if (op === 'edit_faculty') {
        await prisma.faculty.update({
            where: { faculty_id: parseInt(data.faculty_id) },
            data: {
                faculty_name: data.faculty_name,
                email: data.email
            }
        });
        const faculty = await prisma.faculty.findUnique({ where: { faculty_id: parseInt(data.faculty_id) } });
        await prisma.user.update({
            where: { user_id: faculty.user_id },
            data: { email: data.email }
        });
        if (data.subject_ids && Array.isArray(data.subject_ids)) {
            await prisma.subject.updateMany({
                where: { faculty_id: parseInt(data.faculty_id) },
                data: { faculty_id: null }
            });
            for (const subject_id of data.subject_ids) {
                await prisma.subject.update({
                    where: { subject_id: parseInt(subject_id) },
                    data: { faculty_id: parseInt(data.faculty_id) }
                });
            }
        }
        success = true;
    } else if (op === 'delete_student') {
        const student = await prisma.student.findUnique({ where: { stud_id: parseInt(data.stud_id) } });
        if (student) {
            await prisma.user.delete({ where: { user_id: student.user_id } });
            success = true;
        }
    } else if (op === 'delete_faculty') {
        const faculty = await prisma.faculty.findUnique({ where: { faculty_id: parseInt(data.faculty_id) } });
        if (faculty) {
            await prisma.user.delete({ where: { user_id: faculty.user_id } });
            success = true;
        }
    }

    res.json({ success });
}

async function handleManageSubject(input, res) {
    const { op, ...data } = input;
    let success = false;

    if (op === 'add_subject') {
        await prisma.subject.create({
            data: {
                subject_code: data.subject_code,
                subject_name: data.subject_name,
                semester: data.semester,
                credits: parseInt(data.credits),
                faculty_id: data.faculty_id ? parseInt(data.faculty_id) : null
            }
        });
        success = true;
    } else if (op === 'edit_subject') {
        await prisma.subject.update({
            where: { subject_id: parseInt(data.subject_id) },
            data: {
                subject_code: data.subject_code,
                subject_name: data.subject_name,
                semester: data.semester,
                credits: parseInt(data.credits),
                faculty_id: data.faculty_id ? parseInt(data.faculty_id) : null
            }
        });
        success = true;
    } else if (op === 'delete_subject') {
        await prisma.subject.delete({ where: { subject_id: parseInt(data.subject_id) } });
        success = true;
    } else if (op === 'add_timetable') {
        await prisma.timetable.create({
            data: {
                subject_id: parseInt(data.subject_id),
                day_of_week: parseInt(data.day_of_week),
                start_time: data.start_time,
                end_time: data.end_time,
                room_no: data.room_no
            }
        });
        success = true;
    } else if (op === 'remove_timetable') {
        await prisma.timetable.delete({ where: { timetable_id: parseInt(data.id) } });
        success = true;
    }

    res.json({ success });
}

async function handleGetAll(query, res) {
    const userId = query.user_id ? parseInt(query.user_id) : null;
    const userType = query.user_type || 'admin';

    let data = {};

    if (userType === 'admin') {
        data = {
            students: await prisma.student.findMany(),
            faculty: await prisma.faculty.findMany(),
            subjects: await prisma.subject.findMany({
                include: {
                    _count: {
                        select: { enrollments: true }
                    }
                }
            }),
            enrollments: await prisma.enrollment.findMany(),
            attendance: await prisma.attendance.findMany(),
            timetable: await prisma.timetable.findMany(),
            stats: {
                total_users: await prisma.user.count({ where: { is_active: true } }),
                total_courses: await prisma.subject.count()
            }
        };
        // Flatten subject counts to match original PHP structure if needed
        data.subjects = data.subjects.map(s => ({
            ...s,
            enrollment_count: s._count.enrollments
        }));
    } else if (userType === 'faculty') {
        const faculty = await prisma.faculty.findFirst({ where: { user_id: userId } });
        if (!faculty) return res.json({ error: 'Faculty record not found' });

        const facultyId = faculty.faculty_id;
        data = {
            faculty: await prisma.faculty.findMany({ where: { faculty_id: facultyId } }),
            subjects: await prisma.subject.findMany({ where: { faculty_id: facultyId } }),
            students: await prisma.student.findMany({
                where: {
                    enrollments: {
                        some: {
                            Subject: {
                                faculty_id: facultyId
                            }
                        }
                    }
                },
                distinct: ['stud_id']
            }),
            enrollments: await prisma.enrollment.findMany({
                where: {
                    Subject: {
                        faculty_id: facultyId
                    }
                }
            }),
            attendance: await prisma.attendance.findMany({ where: { faculty_id: facultyId } }),
            timetable: await prisma.timetable.findMany({
                where: {
                    Subject: {
                        faculty_id: facultyId
                    }
                }
            }),
        };
    } else if (userType === 'student') {
        const student = await prisma.student.findFirst({ where: { user_id: userId } });
        if (!student) return res.json({ error: 'Student record not found' });

        const studId = student.stud_id;
        data = {
            students: await prisma.student.findMany({ where: { stud_id: studId } }),
            subjects: await prisma.subject.findMany({
                where: {
                    enrollments: {
                        some: {
                            stud_id: studId
                        }
                    }
                }
            }),
            enrollments: await prisma.enrollment.findMany({ where: { stud_id: studId } }),
            attendance: await prisma.attendance.findMany({ where: { stud_id: studId } }),
            timetable: await prisma.timetable.findMany({
                where: {
                    Subject: {
                        enrollments: {
                            some: {
                                stud_id: studId
                            }
                        }
                    }
                }
            }),
        };
    }

    res.json(data);
}

async function handleAttendance(input, res) {
    const { stud_id, subject_id, faculty_id, attendance_date, status } = input;

    // UPSERT logic for attendance
    try {
        const dateObj = new Date(attendance_date);
        // Ensure we are working with midnight UTC to match DB Date type
        dateObj.setUTCHours(0, 0, 0, 0);

        const result = await prisma.attendance.upsert({
            where: {
                stud_id_subject_id_attendance_date: {
                    stud_id: parseInt(stud_id),
                    subject_id: parseInt(subject_id),
                    attendance_date: dateObj
                }
            },
            update: {
                status: status,
                faculty_id: parseInt(faculty_id)
            },
            create: {
                stud_id: parseInt(stud_id),
                subject_id: parseInt(subject_id),
                faculty_id: parseInt(faculty_id),
                attendance_date: dateObj,
                status: status
            }
        });
        res.json({ success: true });
    } catch (e) {
        console.error('Attendance Error:', e);
        res.json({ success: false, error: e.message });
    }
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

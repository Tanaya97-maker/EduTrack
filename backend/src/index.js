import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from './generated/client/index.js';
dotenv.config();

if (!process.env.DATABASE_URL) {
    console.error('CRITICAL: DATABASE_URL is not defined in environment variables.');
}

const app = express();
const prisma = new PrismaClient({
    log: ['error', 'warn'],
});
const port = process.env.PORT || 8000;

const safeInt = (val) => {
    const p = parseInt(val);
    return isNaN(p) ? null : p;
};

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
            case 'manage_announcement':
                await handleManageAnnouncement(input, res);
                break;
            case 'manage_note':
                await handleManageNote(input, res);
                break;
            case 'manage_leave':
                await handleManageLeave(input, res);
                break;
            case 'manage_faculty_attendance':
                await handleFacultyAttendance(input, res);
                break;
            case 'get_faculty_status':
                await handleGetFacultyStatus(req.query, res);
                break;
            case 'upload_schedule':
                await handleUploadSchedule(input, res);
                break;
            case 'get_uploaded_schedules':
                await handleGetUploadedSchedules(req.query, res);
                break;
            case 'get_notifications':
                await handleGetNotifications(req.query, res);
                break;
            case 'mark_notification_read':
                await handleMarkNotificationRead(input, res);
                break;
            case 'clear_notifications':
                await handleClearNotifications(input, res);
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

// --- New Schedule Endpoints ---

app.get('/api/schedule/student/:stud_id', async (req, res) => {
    const { stud_id } = req.params;
    try {
        const student = await prisma.student.findUnique({
            where: { stud_id: safeInt(stud_id) }
        });

        if (!student) return res.status(404).json({ error: 'Student not found' });

        const schedule = await prisma.schedule.findMany({
            include: {
                Subject: true
            },
            where: {
                Subject: {
                    enrollments: {
                        some: { stud_id: safeInt(stud_id) }
                    }
                }
            }
        });

        const filteredSchedule = await Promise.all(schedule.map(async (item) => {
            if (!item.Subject) return true;

            // Get all faculty for this subject via faculty_subjects
            const assignedFaculty = await prisma.faculty.findMany({
                where: {
                    faculty_subjects: {
                        some: { subject_id: item.subject_id }
                    }
                }
            });

            // If any assigned faculty matches the logic, keep the item
            // Logic: Mech faculty see all subjects, Comp faculty see only their semester
            const match = assignedFaculty.some(f => {
                const deptName = f.dept_id === 1 ? 'Comp' : (f.dept_id === 2 ? 'Mech' : '');
                if (deptName === 'Mech') return true;
                if (deptName === 'Comp') return item.Subject.semester === student.semester;
                return true;
            });

            return assignedFaculty.length === 0 || match;
        }));

        const finalFilteredSchedule = schedule.filter((_, index) => filteredSchedule[index]);

        const holidays = await prisma.holiday.findMany();
        const finalSchedule = finalFilteredSchedule.map(item => {
            return {
                ...item,
                is_holiday: item.day_of_week === 7
            };
        });

        res.json(finalSchedule);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.get('/api/schedule/faculty/:faculty_id', async (req, res) => {
    const { faculty_id } = req.params;
    try {
        const faculty = await prisma.faculty.findUnique({
            where: { faculty_id: safeInt(faculty_id) }
        });

        if (!faculty) return res.status(404).json({ error: 'Faculty not found' });

        const schedule = await prisma.schedule.findMany({
            include: {
                Subject: true
            },
            where: {
                Subject: {
                    faculty_subjects: {
                        some: { faculty_id: safeInt(faculty_id) }
                    }
                }
            }
        });

        const mappedSchedule = schedule.map(item => ({
            ...item,
            display_info: `${item.Subject.subject_code}(${item.Subject.semester || ''}, ${item.room_no || ''})`
        }));

        res.json(mappedSchedule);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/schedule/update', async (req, res) => {
    const { timetable_id, subject_id, day_of_week, start_time, end_time, room_no, faculty_user_id } = req.body;

    try {
        const faculty = await prisma.faculty.findFirst({
            where: { user_id: safeInt(faculty_user_id) }
        });

        if (!faculty) return res.status(403).json({ error: 'Unauthorized: Not a faculty' });

        const subject = await prisma.subject.findUnique({
            where: { subject_id: safeInt(subject_id) }
        });

        if (!subject) return res.status(404).json({ error: 'Subject not found' });

        const assignment = await prisma.facultySubject.findFirst({
            where: {
                subject_id: safeInt(subject_id),
                faculty_id: faculty.faculty_id
            }
        });

        if (assignment) {
            return res.status(403).json({ error: 'Permission denied: Cannot edit own timetable entry' });
        }

        if (timetable_id) {
            const updated = await prisma.schedule.update({
                where: { timetable_id: safeInt(timetable_id) },
                data: {
                    subject_id: safeInt(subject_id),
                    day_of_week: safeInt(day_of_week),
                    start_time: start_time ? new Date(`1970-01-01T${start_time}`) : undefined,
                    end_time: end_time ? new Date(`1970-01-01T${end_time}`) : undefined,
                    room_no
                }
            });
            res.json(updated);
        } else {
            const created = await prisma.schedule.create({
                data: {
                    subject_id: safeInt(subject_id),
                    day_of_week: safeInt(day_of_week),
                    start_time: start_time ? new Date(`1970-01-01T${start_time}`) : undefined,
                    end_time: end_time ? new Date(`1970-01-01T${end_time}`) : undefined,
                    room_no
                }
            });
            res.json(created);
        }
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

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
        const existing = await prisma.user.findUnique({ where: { email: data.email } });
        if (existing) return res.json({ error: 'A user with this entry already exists' });

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
                semester: String(data.semester || 'sem1'),
                division: data.division || '',
                dept_id: safeInt(data.dept_id)
            }
        });

        // Normalize semester (e.g., '2' -> 'sem2', 'sem2' -> 'sem2')
        const semClean = student.semester.toLowerCase().startsWith('sem')
            ? student.semester.toLowerCase()
            : `sem${student.semester}`;
        const semNum = student.semester.replace(/\D/g, '');

        const semesterSubjects = await prisma.subject.findMany({
            where: {
                OR: [
                    { semester: semClean },
                    { semester: semNum }
                ],
                dept_id: student.dept_id || undefined
            }
        });

        for (const sub of semesterSubjects) {
            try {
                await prisma.enrollment.upsert({
                    where: {
                        stud_id_subject_id: {
                            stud_id: student.stud_id,
                            subject_id: sub.subject_id
                        }
                    },
                    update: {},
                    create: {
                        stud_id: student.stud_id,
                        subject_id: sub.subject_id
                    }
                });
            } catch (enrollError) {
                console.error(`Failed to enroll student ${student.stud_id} in subject ${sub.subject_id}:`, enrollError.message);
            }
        }
        success = true;
    } else if (op === 'add_faculty') {
        const existing = await prisma.user.findUnique({ where: { email: data.email } });
        if (existing) return res.json({ error: 'A user with this entry already exists' });

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
                email: data.email,
                dept_id: safeInt(data.dept_id),
                is_timetable_admin: data.is_timetable_admin === true || data.is_timetable_admin === 'true'
            }
        });
        if (data.subject_ids && Array.isArray(data.subject_ids)) {
            for (const subject_id of data.subject_ids) {
                await prisma.facultySubject.create({
                    data: {
                        faculty_id: faculty.faculty_id,
                        subject_id: safeInt(subject_id)
                    }
                });
            }
        }
        success = true;
    } else if (op === 'edit_student') {
        const studentId = safeInt(data.stud_id);
        const updatedStudent = await prisma.student.update({
            where: { stud_id: studentId },
            data: {
                stud_name: data.stud_name,
                email: data.email,
                roll_no: data.roll_no,
                semester: String(data.semester),
                division: data.division,
                dept_id: safeInt(data.dept_id)
            }
        });
        await prisma.user.update({
            where: { user_id: updatedStudent.user_id },
            data: { email: data.email }
        });

        // Normalize semester (e.g., '2' -> 'sem2', 'sem2' -> 'sem2')
        const semClean = updatedStudent.semester.toLowerCase().startsWith('sem')
            ? updatedStudent.semester.toLowerCase()
            : `sem${updatedStudent.semester}`;
        const semNum = updatedStudent.semester.replace(/\D/g, '');

        const semesterSubjects = await prisma.subject.findMany({
            where: {
                OR: [
                    { semester: semClean },
                    { semester: semNum }
                ],
                dept_id: updatedStudent.dept_id || undefined
            }
        });

        for (const sub of semesterSubjects) {
            try {
                await prisma.enrollment.upsert({
                    where: {
                        stud_id_subject_id: {
                            stud_id: studentId,
                            subject_id: sub.subject_id
                        }
                    },
                    update: {},
                    create: {
                        stud_id: studentId,
                        subject_id: sub.subject_id
                    }
                });
            } catch (enrollError) {
                console.error(`Failed to enroll student ${studentId} in subject ${sub.subject_id}:`, enrollError.message);
            }
        }
        success = true;
    } else if (op === 'edit_faculty') {
        await prisma.faculty.update({
            where: { faculty_id: safeInt(data.faculty_id) },
            data: {
                faculty_name: data.faculty_name,
                email: data.email,
                dept_id: safeInt(data.dept_id),
                is_timetable_admin: data.is_timetable_admin === true || data.is_timetable_admin === 'true'
            }
        });
        const faculty = await prisma.faculty.findUnique({ where: { faculty_id: safeInt(data.faculty_id) } });
        await prisma.user.update({
            where: { user_id: faculty.user_id },
            data: { email: data.email }
        });
        if (data.subject_ids && Array.isArray(data.subject_ids)) {
            await prisma.facultySubject.deleteMany({
                where: { faculty_id: safeInt(data.faculty_id) }
            });
            for (const subject_id of data.subject_ids) {
                await prisma.facultySubject.create({
                    data: {
                        faculty_id: safeInt(data.faculty_id),
                        subject_id: safeInt(subject_id)
                    }
                });
            }
        }
        success = true;
    } else if (op === 'delete_student') {
        const student = await prisma.student.findUnique({ where: { stud_id: safeInt(data.stud_id) } });
        if (student) {
            await prisma.user.delete({ where: { user_id: student.user_id } });
            success = true;
        }
    } else if (op === 'delete_faculty') {
        const faculty = await prisma.faculty.findUnique({ where: { faculty_id: safeInt(data.faculty_id) } });
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
        const createData = {
            subject_code: data.subject_code,
            subject_name: data.subject_name,
            semester: data.semester,
            credits: parseInt(data.credits),
            dept_id: safeInt(data.dept_id)
        };

        await prisma.subject.create({ data: createData });
        success = true;
    } else if (op === 'edit_subject') {
        const subjectId = parseInt(data.subject_id);
        await prisma.subject.update({
            where: { subject_id: subjectId },
            data: {
                subject_code: data.subject_code,
                subject_name: data.subject_name,
                semester: data.semester,
                credits: parseInt(data.credits),
                dept_id: safeInt(data.dept_id)
            }
        });

        if (data.hasOwnProperty('faculty_id')) {
            // Update faculty_subjects for this subject
            // Note: This logic assumes one primary faculty in-charge as per current UI
            await prisma.facultySubject.deleteMany({
                where: { subject_id: subjectId }
            });
            if (data.faculty_id) {
                await prisma.facultySubject.create({
                    data: {
                        subject_id: subjectId,
                        faculty_id: safeInt(data.faculty_id)
                    }
                });
            }
        }
        success = true;
    } else if (op === 'delete_subject') {
        await prisma.subject.delete({ where: { subject_id: parseInt(data.subject_id) } });
        success = true;
    } else if (op === 'add_timetable') {
        await prisma.schedule.create({
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
        await prisma.schedule.delete({ where: { timetable_id: parseInt(data.id) } });
        success = true;
    }

    res.json({ success });
}

async function handleGetAll(query, res) {
    const userId = query.user_id ? safeInt(query.user_id) : null;
    const userType = query.user_type || 'admin';

    let data = {};

    try {
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
                departments: await prisma.department.findMany(),
                enrollments: await prisma.enrollment.findMany(),
                attendance: await prisma.attendance.findMany(),
                timetable: await prisma.schedule.findMany(),
                facultyAttendance: await prisma.facultyAttendance.findMany(),
                uploadedSchedules: await prisma.uploadedSchedule.findMany({ include: { Department: true, Faculty: true }, orderBy: { created_at: 'desc' } }),
                announcements: await prisma.facultyAnnouncement.findMany({ orderBy: { created_at: 'desc' } }),
                notes: await prisma.facultyNote.findMany({ orderBy: { created_at: 'desc' } }),
                leaves: await prisma.facultyLeave.findMany({ orderBy: { created_at: 'desc' } }),
                facultySubjects: await prisma.facultySubject.findMany(),
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
                subjects: await prisma.subject.findMany({
                    where: {
                        faculty_subjects: {
                            some: { faculty_id: facultyId }
                        }
                    }
                }),
                students: await prisma.student.findMany({
                    where: {
                        enrollments: {
                            some: {
                                Subject: {
                                    faculty_subjects: {
                                        some: { faculty_id: facultyId }
                                    }
                                }
                            }
                        }
                    },
                    distinct: ['stud_id']
                }),
                enrollments: await prisma.enrollment.findMany({
                    where: {
                        Subject: {
                            faculty_subjects: {
                                some: { faculty_id: facultyId }
                            }
                        }
                    }
                }),
                attendance: await prisma.attendance.findMany({
                    where: {
                        Subject: {
                            faculty_subjects: {
                                some: { faculty_id: facultyId }
                            }
                        }
                    }
                }),
                timetable: await prisma.schedule.findMany({
                    where: {
                        Subject: {
                            faculty_subjects: {
                                some: { faculty_id: facultyId }
                            }
                        }
                    }
                }),
                announcements: await prisma.facultyAnnouncement.findMany({
                    where: {
                        OR: [
                            { faculty_id: facultyId },
                            { target_type: 'faculty', dept_id: null },
                            { target_type: 'faculty', dept_id: faculty.dept_id }
                        ]
                    },
                    orderBy: { created_at: 'desc' }
                }),
                facultyAttendance: await prisma.facultyAttendance.findMany({
                    where: { faculty_id: facultyId },
                    orderBy: { attendance_date: 'desc' }
                }),
                notes: await prisma.facultyNote.findMany({
                    where: { faculty_id: facultyId },
                    orderBy: { created_at: 'desc' }
                }),
                leaves: await prisma.facultyLeave.findMany({
                    where: { faculty_id: facultyId },
                    orderBy: { created_at: 'desc' }
                }),
                uploadedSchedules: await prisma.uploadedSchedule.findMany({
                    where: { dept_id: faculty.dept_id },
                    include: { Department: true, Faculty: true },
                    orderBy: { created_at: 'desc' }
                }),
                facultySubjects: await prisma.facultySubject.findMany({ where: { faculty_id: facultyId } }),
                departments: await prisma.department.findMany(),
            };

            // Calculate attendance percentage
            const totalPossible = await prisma.facultyAttendance.count({ where: { faculty_id: facultyId } });
            const totalPresent = await prisma.facultyAttendance.count({ where: { faculty_id: facultyId, status: 'present' } });
            data.attendancePercentage = totalPossible > 0 ? Math.round((totalPresent / totalPossible) * 100) : 100;
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
                timetable: await prisma.schedule.findMany({
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
                announcements: await prisma.facultyAnnouncement.findMany({
                    where: {
                        OR: [
                            { target_type: 'student', semester: null },
                            { target_type: 'student', semester: student.semester },
                            // Added: Announcements specifically for subjects the student is enrolled in
                            {
                                target_type: 'student',
                                subject_id: {
                                    in: await prisma.enrollment.findMany({
                                        where: { stud_id: studId },
                                        select: { subject_id: true }
                                    }).then(ens => ens.map(e => e.subject_id))
                                }
                            }
                        ]
                    },
                    orderBy: { created_at: 'desc' }
                }),
                uploadedSchedules: await prisma.uploadedSchedule.findMany({
                    where: {
                        dept_id: student.dept_id,
                        semester: student.semester,
                        division: student.division || undefined,
                        is_active: true
                    },
                    include: { Department: true, Faculty: true },
                    orderBy: { created_at: 'desc' }
                }),
                departments: await prisma.department.findMany(),
            };
        }

        res.json(data);
    } catch (e) {
        console.error('handleGetAll error:', e);
        res.status(500).json({ error: 'Internal server error', message: e.message });
    }
}


async function handleAttendance(input, res) {
    const { stud_id, subject_id, faculty_id, attendance_date, status } = input;

    // Security Check: Verify faculty teaches the subject
    const assignment = await prisma.facultySubject.findFirst({
        where: {
            subject_id: safeInt(subject_id),
            faculty_id: safeInt(faculty_id)
        }
    });
    if (!assignment) return res.status(403).json({ error: 'Permission denied: This faculty is not assigned to this subject' });

    // Security Check: Verify student is enrolled in the subject
    const enrollment = await prisma.enrollment.findFirst({
        where: {
            stud_id: safeInt(stud_id),
            subject_id: safeInt(subject_id)
        },
        include: { Subject: true }
    });
    if (!enrollment) return res.status(400).json({ error: 'Student is not enrolled in this subject' });

    // UPSERT logic for attendance
    try {
        const dateObj = new Date(attendance_date);
        // Ensure we are working with midnight UTC to match DB Date type
        dateObj.setUTCHours(0, 0, 0, 0);

        const result = await prisma.attendance.upsert({
            where: {
                stud_id_subject_id_attendance_date: {
                    stud_id: safeInt(stud_id),
                    subject_id: safeInt(subject_id),
                    attendance_date: dateObj
                }
            },
            update: {
                status: status,
                faculty_id: safeInt(faculty_id)
            },
            create: {
                stud_id: safeInt(stud_id),
                subject_id: safeInt(subject_id),
                faculty_id: safeInt(faculty_id),
                attendance_date: dateObj,
                status: status
            }
        });

        // Notification Logic: If student is marked absent
        if (status === 'absent') {
            const student = await prisma.student.findUnique({ where: { stud_id: safeInt(stud_id) } });
            if (student) {
                console.log(`Triggering absence notification for user_id: ${student.user_id}`);
                await prisma.notification.create({
                    data: {
                        user_id: student.user_id,
                        title: 'Attendance Alert',
                        message: `You have been marked absent for ${enrollment.Subject.subject_name} on ${new Date(attendance_date).toLocaleDateString()}.`,
                        type: 'attendance'
                    }
                });
            }
        }

        res.json({ success: true });
    } catch (e) {
        console.error('Attendance Error:', e);
        res.json({ success: false, error: e.message });
    }
}

async function handleManageAnnouncement(input, res) {
    const { op, ...data } = input;
    let success = false;

    try {
        if (op === 'add_announcement') {
            await prisma.facultyAnnouncement.create({
                data: {
                    faculty_id: safeInt(data.faculty_id),
                    target_type: data.target_type,
                    semester: data.semester || null,
                    subject_id: data.subject_id ? safeInt(data.subject_id) : null,
                    dept_id: data.dept_id ? safeInt(data.dept_id) : null,
                    title: data.title,
                    message: data.message
                }
            });

            // Notification Logic: Notify target audience
            let targetUserIds = [];
            if (data.target_type === 'student') {
                // Find students matching criteria
                const whereClause = {
                    semester: data.semester || undefined,
                    division: data.division || undefined,
                    dept_id: data.dept_id ? safeInt(data.dept_id) : undefined
                };

                if (data.subject_id) {
                    whereClause.enrollments = {
                        some: {
                            subject_id: safeInt(data.subject_id)
                        }
                    };
                }

                const students = await prisma.student.findMany({ where: whereClause });
                targetUserIds = students.map(s => s.user_id);
                console.log(`Announcement target students found: ${targetUserIds.length}`);
            } else if (data.target_type === 'faculty') {
                const faculty = await prisma.faculty.findMany({ where: { dept_id: data.dept_id ? safeInt(data.dept_id) : undefined } });
                targetUserIds = faculty.map(f => f.user_id);
                console.log(`Announcement target faculty found: ${targetUserIds.length}`);
            }

            if (targetUserIds.length > 0) {
                console.log(`Creating notifications for ${targetUserIds.length} users`);
                await prisma.notification.createMany({
                    data: targetUserIds.map(uid => ({
                        user_id: uid,
                        title: 'New Announcement',
                        message: data.title,
                        type: 'announcement'
                    }))
                });
            }

            success = true;
        } else if (op === 'edit_announcement') {
            await prisma.facultyAnnouncement.update({
                where: { announcement_id: safeInt(data.announcement_id) },
                data: {
                    title: data.title,
                    message: data.message,
                    target_type: data.target_type,
                    semester: data.semester || null,
                    subject_id: data.subject_id ? safeInt(data.subject_id) : null,
                    dept_id: data.dept_id ? safeInt(data.dept_id) : null
                }
            });
            success = true;
        } else if (op === 'delete_announcement') {
            await prisma.facultyAnnouncement.delete({
                where: { announcement_id: safeInt(data.announcement_id) }
            });
            success = true;
        }
        res.json({ success });
    } catch (e) {
        console.error('Manage Announcement Error:', e);
        res.json({ success: false, error: e.message });
    }
}

async function handleManageNote(input, res) {
    const { op, ...data } = input;
    let success = false;

    try {
        if (op === 'add_note') {
            await prisma.facultyNote.create({
                data: {
                    faculty_id: safeInt(data.faculty_id),
                    title: data.title,
                    content: data.content
                }
            });
            success = true;
        } else if (op === 'edit_note') {
            await prisma.facultyNote.update({
                where: { note_id: safeInt(data.note_id) },
                data: {
                    title: data.title,
                    content: data.content,
                    updated_at: new Date()
                }
            });
            success = true;
        } else if (op === 'delete_note') {
            await prisma.facultyNote.delete({
                where: { note_id: safeInt(data.note_id) }
            });
            success = true;
        }
        res.json({ success });
    } catch (e) {
        console.error('Manage Note Error:', e);
        res.json({ success: false, error: e.message });
    }
}

async function handleManageLeave(input, res) {
    const { op, ...data } = input;
    let success = false;

    try {
        if (op === 'apply_leave') {
            await prisma.facultyLeave.create({
                data: {
                    faculty_id: safeInt(data.faculty_id),
                    leave_date: new Date(data.leave_date),
                    reason: data.reason,
                    status: 'pending'
                }
            });
            success = true;
        } else if (op === 'update_status') {
            await prisma.facultyLeave.update({
                where: { leave_id: safeInt(data.leave_id) },
                data: {
                    status: data.status
                }
            });
            success = true;
        }
        res.json({ success });
    } catch (e) {
        console.error('Manage Leave Error:', e);
        res.json({ success: false, error: e.message });
    }
}

async function handleGetFacultyStatus(query, res) {
    try {
        const facultyId = query.faculty_id ? safeInt(query.faculty_id) : null;
        let data;

        if (facultyId) {
            data = await prisma.$queryRaw`SELECT * FROM faculty_status_view WHERE faculty_id = ${facultyId}`;
        } else {
            data = await prisma.$queryRaw`SELECT * FROM faculty_status_view`;
        }

        res.json(data);
    } catch (e) {
        console.error('Fetch Faculty Status View Error:', e);
        res.status(500).json({ error: 'Failed to fetch faculty status from view', message: e.message });
    }
}

async function handleFacultyAttendance(input, res) {
    const { op, faculty_id, date, time } = input;
    try {
        const dateObj = new Date(date);
        dateObj.setUTCHours(0, 0, 0, 0);

        // Convert time string "HH:mm" to Date object with Time type
        let timeObj = null;
        if (time) {
            const [hours, minutes] = time.split(':');
            timeObj = new Date();
            timeObj.setHours(parseInt(hours), parseInt(minutes), 0, 0);
        }

        if (op === 'check_in') {
            // Check-in: Create or update record with check-in time and status 'present'
            await prisma.facultyAttendance.upsert({
                where: {
                    faculty_id_attendance_date: {
                        faculty_id: safeInt(faculty_id),
                        attendance_date: dateObj
                    }
                },
                update: {
                    check_in_time: timeObj,
                    status: 'present'
                },
                create: {
                    faculty_id: safeInt(faculty_id),
                    attendance_date: dateObj,
                    check_in_time: timeObj,
                    status: 'present'
                }
            });
        } else if (op === 'check_out') {
            // Check-out: Update existing record or create if doesn't exist
            await prisma.facultyAttendance.upsert({
                where: {
                    faculty_id_attendance_date: {
                        faculty_id: safeInt(faculty_id),
                        attendance_date: dateObj
                    }
                },
                update: {
                    check_out_time: timeObj
                },
                create: {
                    faculty_id: safeInt(faculty_id),
                    attendance_date: dateObj,
                    check_out_time: timeObj,
                    status: 'present'
                }
            });
        }
        res.json({ success: true });
    } catch (e) {
        console.error('Faculty Attendance Error:', e);
        res.json({ success: false, error: e.message });
    }
}

async function handleUploadSchedule(input, res) {
    const { faculty_id, dept_id, semester, division, file_url } = input;

    try {
        const faculty = await prisma.faculty.findUnique({ where: { faculty_id: safeInt(faculty_id) } });
        if (!faculty?.is_timetable_admin) {
            return res.status(403).json({ error: 'Unauthorized' });
        }

        await prisma.uploadedSchedule.create({
            data: {
                dept_id: safeInt(dept_id),
                semester: String(semester),
                division: division,
                file_url: file_url,
                uploaded_by: safeInt(faculty_id)
            }
        });

        // Notification: Notify relevant students
        const students = await prisma.student.findMany({
            where: {
                dept_id: safeInt(dept_id),
                semester: String(semester),
                division: division || undefined
            }
        });

        if (students.length > 0) {
            console.log(`Triggering timetable notifications for ${students.length} students`);
            await prisma.notification.createMany({
                data: students.map(s => ({
                    user_id: s.user_id,
                    title: 'New Timetable',
                    message: `A new timetable has been uploaded for Sem ${semester} Div ${division}.`,
                    type: 'timetable'
                }))
            });
        }

        res.json({ success: true });
    } catch (e) {
        console.error('Upload Schedule Error:', e);
        res.json({ success: false, error: e.message });
    }
}

async function handleGetNotifications(query, res) {
    const userId = safeInt(query.user_id);
    try {
        const notifications = await prisma.notification.findMany({
            where: { user_id: userId },
            orderBy: { created_at: 'desc' }
        });
        res.json(notifications);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

async function handleMarkNotificationRead(input, res) {
    try {
        await prisma.notification.update({
            where: { notification_id: safeInt(input.notification_id) },
            data: { is_read: true }
        });
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

async function handleClearNotifications(input, res) {
    try {
        await prisma.notification.deleteMany({
            where: { user_id: safeInt(input.user_id) }
        });
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

async function handleGetUploadedSchedules(query, res) {
    const { dept_id, semester, division, faculty_id } = query;

    try {
        let where = { is_active: true };

        if (dept_id) where.dept_id = safeInt(dept_id);
        if (semester) where.semester = semester;
        if (division) where.division = division;
        if (faculty_id) where.uploaded_by = safeInt(faculty_id);


        const schedules = await prisma.uploadedSchedule.findMany({
            where,
            include: {
                Department: true,
                Faculty: true
            },
            orderBy: { created_at: 'desc' }
        });

        res.json(schedules);
    } catch (e) {
        console.error('Get Uploaded Schedules Error:', e);
        res.status(500).json({ error: 'Failed to fetch schedules', message: e.message });
    }
}

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}

export default app;

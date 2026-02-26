import 'dotenv/config';
import { PrismaClient } from './src/generated/client/index.js';

const prisma = new PrismaClient();

async function main() {
    try {
        const userId = 3;
        console.log(`Checking notifications for user_id: ${userId}`);

        const user = await prisma.user.findUnique({ where: { user_id: userId } });
        if (!user) {
            console.log('User not found!');
            return;
        }
        console.log('User found:', user.email);

        const student = await prisma.student.findFirst({
            where: { user_id: userId },
            include: { enrollments: true, Department: true }
        });

        if (!student) {
            console.log('User is not a student.');
        } else {
            console.log('Student Profile:', {
                stud_id: student.stud_id,
                dept_id: student.dept_id,
                semester: student.semester,
                division: student.division,
                enrollments: student.enrollments.map(e => e.subject_id)
            });
        }

        // Create a test notification
        console.log('Creating test notification...');
        await prisma.notification.create({
            data: {
                user_id: userId,
                title: 'Debug Notification',
                message: 'This is a test notification to verify the system.',
                type: 'system'
            }
        });
        console.log('Test notification created.');

        const notifications = await prisma.notification.findMany({
            where: { user_id: userId },
            orderBy: { created_at: 'desc' }
        });

        console.log(`Found ${notifications.length} notifications.`);
        notifications.forEach(n => {
            console.log(`- [${n.type}] ${n.title}: ${n.message} (Read: ${n.is_read})`);
        });

    } catch (e) {
        console.error('Error:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();

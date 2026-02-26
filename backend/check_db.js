import 'dotenv/config';
import { PrismaClient } from './src/generated/client/index.js';

const prisma = new PrismaClient();

async function main() {
    try {
        console.log('Connecting to database...');
        // Try to count users to check connection
        const userCount = await prisma.user.count();
        console.log(`Connected! User count: ${userCount}`);

        // Check for notifications table logic (indirectly via prisma)
        try {
            const count = await prisma.notification.count();
            console.log(`Notification table exists. Count: ${count}`);
        } catch (e) {
            console.error('Error checking notification table:', e.message);
        }

        try {
            const count = await prisma.schedule.count();
            console.log(`Schedule (timetable) table exists. Count: ${count}`);
        } catch (e) {
            console.error('Error checking schedule table:', e.message);
        }

    } catch (e) {
        console.error('Database connection failed:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();

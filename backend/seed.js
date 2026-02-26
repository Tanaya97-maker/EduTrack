import { PrismaClient } from './src/generated/client/index.js';
const prisma = new PrismaClient();

async function seed() {
    try {
        console.log('Seeding departments...');
        const comp = await prisma.department.upsert({
            where: { dept_name: 'Computer Engineering' },
            update: {},
            create: { dept_name: 'Computer Engineering' }
        });
        const mech = await prisma.department.upsert({
            where: { dept_name: 'Mechanical Engineering' },
            update: {},
            create: { dept_name: 'Mechanical Engineering' }
        });

        console.log('Seeding subjects...');
        await prisma.subject.upsert({
            where: { subject_code: 'COMP101' },
            update: {},
            create: {
                subject_code: 'COMP101',
                subject_name: 'Introduction to Programming',
                semester: 'sem1',
                dept_id: comp.dept_id,
                credits: 4
            }
        });

        console.log('Seed completed successfully');
    } catch (e) {
        console.error('Seed error:', e);
    } finally {
        await prisma.$disconnect();
    }
}

seed();

import { PrismaClient } from './src/generated/client/index.js';

const prisma = new PrismaClient();

async function checkRLS() {
  try {
    const rlsStatus = await prisma.$queryRaw`
      SELECT 
        tablename, 
        rowsecurity as rls_enabled
      FROM pg_tables
      WHERE schemaname = 'public'
      ORDER BY tablename;
    `;
    console.log('--- RLS Status of Tables ---');
    console.table(rlsStatus);

    const policies = await prisma.$queryRaw`
      SELECT 
        schemaname, 
        tablename, 
        policyname, 
        permissive, 
        roles, 
        cmd, 
        qual, 
        with_check 
      FROM pg_policies;
    `;
    console.log('\n--- Existing Policies ---');
    console.table(policies);

  } catch (error) {
    console.error('Error checking RLS:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkRLS();

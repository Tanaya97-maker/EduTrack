import { PrismaClient } from './src/generated/client/index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function applyRLS() {
  try {
    const sqlPath = path.join(__dirname, 'enable_rls_all.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    console.log('Applying RLS and policies...');
    
    // Split SQL by semicolon and filter out empty statements
    // Note: This is a simple split, doesn't handle semicolons in strings/functions perfectly
    // but for this script it should be fine. For complex SQL, it's better to run via psql or 
    // a better parser.
    const statements = sql.split(';').map(s => s.trim()).filter(s => s.length > 0);

    for (const statement of statements) {
      console.log(`Executing: ${statement.substring(0, 50)}...`);
      await prisma.$executeRawUnsafe(statement);
    }

    console.log('\n✓ RLS policies applied successfully!');

  } catch (error) {
    console.error('Error applying RLS:', error);
  } finally {
    await prisma.$disconnect();
  }
}

applyRLS();

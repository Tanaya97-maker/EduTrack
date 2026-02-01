import postgres from 'postgres'
import dotenv from 'dotenv'

dotenv.config()

const connectionString = process.env.DATABASE_URL

const sql = postgres(connectionString, {
    ssl: 'require',
    max: 1
})

async function fixSequences() {
    console.log('🔄 Repairing database sequences...')

    try {
        const tables = [
            ['users', 'user_id'],
            ['faculty', 'faculty_id'],
            ['students', 'stud_id'],
            ['subjects', 'subject_id'],
            ['timetable', 'timetable_id'],
            ['attendance', 'attendance_id'],
            ['faculty_attendance', 'faculty_attendance_id'],
            ['faculty_leave', 'leave_id'],
            ['faculty_notes', 'note_id'],
            ['faculty_announcements', 'announcement_id']
        ]

        for (const [table, column] of tables) {
            console.log(`  - Checking ${table}...`)
            // Use raw SQL to fix the sequence
            await sql`
        SELECT setval(
          pg_get_serial_sequence(${table}, ${column}), 
          COALESCE(MAX(${sql(column)}), 0) + 1, 
          false
        ) FROM ${sql(table)}
      `
        }

        console.log('\n✅ All database sequences have been synchronized!')
        console.log('You should now be able to insert data from the frontend without errors.')

    } catch (error) {
        console.error('\n❌ Failed to fix sequences:')
        console.error(error.message)
    } finally {
        await sql.end()
    }
}

fixSequences()

import postgres from 'postgres'
import dotenv from 'dotenv'

dotenv.config()

// Hardcoded direct connection for testing
const directUrl = "postgresql://postgres:EduTrack00001111@db.jgdhutibtofnulvctlbu.supabase.co:5432/postgres"

console.log('Testing DIRECT Supabase connection...')

try {
    const sql = postgres(directUrl, {
        ssl: 'require',
        max: 1,
        connect_timeout: 10
    })

    console.log('✓ SQL client created')
    const result = await sql`SELECT version()`
    console.log('✓ Connected to PostgreSQL DIRECTLY!')
    console.log('Database version:', result[0].version)

    await sql.end()
} catch (error) {
    console.error('✗ DIRECT Connection failed!')
    console.error('Error:', error.message)
}

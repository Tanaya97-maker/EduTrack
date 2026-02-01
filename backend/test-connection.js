import postgres from 'postgres'
import dotenv from 'dotenv'

dotenv.config()

const connectionString = process.env.DATABASE_URL

console.log('Testing Supabase connection...')
console.log('Connection string (password hidden):', connectionString?.replace(/:[^:@]+@/, ':****@'))

try {
    const sql = postgres(connectionString, {
        ssl: 'require',
        max: 1,
        connect_timeout: 10
    })

    console.log('\n✓ SQL client created')

    // Test connection
    const result = await sql`SELECT version()`
    console.log('✓ Connected to PostgreSQL!')
    console.log('Database version:', result[0].version)

    // Test if tables exist
    const tables = await sql`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public' 
    ORDER BY table_name
  `

    console.log('\n✓ Tables in database:')
    if (tables.length === 0) {
        console.log('  ⚠️  No tables found! You need to run schema.sql in Supabase SQL Editor.')
    } else {
        tables.forEach(t => console.log(`  - ${t.table_name}`))
    }

    // Test Write Access (Optional - try to insert a test user or just check permissions)
    console.log('\n--- Testing Write Access ---')
    try {
        // Try to check current user permissions on the 'users' table
        const permissions = await sql`
      SELECT 
        table_name, 
        has_table_privilege(current_user, table_name, 'INSERT') as can_insert,
        has_table_privilege(current_user, table_name, 'UPDATE') as can_update
      FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name = 'users';
    `
        if (permissions.length > 0) {
            console.log(`✓ Table 'users' permissions:`)
            console.log(`  - Can Insert: ${permissions[0].can_insert}`)
            console.log(`  - Can Update: ${permissions[0].can_update}`)

            if (!permissions[0].can_insert) {
                console.log('\n⚠️  ALERT: Your database user does NOT have INSERT permissions.')
                console.log('This is likely due to Supabase Row Level Security (RLS) being enabled without a policy.')
            }
        }
    } catch (writeErr) {
        console.error('✗ Write permission check failed:', writeErr.message)
    }

    await sql.end()
    console.log('\n✓ Connection test successful!')

} catch (error) {
    console.error('\n✗ Connection failed!')
    console.error('Error:', error.message)

    if (error.message.includes('ENOTFOUND')) {
        console.error('\n💡 Suggestion: Check if the hostname is correct')
    } else if (error.message.includes('ECONNREFUSED')) {
        console.error('\n💡 Suggestion: Check if Supabase project is active and port is correct')
    } else if (error.message.includes('password authentication failed')) {
        console.error('\n💡 Suggestion: Check if the password is correct')
    } else if (error.message.includes('SSL')) {
        console.error('\n💡 Suggestion: SSL configuration issue')
    }

    process.exit(1)
}

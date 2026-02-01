import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL

// Initialize postgres connection with SSL configuration for Supabase
const sql = postgres(connectionString, {
    ssl: 'require',  // Supabase requires SSL connection
    max: 10,         // Maximum number of connections in the pool
    idle_timeout: 20,
    connect_timeout: 10
})

export default sql

import { Pool } from "pg";

const pool = new Pool({
	connectionString: process.env.POSTGRES_URL,
	ssl: {
		rejectUnauthorized: false, // For self-signed certificates
	},
});

export default pool;

import { pool } from "../db/index.js";

const init = async () => {
	try {
		await pool.query(`
            CREATE TABLE IF NOT EXISTS posts (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                content TEXT,
                author VARCHAR(255) NOT NULL,
            );
        `);
	} catch (error) {
		console.error(error);
	}
};

export default init;

import pg from "pg";
import { db } from "../config/index.js";

const { Client, Pool } = pg;

const connect = async () => {
	try {
		const client = new Client({
			user: db.user,
			password: db.password,
			host: db.host,
			port: db.port,
			database: db.name,
		});
		await client.connect();
		console.info("Connected to Postgres");
		return client;
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

const pool = new Pool({
	user: db.user,
	password: db.password,
	host: db.host,
	port: db.port,
	database: db.name,
});

export default connect;

export { pool };

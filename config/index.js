import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 1337;

export const db = {
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
	name: process.env.POSTGRES_NAME,
};

console.log(PORT, db);

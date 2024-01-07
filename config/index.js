import { config } from "dotenv";

config();

export const PORT = 1337;

export const db = {
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	name: process.env.DB_NAME,
};

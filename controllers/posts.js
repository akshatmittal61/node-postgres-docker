import { pool } from "../db/index.js";

export const getAllPosts = async (req, res) => {
	try {
		const res = await pool.query("SELECT * FROM posts");
		return res.status(200).json(posts);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: error.message });
	}
};

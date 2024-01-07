import express from "express";
import { PORT } from "./config/index.js";
import postsApi from "./routes/posts.js";
import connect from "./db/index.js";
import init from "./config/init.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	return res.json({ message: "Hello World!" });
});

app.post("/api/v1/echo", (req, res) => {
	return res.json(req.body);
});

app.use("/api/v1/posts", postsApi);

app.listen(PORT, () => {
	connect();
	init();
	console.log(`Server is listening on port ${PORT}`);
});

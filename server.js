import express from "express";
import { PORT } from "./config/index.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	return res.json({ message: "Hello World!" });
});

app.post("/api/v1/echo", (req, res) => {
    return res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log(`Click on this link to open http://localhost:${PORT}`);
});

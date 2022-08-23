import express from "express";

import { getBlogs, createBlogs } from "../controllers/blogs.js";

const router = express.Router();

router.get("/", getBlogs);
router.post("/", createBlogs);

export default router;
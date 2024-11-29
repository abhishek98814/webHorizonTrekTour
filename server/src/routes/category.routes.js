import { createCategory, getCategory } from "../controller/category.controller.js";
import express from "express";

const router = express.Router();

router.post("/categories", createCategory)
router.get("/categories", getCategory)

export default router;
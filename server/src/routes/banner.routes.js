import { createBanner, getAllBanner } from "../controller/banner.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import express from "express";

const router = express.Router();

// Create banner
router.post("/", upload.fields([
    { name: "bannerImage", maxCount: 4 },
]), createBanner);

// Get all banners
router.get("/", getAllBanner);

export default router;

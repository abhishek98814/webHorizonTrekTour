import express from "express";
import { createOverView, getAllOverViews, getOverViewById, updateOverView, deleteOverView } from "../controller/trekOverView.controller.js";

const router = express.Router();
router.post("/overview", createOverView);
router.get("/overviews", getAllOverViews);
router.get("/overview/:id", getOverViewById);
router.patch("/overview/:id", updateOverView);
router.delete("/overview/:id", deleteOverView);

export default router;

import express from "express";
import { getAllDevices } from "../controller/device.controller.js";
const router = express.Router();
router.get("/", getAllDevices);
export default router;

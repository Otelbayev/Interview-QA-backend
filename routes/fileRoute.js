import express from "express";

import {
  createFile,
  deleteFile,
  getAllFile,
  getByIdFile,
  updateFile,
} from "../controllers/fileController.js";
import upload from "../middlewares/upload.js";
import authenticateToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/upload", upload.single("file"), authenticateToken, createFile);
router.put("/update/:id", upload.single("file"), authenticateToken, updateFile);
router.delete("/delete/:id", authenticateToken, deleteFile);
router.get("/get-all", getAllFile);
router.get("/get-by-id/:id", authenticateToken, getByIdFile);

export default router;

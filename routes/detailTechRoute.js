import express from "express";
import authenticateToken from "../middlewares/authMiddleware.js";
import {
  createDetailTech,
  deleteDetailTech,
  getDetailTech,
  getDetailTechById,
  getDetailTechByTech,
  updateDetailTech,
} from "../controllers/detailTechController.js";

const router = express.Router();

router.post("/create", authenticateToken, createDetailTech);
router.get("/get-all", getDetailTech);
router.get("/get-by-id/:id", getDetailTechById);
router.get("/get-by-tech/:id", getDetailTechByTech);
router.put("/update/:id", authenticateToken, updateDetailTech);
router.delete("/delete/:id", authenticateToken, deleteDetailTech);

export default router;

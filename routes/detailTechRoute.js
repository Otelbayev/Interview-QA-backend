import express from "express";
import {
  createDetailTech,
  deleteDetailTech,
  getDetailTech,
  getDetailTechById,
  getDetailTechByTech,
  updateDetailTech,
} from "../controllers/detailTechController.js";

const router = express.Router();

router.post("/create", createDetailTech);
router.get("/get-all", getDetailTech);
router.get("/get-by-id/:id", getDetailTechById);
router.get("/get-by-tech/:id", getDetailTechByTech);
router.put("/update/:id", updateDetailTech);
router.delete("/delete/:id", deleteDetailTech);

export default router;

import express from "express";

import {
  createTech,
  deleteTech,
  getAllActiveTechs,
  getTech,
  getTechs,
  updateTech,
} from "../controllers/techController.js";
import authenticateToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", authenticateToken, createTech);
router.get("/get-all", authenticateToken, getTechs);
router.get("/site-get-all", getAllActiveTechs);
router.get("/get/:id", authenticateToken, getTech);
router.put("/update/:id", authenticateToken, updateTech);
router.delete("/delete/:id", authenticateToken, deleteTech);

export default router;

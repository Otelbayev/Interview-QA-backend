import express from "express";
import login from "../controllers/authController.js";
import authenticateToken from "../middlewares/authMiddleware.js";

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.get("/check", authenticateToken, (req, res) => {
  res.json({ message: "Login successful", verify: true });
});

export default authRoutes;

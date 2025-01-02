import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import techRoutes from "./routes/techRoute.js";
import fileRoutes from "./routes/fileRoute.js";
import detailTechRoute from "./routes/detailTechRoute.js";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/tech", techRoutes);
app.use("/api/file", fileRoutes);
app.use("/api/detail-tech", detailTechRoute);

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const seoContent = {
  csharp_dotnet: {
    title: "C# va .NET intervyu savollari va javoblari – Jasscript.uz",
    description:
      "C# va .NET bo'yicha intervyu savollari va javoblarini o'rganing! ASP.NET, ob'ektga yo'naltirilgan dasturlash va GUI savollari.",
    keywords:
      "C# intervyu savollari, .NET savollari, ASP.NET savollari, ob'ektga yo'naltirilgan dasturlash, C# qo'llanma",
  },
  python: {
    title: "Python bo'yicha intervyu savollari va javoblari – Jasscript.uz",
    description:
      "Python bo'yicha intervyu savollari va javoblariga tayyorlaning! Dasturlash asoslari, kutubxonalar va ma'lumotlar tahlili haqida savollar.",
    keywords:
      "Python intervyu savollari, Python javoblari, Python qo'llanma, Python kutubxonalar, Python tahlil savollari",
  },
};

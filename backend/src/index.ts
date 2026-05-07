import "dotenv/config";
import express from "express";
import { createRequire } from "module";
import cors from "cors";
import morgan from "morgan";
import { rateLimit } from "express-rate-limit";

import { config } from "./config/index.js";
import { connectToDatabase } from "./database/index.js";
import { notFound } from "./middlewares/not-found.js";
import { errorHandler } from "./middlewares/error-handler.js";

import { AuthRouter } from "./routes/auth.router.js";
import FoodRouter from "./routes/food.router.js";
import { CategoryRouter } from "./routes/category.router.js";
import { UserRouter } from "./routes/user.router.js";
import { OrderRouter } from "./routes/order.router.js";

// CJS модулийг ESM-д ачаалах
const require = createRequire(import.meta.url);
const helmet = require("helmet") as () => express.RequestHandler;

try {
  await connectToDatabase();
} catch (err) {
  console.log("❌ Database connection failed:", err);
  process.exit(1);
}

const app = express();

// Security headers
app.use(helmet());

// CORS — frontend-тай холбогдох зөвшөөрөл
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));

// Request logging (development дээр дэлгэрэнгүй)
app.use(morgan(config.isProduction ? "combined" : "dev"));

// JSON body parser
app.use(express.json());

// Rate limiting — зөвхөн production дээр идэвхтэй
if (config.isProduction) {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 500,
    message: { success: false, message: "Too many requests, try again later." },
  });
  app.use(limiter);
}

// Routes
app.use("/auth", AuthRouter);
app.use("/foods", FoodRouter);
app.use("/categories", CategoryRouter);
app.use("/users", UserRouter);
app.use("/orders", OrderRouter);

// 404 болон error handler — routes-ийн дараа байх ёстой
app.use(notFound);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`🚀 Server running on port ${config.port}`);
});

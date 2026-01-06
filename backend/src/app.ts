import express from "express";
import { errorHandler } from "./middlewares/error-handler.js";
import categoryRouter from "./routes/category.router.js";
import foodRouter from "./routes/category.router.js";
import userRouter from "./routes/category.router.js";
import orderRouter from "./routes/category.router.js";

const app = express();

app.use(express.json());

app.use("/categories", categoryRouter);
app.use("/foods", foodRouter);
app.use("/users", userRouter);
app.use("/orders", orderRouter);

// 🔴 ЗААВАЛ ХАМГИЙН СҮҮЛД
app.use(errorHandler);

export default app;

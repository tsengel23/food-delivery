import { Router } from "express";
import { createCategory } from "../controllers/category/create-category.js";
import { getCategories } from "../controllers/category/get-categories.js";
import { updateCategory } from "../controllers/category/update-category.js";
import { deleteCategory } from "../controllers/category/delete-category.js";
import { getCategory } from "../controllers/category/get-category.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const CategoryRouter = Router();

// Нийтийн route-ууд
CategoryRouter.get("/", getCategories);
CategoryRouter.get("/:id", getCategory);

// owner + manager удирдах боломжтой
CategoryRouter.post("/create", authenticate, authorize("owner", "manager"), createCategory);
CategoryRouter.put("/:id", authenticate, authorize("owner", "manager"), updateCategory);
CategoryRouter.delete("/:id", authenticate, authorize("owner", "manager"), deleteCategory);

export { CategoryRouter };

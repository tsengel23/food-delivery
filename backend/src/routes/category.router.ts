import { Router } from "express";
import { getFoods } from "../controllers/food/get-foods.js";
import { createFoods } from "../controllers/food/create-food.js";
import { getCategories } from "../controllers/category/get-categories.js";
import { createCategory } from "../controllers/category/create-.category.js";

const CategoryRouter = Router();

CategoryRouter.get("/", getCategories).post("/create", createCategory);

export { CategoryRouter };

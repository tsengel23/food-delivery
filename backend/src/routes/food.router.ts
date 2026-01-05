import { Router } from "express";
import { getFoods } from "../controllers/food/get-foods.js";
import { createFoods } from "../controllers/food/create-food.js";

const FoodRouter = Router();

FoodRouter.get("/", getFoods).post("/create", createFoods);

export default FoodRouter;

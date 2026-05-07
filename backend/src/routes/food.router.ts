import { Router } from "express";
import { getFoods } from "../controllers/food/get-foods.js";
import { getFood } from "../controllers/food/get-food.js";
import { createFood } from "../controllers/food/create-food.js";
import { updateFood } from "../controllers/food/update-food.js";
import { deleteFood } from "../controllers/food/delete-food.js";
import { getFoodsByCategoryId } from "../controllers/food/get-foods-by-category-id.js";
import { getFoodCountByCategory } from "../controllers/food/get-food-count-by-category.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { createFoodSchema, updateFoodSchema } from "../validators/food.validator.js";

const FoodRouter = Router();

// Нийтийн route-ууд — нэвтрэлт шаардахгүй
FoodRouter.get("/", getFoods);
FoodRouter.get("/category/:categoryId", getFoodsByCategoryId);
FoodRouter.get("/category/count/:categoryId", getFoodCountByCategory);
FoodRouter.get("/:id", getFood);

// owner + manager удирдах боломжтой
FoodRouter.post("/", authenticate, authorize("owner", "manager"), validate(createFoodSchema), createFood);
FoodRouter.post("/create", authenticate, authorize("owner", "manager"), validate(createFoodSchema), createFood);
FoodRouter.put("/:id", authenticate, authorize("owner", "manager"), validate(updateFoodSchema), updateFood);
FoodRouter.delete("/:id", authenticate, authorize("owner", "manager"), deleteFood);

export default FoodRouter;

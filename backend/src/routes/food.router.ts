import { Router } from "express";
import { getFoods } from "../controllers/food/get-foods.js";
import { createFoods } from "../controllers/food/create-food.js";
import { getFoodsByCategoryId } from "../controllers/food/get-foods-by-category-id.js";
import { getFoodCountByCategory } from "../controllers/food/get-food-count-by-category.js";

const FoodRouter = Router();
//
// FoodRouter.get("/", (req, res) => {
//   res.send("FOODS ROUTE OK");
// });

//

FoodRouter.get("/", getFoods)
  .post("/create", createFoods)
  .get("/category/:categoryId", getFoodsByCategoryId)
  .get("/category/count/:categoryId", getFoodCountByCategory);

export default FoodRouter;

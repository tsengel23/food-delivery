import { Router } from "express";
import { createCategory } from "../controllers/category/create-category.js";
import { getCategories } from "../controllers/category/get-categories.js";
import { updateCategory } from "../controllers/category/update-category.js";
import { deleteCategory } from "../controllers/category/delete-category.js";
import { getCategory } from "../controllers/category/get-category.js";

const CategoryRouter = Router();

CategoryRouter.get("/", getCategories)
  .post("/create", createCategory)
  .delete("/:id", deleteCategory);

export { CategoryRouter };

// import { Router } from "express";
// import {
//   createCategory,
//   getCategories,
//   getCategory,
//   updateCategory,
//   deleteCategory,
// } from "../controllers/category/index.js";

// const router = Router();

// router.post("/", createCategory);
// router.get("/", getCategories);
// router.get("/:id", getCategory);
// router.put("/:id", updateCategory);
// router.delete("/:id", deleteCategory);

// export default router;

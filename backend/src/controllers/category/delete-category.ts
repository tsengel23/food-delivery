//  delete ni data butsaah albagui
// confirmation message baihad l hangalttai

import type { RequestHandler } from "express";

import { CategoryModel } from "../../database/schema/category.schema.js";

export const deleteCategory: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const deleteCategory = await CategoryModel.findByIdAndDelete(id);

  if (!deleteCategory) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.status(200).json({ message: "Category deleted successfully" });
};

// try catch error handler-tai shinechilsen huvilbar!!!!!!

// export const deleteCategory: RequestHandler = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const category = await deleteCategoryService(id);

//     if (!category) return res.status(404).json({ message: "Not found" });

//     res.json({ message: "Deleted" });
//   } catch (e) {
//     next(e);
//   }
// };

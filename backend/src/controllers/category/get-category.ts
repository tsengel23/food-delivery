import type { RequestHandler } from "express";

import { CategoryModel } from "../../database/schema/category.schema.js";

export const getCategory: RequestHandler = async (req, res) => {
  const { id } = req.params; //<-----URL-aas ID avna!!!
  const category = await CategoryModel.findById(id); //<--database-s neg category
  if (!category) {
    //<----oldohgui bol [404]
    return res.status(404).json({ message: "Category not found" });
  }
  res.status(200).json(category);
};

// try catch error handler-tai shinechilsen huvilbar!!!!!!
//
// import type { RequestHandler } from "express";

// import { CategoryModel } from "../../database/schema/category.schema.js";
// export const getCategory: RequestHandler = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const category = await getCategoryService(id);

//     if (!category) return res.status(404).json({ message: "Not found" });

//     res.json(category);
//   } catch (e) {
//     next(e);
//   }
// };

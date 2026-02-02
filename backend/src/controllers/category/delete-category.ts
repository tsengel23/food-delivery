//  delete ni data butsaah albagui
// confirmation message baihad l hangalttai

// import type { RequestHandler } from "express";

// import { CategoryModel } from "../../database/schema/category.schema.js";

// export const deleteCategory: RequestHandler = async (req, res) => {
//   const { id } = req.params;

//   const deleteCategory = await CategoryModel.findByIdAndDelete(id);

//   if (!deleteCategory) {
//     return res.status(404).json({ message: "Category not found" });
//   }

//   res.status(200).json({ message: "Category deleted successfully" });
// };

//
//

// import type { RequestHandler } from "express";
// import { CategoryModel } from "../../database/schema/category.schema.js";
// import { FoodModel } from "../../database/schema/food.schema.js";

// export const deleteCategory: RequestHandler = async (req, res) => {
//   try {
//     const { categoryId } = req.params; // эсвэл id гэж байж магадгүй

//     // ✅ 1) Энэ category дотор хоол байна уу?
//     const count = await FoodModel.countDocuments({ categoryIds: categoryId });

//     if (count > 0) {
//       return res.status(409).json({
//         message: "Category has foods. Move or delete foods first.",
//         count,
//       });
//     }

//     // ✅ 2) Хоол байхгүй бол устгана
//     await CategoryModel.findByIdAndDelete(categoryId);

//     return res.json({ ok: true });
//   } catch (err) {
//     console.error("Delete category error:", err);
//     return res.status(500).json({ message: "Delete category failed" });
//   }
// };
//
//
import type { RequestHandler } from "express";
import { CategoryModel } from "../../database/schema/category.schema.js";
import { FoodModel } from "../../database/schema/food.schema.js";

export const deleteCategory: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params; // ⭐ router дээр :id гэж байгаа

    // 1) Энэ category дотор хоол байна уу?
    const count = await FoodModel.countDocuments({ categoryIds: id });

    if (count > 0) {
      return res.status(409).json({
        message: "Category has foods. Move or delete foods first.",
        count,
      });
    }

    // 2) Хоол байхгүй бол устгана
    await CategoryModel.findByIdAndDelete(id);

    return res.json({ ok: true });
  } catch (err) {
    console.error("Delete category error:", err);
    return res.status(500).json({ message: "Delete category failed" });
  }
};

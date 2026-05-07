import "dotenv/config";
import mongoose from "mongoose";
import { config } from "../config/index.js";

const categorySchema = new mongoose.Schema({ name: { type: String } });
const foodSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  categoryIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});

const Category = mongoose.model("Category", categorySchema);
const Food = mongoose.model("Food", foodSchema);

async function run() {
  await mongoose.connect(config.mongodbUri);
  console.log("✅ connected\n");

  const totalFoods = await Food.countDocuments();
  const allCategories = await Category.find().lean();
  const catIds = new Set(allCategories.map((c: any) => c._id.toString()));

  console.log(`Нийт хоол: ${totalFoods}`);
  console.log(`Category тоо: ${allCategories.length}\n`);

  console.log("── Category тус бүрийн хоолны тоо ──");
  let grandTotal = 0;
  for (const cat of allCategories) {
    const count = await Food.countDocuments({ categoryIds: (cat as any)._id });
    grandTotal += count;
    console.log(`  ${String((cat as any).name).padEnd(25)} ${count}`);
  }
  console.log(`  ${"─── Нийлбэр".padEnd(25)} ${grandTotal}`);
  console.log(`  ${"─── Бодит нийт".padEnd(25)} ${totalFoods}`);

  // Orphaned foods (categoryId нь байхгүй category руу заасан)
  const allFoods = await Food.find().lean();
  const orphaned = allFoods.filter((f: any) =>
    (f.categoryIds as any[]).some((id: any) => !catIds.has(id.toString())),
  );
  console.log(`\n⚠️  Устгагдсан category-тай хоол: ${orphaned.length}`);
  for (const f of orphaned) {
    console.log(`  - ${(f as any).name}`);
  }

  await mongoose.disconnect();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

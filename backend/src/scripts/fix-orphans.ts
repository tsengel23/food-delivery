import "dotenv/config";
import mongoose from "mongoose";
import { config } from "../config/index.js";

const categorySchema = new mongoose.Schema({ name: { type: String } });
const foodSchema = new mongoose.Schema({
  name: { type: String },
  categoryIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});

const Category = mongoose.model("Category", categorySchema);
const Food = mongoose.model("Food", foodSchema);

async function run() {
  await mongoose.connect(config.mongodbUri);
  console.log("✅ connected\n");

  const allCategories = await Category.find().lean();
  const validCatIds = new Set(allCategories.map((c: any) => c._id.toString()));

  const catByName = (name: string) =>
    (allCategories as any[]).find(
      (c) => c.name.toLowerCase() === name.toLowerCase(),
    );

  // ── 1. Бүх хоолноос устсан categoryId-уудыг цэвэрлэх ─────────────────────
  const allFoods = await Food.find().lean();
  let cleaned = 0;
  for (const f of allFoods) {
    const validIds = ((f as any).categoryIds as any[]).filter((id: any) =>
      validCatIds.has(id.toString()),
    );
    if (validIds.length !== (f as any).categoryIds.length) {
      await Food.updateOne({ _id: (f as any)._id }, { $set: { categoryIds: validIds } });
      console.log(`🧹 ${(f as any).name} — устсан ID цэвэрлэгдлээ`);
      cleaned++;
    }
  }
  console.log(`✅ ${cleaned} хоолноос устсан category ID цэвэрлэгдлээ\n`);

  // ── 2. Category-гүй болсон хоолнуудыг зөв category-д нэмэх ───────────────
  const drinksCat = catByName("Drinks");
  const pizzasCat = catByName("Pizzas");

  const toFix: Array<{ name: string; catName: string }> = [
    { name: "Coca Cola", catName: "Drinks" },
    { name: "Margherita Pizza", catName: "Pizzas" },
  ];

  for (const { name, catName } of toFix) {
    const cat = catByName(catName);
    if (!cat) { console.log(`⚠️  '${catName}' category олдсонгүй`); continue; }
    const food = await Food.findOne({ name }).lean();
    if (!food) { console.log(`⚠️  '${name}' хоол олдсонгүй`); continue; }
    const alreadyIn = ((food as any).categoryIds as any[]).some(
      (id: any) => id.toString() === cat._id.toString(),
    );
    if (!alreadyIn) {
      await Food.updateOne({ name }, { $addToSet: { categoryIds: cat._id } });
      console.log(`✔ '${name}' → '${catName}' category-д нэмэгдлээ`);
    } else {
      console.log(`↩ '${name}' аль хэдийн '${catName}'-д байна`);
    }
  }

  // ── 3. Шалгалт ────────────────────────────────────────────────────────────
  console.log("\n── Эцсийн тоо ──");
  const total = await Food.countDocuments();
  let sum = 0;
  for (const cat of allCategories) {
    const count = await Food.countDocuments({ categoryIds: (cat as any)._id });
    sum += count;
    console.log(`  ${String((cat as any).name).padEnd(25)} ${count}`);
  }
  console.log(`  ${"─── Нийлбэр".padEnd(25)} ${sum}`);
  console.log(`  ${"─── Нийт".padEnd(25)} ${total}`);
  if (sum === total) console.log("\n✅ Тоонууд таарч байна!");
  else console.log(`\n⚠️  Зөрүү: ${total - sum} хоол category-гүй хэвээр`);

  await mongoose.disconnect();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

import "dotenv/config";
import mongoose from "mongoose";
import { config } from "../config/index.js";

const foodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  ingredients: String,
  categoryIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});

const Food = mongoose.model("Food", foodSchema);

// ── Устгах test data-ийн нэрс ─────────────────────────────────────────────────
const TEST_NAMES = new Set([
  "test1", "test2", "wowow",
  "asd", "asda", "asdad", "asasda", "asdasd", "adasdasd",
  "boodog", "boodog12",
  "horhog", "street food2", "cavier salad", "zagas",
]);

// ── Бодит US ресторантын үнэ ──────────────────────────────────────────────────
const REAL_PRICES: Record<string, number> = {
  // Burger & Sandwich
  "Cheese Burger":              14.99,
  "Chicken Wrap":               13.99,
  "Grilled Chicken Sandwich":   14.99,

  // Pizza
  "Hawaiian Pizza":             16.99,
  "BBQ Chicken Pizza":          17.99,
  "Pepperoni Pizza":            16.99,
  "Vegetarian Pizza":           15.99,
  "Margherita Pizza":           14.99,
  "Four Cheese Pizza":          17.99,

  // Steak & Meat
  "BBQ Ribs":                   29.99,
  "Grilled Lamb Chops":         34.99,
  "Roasted Chicken":            21.99,
  "Pork Schnitzel":             22.99,
  "Grilled Beef Steak":         32.99,
  "Beef Stroganoff":            24.99,
  "Lunch Combo Set":            18.99,

  // Seafood
  "Grilled Salmon":             27.99,
  "Garlic Butter Shrimp":       24.99,
  "Shrimp Pasta":               22.99,
  "Seafood Platter":            38.99,
  "Tuna Steak":                 29.99,
  "Fish & Chips":               17.99,

  // Pasta & Noodles
  "Spaghetti Bolognese":        17.99,
  "Beef Noodles":               15.99,
  "Chicken Fried Rice":         13.99,

  // Salad
  "Chicken Caesar Salad":       14.99,
  "Greek Salad":                12.99,
  "Avocado Salad":              13.99,
  "Chicken Salad":              13.99,
  "Tuna Salad":                 13.99,
  "Quinoa Salad":               13.99,

  // Appetizer & Sides
  "Chicken Nuggets":            10.99,
  "Bruschetta":                 10.99,
  "Spring Rolls":               10.99,
  "Mozzarella Sticks":          11.99,
  "Garlic Bread":                6.99,

  // Drinks
  "Espresso":                    3.99,
  "Cappuccino":                  5.99,
  "Iced Lemon Tea":              4.99,
  "Fresh Orange Juice":          5.99,
  "Mineral Water":               2.99,
  "Coca Cola":                   3.99,

  // Монгол хоол
  "Huurga":                     12.99,
  "bannshtai tsai":             11.99,
  "talhtai mah":                13.99,
};

async function run() {
  await mongoose.connect(config.mongodbUri);
  console.log("✅ MongoDB connected\n");

  // ── 1. Test data устгах ───────────────────────────────────────────────────
  const deleted = await Food.deleteMany({ name: { $in: [...TEST_NAMES] } });
  console.log(`🗑️  Test data устгагдлаа: ${deleted.deletedCount} хоол\n`);

  // ── 2. Давхардсан "Chicken Fried Rice" нэгийг устгах ─────────────────────
  const cfr = await Food.find({ name: "Chicken Fried Rice" }).lean();
  const cfrLast = cfr[cfr.length - 1];
  if (cfr.length > 1 && cfrLast) {
    await Food.deleteOne({ _id: cfrLast._id });
    console.log(`🗑️  Давхардсан 'Chicken Fried Rice' устгагдлаа\n`);
  }

  // ── 3. Үнэ шинэчлэх ──────────────────────────────────────────────────────
  console.log("═══════════════════════════════════════════════════");
  console.log(" ҮНЭ ШИНЭЧЛЭЛТ");
  console.log("═══════════════════════════════════════════════════");

  let updatedCount = 0;
  for (const [name, price] of Object.entries(REAL_PRICES)) {
    const res = await Food.updateMany({ name }, { $set: { price } });
    if (res.matchedCount > 0) {
      console.log(`  ✔ ${name.padEnd(35)} → $${price}`);
      updatedCount += res.modifiedCount;
    }
  }
  console.log(`\n✅ ${updatedCount} хоолны үнэ шинэчлэгдлээ.\n`);

  // ── 4. Эцсийн байдал харуулах ─────────────────────────────────────────────
  const remaining = await Food.find().lean();
  console.log("═══════════════════════════════════════════════════");
  console.log(" ЭЦСИЙН ЖАГСААЛТ");
  console.log("═══════════════════════════════════════════════════");
  for (const f of remaining) {
    const inMap = REAL_PRICES[f.name as string] !== undefined;
    const flag = inMap ? "✅" : "⚠️  (үнэ шинэчлэгдээгүй)";
    console.log(`  ${flag}  ${String(f.name).padEnd(38)} $${f.price}`);
  }

  await mongoose.disconnect();
  console.log("\n✅ Done.");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

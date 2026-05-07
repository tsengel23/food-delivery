import "dotenv/config";
import mongoose from "mongoose";
import { config } from "../config/index.js";

const OrderModel = mongoose.model(
  "Order",
  new mongoose.Schema({}, { strict: false })
);

async function main() {
  await mongoose.connect(config.mongodbUri);
  console.log("✅ MongoDB connected");

  const result = await OrderModel.deleteMany({});
  console.log(`🗑️  Deleted ${result.deletedCount} orders`);

  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

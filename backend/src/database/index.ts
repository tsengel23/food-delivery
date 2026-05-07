import { connect } from "mongoose";
import { config } from "../config/index.js";

export const connectToDatabase = async () => {
  await connect(config.mongodbUri);
  console.log("✅ MongoDB connected");
};

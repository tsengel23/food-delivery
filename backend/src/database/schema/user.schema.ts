import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String, required: false },
    address: { type: String, required: false },
    // owner: бүх эрх | manager: хоол+захиалга | customer: зөвхөн захиалга
    role: {
      type: String,
      enum: ["owner", "manager", "customer"],
      default: "customer",
    },
  },
  { timestamps: true }
);

export const UserModel = model("User", userSchema);

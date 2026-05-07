import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
      {
        foodId: { type: Schema.Types.ObjectId, ref: "Food", required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true }, // тухайн үеийн хоолны үнэ
      },
    ],
    totalPrice: { type: Number, required: true },
    deliveryAddress: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "paid", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const OrderModel = model("Order", orderSchema);

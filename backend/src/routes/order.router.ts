import { Router } from "express";
import { createOrder } from "../controllers/order/create-order.js";
import { getOrders } from "../controllers/order/get-orders.js";
import { getOrder } from "../controllers/order/get-order.js";
import { updateOrder } from "../controllers/order/update-order.js";
import { deleteOrder } from "../controllers/order/delete-order.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { createOrderSchema, updateOrderSchema } from "../validators/order.validator.js";

const OrderRouter = Router();

// Бүх order route нэвтрэлт шаардана
OrderRouter.use(authenticate);

OrderRouter.get("/", getOrders); // admin: бүгдийг, customer: өөрийнхийг
OrderRouter.get("/:id", getOrder);
OrderRouter.post("/", validate(createOrderSchema), createOrder);
OrderRouter.put("/:id", authorize("owner", "manager"), validate(updateOrderSchema), updateOrder);
OrderRouter.delete("/:id", authorize("owner", "manager"), deleteOrder);

export { OrderRouter };

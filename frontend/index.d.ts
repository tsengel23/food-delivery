type food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
  categoryIds: category[];
};

// type categoryId = {
//   _id: string;
//   name: string;
// };

type category = {
  _id: string;
  name: string;
};

type OrderItem = {
  foodId: { _id: string; name: string; price: number; image: string };
  quantity: number;
  price: number;
};

type Order = {
  _id: string;
  userId: { _id: string; email: string };
  orderItems: OrderItem[];
  totalPrice: number;
  status: "pending" | "paid" | "delivered" | "cancelled";
  deliveryAddress: string;
  createdAt: string;
};

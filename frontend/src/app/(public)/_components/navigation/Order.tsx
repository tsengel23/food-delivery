"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Map, ShoppingCart, Soup, Timer, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MyCartFood } from "../MyCartFood";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { PaymentInfo } from "./PaymentInfo";
import { CartContentDeliveryLocation } from "./CartContentDeliveryLocation";
import { CartIsEmpthy } from "./CartIsEmpthy";
import { SuccessOrder } from "./SuccessOrder";
import { useCart } from "@/app/context/Cart-Context";
import { api } from "@/lib/axios";

const STATUS_STYLE: Record<string, string> = {
  pending: "border-red-500 text-red-500",
  paid: "border-blue-500 text-blue-500",
  delivered: "border-green-500 text-green-500",
  cancelled: "border-gray-400 text-gray-400",
};

export const Order = () => {
  const { cartItems, updateQuantity, removeFromCart, address, setAddress } = useCart();
  const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [activeTab, setActiveTab] = useState("cart");
  const [orders, setOrders] = useState<Order[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const fetchOrders = async () => {
    try {
      const { data } = await api.get<Order[]>("/orders");
      setOrders(data);
    } catch {
      // token байхгүй үед (нэвтрээгүй) алдаа гарч болно — дуугүй өнгөрнө
    }
  };

  useEffect(() => {
    if (activeTab === "order") fetchOrders();
  }, [activeTab]);

  const handleOrderPlaced = () => {
    setAddress("");
    setShowSuccess(true);
  };

  return (
    <>
      <SuccessOrder
        open={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          setActiveTab("order");
        }}
      />
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="w-9 h-9 flex justify-center items-center bg-white rounded-full hover:bg-[#FF692A] hover:text-black transition ease-in relative"
          >
            <ShoppingCart className="w-4 h-4" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-red-500 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm">
                {count}
              </span>
            )}
          </Button>
        </SheetTrigger>

        <SheetContent className="min-w-130 h-[100dvh] flex flex-col rounded-tl-3xl rounded-bl-3xl bg-[#404040] [&>button]:hidden">
          <SheetHeader className="relative">
            <SheetTitle className="flex gap-3">
              <ShoppingCart className="w-6 h-6 text-[#E4E4E7]" />
              <p className="text-[#E4E4E7] font-semibold text-xl">Order detail</p>
            </SheetTitle>
            <SheetClose className="absolute top-2 right-2">
              <div className="w-9 h-9 rounded-full border border-[#F4F4F5] flex justify-center items-center hover:bg-gray-500">
                <X className="w-4 h-4 text-[#F4F4F5]" />
              </div>
            </SheetClose>
          </SheetHeader>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="px-4 flex flex-col flex-1 min-h-0"
          >
            <TabsList className="w-full rounded-full">
              <TabsTrigger value="cart" className="rounded-full p-1 data-[state=active]:bg-[#EF4444]">
                Cart
              </TabsTrigger>
              <TabsTrigger value="order" className="rounded-full p-1 data-[state=active]:bg-[#EF4444]">
                Order
              </TabsTrigger>
            </TabsList>

            {/* Cart tab */}
            <TabsContent value="cart" className="flex-1 min-h-0 flex flex-col mt-4">
              <div className="flex-1 flex flex-col bg-white rounded-xl p-4 mb-6">
                <h1 className="text-[#71717A] text-xl font-semibold">My cart</h1>
                {cartItems.length === 0 ? (
                  <CartIsEmpthy />
                ) : (
                  <>
                    <div className="w-full h-[289px] grid grid-cols-1 overflow-y-auto">
                      {cartItems.map((item) => (
                        <MyCartFood
                          key={item._id}
                          item={item}
                          onUpdateQuantity={updateQuantity}
                          onRemove={removeFromCart}
                        />
                      ))}
                    </div>
                    <CartContentDeliveryLocation value={address} onChange={setAddress} />
                  </>
                )}
              </div>
              <PaymentInfo address={address} onOrderPlaced={handleOrderPlaced} />
            </TabsContent>

            {/* Order history tab */}
            <TabsContent value="order" className="flex-1 min-h-0 flex flex-col mt-4 pb-6">
              <div className="flex-1 min-h-0 overflow-y-auto flex flex-col bg-white rounded-xl p-4">
                <h1 className="text-[#09090B] text-xl font-semibold">Order history</h1>

                {orders.length === 0 && (
                  <div className="flex flex-col gap-1 items-center justify-center p-8 rounded-xl bg-[#FAFAFA] mt-3">
                    <img src="/logo empthy.png" className="w-[61px] h-[50px]" />
                    <p className="font-bold text-[#09090B] text-base">No Orders Yet?</p>
                    <p className="text-xs text-[#71717A] font-normal text-center">
                      🍕 You haven't placed any orders yet. Start exploring our menu and satisfy your cravings!
                    </p>
                  </div>
                )}

                {orders.map((order, idx) => (
                  <div key={order._id}>
                    {idx > 0 && (
                      <div className="border-t border-dashed border-gray-300 my-3" />
                    )}
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between">
                        <p className="text-[#09090B] text-base font-bold">
                          ${order.totalPrice.toFixed(2)}{" "}
                          <span className="text-gray-400 text-xs">(#{order._id.slice(-5)})</span>
                        </p>
                        <Badge
                          variant="outline"
                          className={`px-3 py-1 text-xs font-semibold capitalize ${STATUS_STYLE[order.status] ?? "border-gray-400 text-gray-400"}`}
                        >
                          {order.status}
                        </Badge>
                      </div>

                      {order.orderItems.map((item) => (
                        <div key={item.foodId._id} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Soup className="w-4 h-4 text-gray-400" />
                            <span className="text-[#71717A] text-xs font-normal">{item.foodId.name}</span>
                          </div>
                          <span className="text-xs">x {item.quantity}</span>
                        </div>
                      ))}

                      <div className="flex items-center gap-2">
                        <Timer className="w-4 h-4 text-gray-400" />
                        <span className="text-[#71717A] text-xs font-normal">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Map className="w-4 h-4 text-gray-400 shrink-0" />
                        <p className="line-clamp-1 text-[#71717A] text-xs font-normal">
                          {order.deliveryAddress}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </>
  );
};

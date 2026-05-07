"use client";

import { useCart } from "@/app/context/Cart-Context";
import { useAuth } from "@/app/context/AuthProvider";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import { useState } from "react";
import { OpenAuthDialog } from "./OpenAuthDialog";

type Props = {
  address: string;
  onOrderPlaced: () => void;
};

export const PaymentInfo = ({ address, onOrderPlaced }: Props) => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const subtotal = getTotalPrice();
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const shipping = cartItems.length === 0 ? 0 : totalQty >= 15 ? 0 : 2.99;
  const total = subtotal + shipping;

  const handleCheckout = async () => {
    if (!user) {
      setShowLoginDialog(true);
      return;
    }
    if (!address.trim()) {
      toast.error("Please enter a delivery address");
      return;
    }
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setLoading(true);
    try {
      await api.post("/orders", {
        orderItems: cartItems.map((item) => ({
          foodId: item._id,
          quantity: item.quantity,
        })),
        deliveryAddress: address.trim(),
      });

      clearCart();
      onOrderPlaced();
      toast.success("Order placed successfully!");
    } catch {
      toast.error("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col rounded-xl p-4 bg-white gap-2">
        <h1 className="text-[#71717A] text-xl font-semibold">Payment info</h1>
        <div className="flex flex-col">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Items</span>
            <span className="font-medium">
              {subtotal > 0 ? `$${subtotal.toFixed(2)}` : "-"}
            </span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-500">Shipping</span>
            <span className="font-medium">
              {cartItems.length === 0
                ? "-"
                : shipping === 0
                  ? <span className="text-green-500">FREE</span>
                  : `$${shipping.toFixed(2)}`}
            </span>
          </div>
        </div>
        <div className="border-t border-dashed border-gray-300 my-3" />
        <div className="flex justify-between text-base font-semibold mb-5">
          <span>Total</span>
          <span>{total > 0 ? `$${total.toFixed(2)}` : "-"}</span>
        </div>
        <Button
          variant="outline"
          className="!bg-[#EF4444] rounded-full text-white disabled:opacity-50"
          disabled={loading || cartItems.length === 0}
          onClick={handleCheckout}
        >
          {loading ? "Placing order..." : "Checkout"}
        </Button>
      </div>

      <OpenAuthDialog open={showLoginDialog} onOpenChange={setShowLoginDialog} />
    </>
  );
};

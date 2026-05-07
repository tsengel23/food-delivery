"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Check, Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/app/context/Cart-Context";
import { useAuth } from "@/app/context/AuthProvider";
import { toast } from "sonner";
import { OpenAuthDialog } from "./navigation/OpenAuthDialog";

export interface FoodItem {
  _id: string;
  name: string;
  price: number;
  ingredients: string;
  image: string;
}

interface FoodCardProps {
  item: FoodItem;
  onClose: () => void;
  onAddToCart: (item: FoodItem, quantity: number) => void;
}

export const FoodCard = ({ item, onClose, onAddToCart }: FoodCardProps) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [selected, setSelected] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  const handleAddToCart = () => {
    if (!user) {
      setShowAuthDialog(true);
      return;
    }
    addToCart(
      {
        _id: item._id,
        name: item.name,
        price: item.price,
        ingredients: item.ingredients,
        image: item.image,
      },
      quantity,
    );
    toast.success("Food is being added to the cart!");
    setQuantity(1);
    setOpen(false);
    onClose();
  };

  return (
    <div className="relative">
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="flex flex-col gap-5 p-4 rounded-2xl bg-white">
          <div className="rounded-xl relative aspect-[365/210] w-full overflow-hidden group">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              src={item.image}
              alt={item.name}
            />
          </div>
          <div>
            <div className="flex justify-between">
              <h1 className="text-[#EF4444] text-2xl font-semibold">
                {item.name}
              </h1>
              <p className="text-[#09090B] text-lg font-semibold">
                $<span>{item.price}</span>
              </p>
            </div>
            <p className="text-[#09090B] text-sm font-normal mt-2">
              {item.ingredients}
            </p>
          </div>
        </div>

        <DialogContent className="[&>button]:hidden min-w-[826px]">
          <DialogTitle></DialogTitle>
          {item && (
            <div className="flex gap-6">
              <div className="rounded-xl relative aspect-[377/364] w-full overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col justify-between aspect-[377/364] w-full">
                <div className="flex flex-col gap-3 mt-9">
                  <h1 className="text-3xl text-[#EF4444] font-semibold">
                    {item.name}
                  </h1>
                  <p className="text-base">{item.ingredients}</p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between">
                    <div className="flex flex-col justify-between">
                      <p className="text-[#09090B] text-2xl font-normal">
                        Total price
                      </p>
                      <p className="text-[#09090B] text-2xl font-semibold">
                        $<span>{(item.price * quantity).toFixed(2)}</span>
                      </p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Button
                        onClick={() =>
                          setQuantity((q) => Math.max(1, q - 1))
                        }
                        type="button"
                        variant="outline"
                        className="w-11 h-11 rounded-full border border-gray-400 flex justify-center items-center p-1"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="text-[#09090B] text-lg font-semibold">
                        {quantity}
                      </span>
                      <Button
                        onClick={() => setQuantity((q) => q + 1)}
                        type="button"
                        variant="outline"
                        className="w-11 h-11 rounded-full border border-gray-400 flex justify-center items-center p-1"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <Button onClick={handleAddToCart} className="rounded-full py-2">
                    Add to cart
                  </Button>
                </div>
              </div>
              <DialogClose className="absolute top-10 right-5">
                <div className="w-9 h-9 border rounded-full flex justify-center items-center hover:bg-gray-200">
                  <X className="w-4 h-4" />
                </div>
              </DialogClose>
            </div>
          )}
        </DialogContent>

        <DialogTrigger asChild>
          <Button
            onClick={() => setSelected(!selected)}
            type="button"
            className={`w-11 h-11 rounded-full absolute right-7 bottom-31
            ${selected ? "bg-black" : "bg-white"}`}
          >
            {selected ? (
              <Check className="text-white" />
            ) : (
              <Plus className="text-[#EF4444]" />
            )}
          </Button>
        </DialogTrigger>
      </Dialog>

      <OpenAuthDialog open={showAuthDialog} onOpenChange={setShowAuthDialog} />
    </div>
  );
};

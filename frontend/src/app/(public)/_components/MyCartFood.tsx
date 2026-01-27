"use client";
import { CartItem } from "@/app/context/Cart-Context";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";

type MyCartFood = {
  item: CartItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
};

export const MyCartFood = ({
  item,
  onUpdateQuantity,
  onRemove,
}: MyCartFood) => {
  // const [count, setCount] = useState(1);
  return (
    <div>
      <div className=" flex gap-[10px] border-3 border-blue-400 relative">
        <div className="rounded-xl border border-red-500 relative overflow-hidden flex-shrink-0 w-32 h-32">
          <img
            src={item.image ?? "/food2.png"}
            //   src="/food2.png"
            className="absolute w-full h-full inset-0 top-0 left-0 object-cover"
          />
        </div>
        <div className="w-full flex flex-col gap-6 border border-red-400">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#EF4444] text-base font-bold">
              {item.name}
              {/* Sunshine Stackers */}
            </h1>
            <p className="text-[#09090B] text-xs font-normal">
              {item.ingredients}
              {/* Fluffy pancakes stacked with fruits, cream, syrup, and powdered
            sugar. */}
            </p>
          </div>
          <div className="flex justify-between border border-green-500 items-center">
            <div className="flex items-center gap-2">
              <Button
                className="p-0"
                variant={"ghost"}
                onClick={() => onUpdateQuantity(item._id, item.quantity - 1)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-[#09090B] text-lg font-semibold">
                {item.quantity}
              </span>
              <Button
                variant={"ghost"}
                onClick={() => onUpdateQuantity(item._id, item.quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <p className=" text-[#09090B] text-base font-bold">
              {/* $<span>12.99</span> */} ${item.price.toFixed(2)}
            </p>
          </div>
        </div>
        <Button
          variant={"outline"}
          type="button"
          className="flex justify-center items-center rounded-full w-7 h-7 absolute top-1 right-1 border border-[#EF4444]"
          onClick={() => onRemove(item._id)}
        >
          <X className="w-3 h-3 text-[#EF4444]" />
        </Button>
      </div>
      <div className="border-t border-dashed border-gray-300 my-4" />
    </div>
  );
};

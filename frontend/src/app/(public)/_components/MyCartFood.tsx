"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type MyCartFood = {
  image?: string;
  title: string;
  overview: string;
  price: string;
};

export const MyCartFood = ({ image, title, overview, price }: MyCartFood) => {
  const [count, setCount] = useState(1);
  return (
    <div className="flex gap-[10] border border-red-400 my-5">
      <div className="rounded-xl border border-red-500 relative overflow-hidden flex-shrink-0 w-30 h-30">
        <img
          src={image}
          //   src="/food2.png"
          className="absolute w-full h-full inset-0 top-0 left-0 object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 border border-red-400">
        <div className="flex flex-col">
          <h1 className="text-[#EF4444] text-base font-bold">
            {title}
            {/* Sunshine Stackers */}
          </h1>
          <p className="text-[#09090B] text-xs font-normal">
            {overview}
            {/* Fluffy pancakes stacked with fruits, cream, syrup, and powdered
            sugar. */}
          </p>
        </div>
        <div className="flex justify-between border border-green-500 items-center">
          <div className="flex items-center gap-4 pl-2">
            <Button
              variant={"outline"}
              onClick={() => setCount((prev) => Math.max(1, prev - 1))}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="text-[#09090B] text-lg font-semibold">1</span>
            <Button
              variant={"outline"}
              onClick={() => {
                setCount((prev) => prev + 1);
              }}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <p className="pr-2 text-[#09090B] text-base font-bold">
            {/* $<span>12.99</span> */}$ ${(Number(price) * count).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CategoryPill = {
  name: string;
  count: number;
  active: boolean;
};

export const CategoryPill = ({ name, count, active }: CategoryPill) => {
  return (
    <Button
      variant={"outline"}
      className={`${
        active ? "border-green-600 bg-green-200" : "border-black"
      }  rounded-full hover:bg-green-100`}
    >
      {name}
      <Badge className="bg-black text-white w-fit h-[16px] flex justify-center items-center">
        {count}
      </Badge>
    </Button>
  );
};

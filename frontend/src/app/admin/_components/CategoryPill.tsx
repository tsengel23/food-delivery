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
    <Button variant={active ? "default" : "outline"} className="rounded-full">
      {name}
      <Badge className={active ? "bg-white text-black" : "bg-black text-white"}>
        {count}
      </Badge>
    </Button>
  );
};

"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CategoryPill = {
  id: string;
  name: string;
  count: number;
  active: boolean;
  onSelect: (id: string) => void;
};

export const CategoryPill = ({
  id,
  name,
  count,
  active,
  onSelect,
}: CategoryPill) => {
  return (
    <Button
      variant={active ? "default" : "outline"}
      className="rounded-full"
      onClick={() => onSelect(id)}
    >
      {name}
      <Badge>{count}</Badge>
    </Button>
  );
};

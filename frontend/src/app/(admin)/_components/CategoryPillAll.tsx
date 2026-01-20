"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/axios";

import { useEffect, useState } from "react";

type CategoryPillAllProps = {
  name: string;
};

export const CategoryPillAll = ({ name }: CategoryPillAllProps) => {
  // const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getFoodCount = async () => {
      const { data } = await api.get(`/foods`);
      setCount(data.length);
    };

    getFoodCount();
  }, []);

  return (
    <div className="flex justify-center items-center border rounded-full border-red-500 px-0.5 hover:bg-green-100 hover:border-green-400">
      <Button
        // onClick={() => setSelected(true)}
        variant={"ghost"}
        className={`border border-white rounded-full hover:bg-green-100 hover:border-green-100 group`}
      >
        <p className="text-base font-medium text-red-400">{name}</p>
        <Badge className="border border-black bg-black text-white w-fit h-4 flex justify-center items-center group-hover:bg-white group-hover:text-black group-hover:border-red-500">
          {count}
        </Badge>
      </Button>
    </div>
  );
};

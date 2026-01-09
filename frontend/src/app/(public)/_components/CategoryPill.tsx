"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";

type CategoryPillProps = {
  category: category;
};

export const CategoryPill = ({ category }: CategoryPillProps) => {
  // const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getFoodCount = async () => {
      const { data } = await api.get(`/foods/category/count/${category._id}`);
      setCount(data.count);
    };

    getFoodCount();
  }, []);

  return (
    <Button
      // onClick={() => setSelected(true)}
      variant={"outline"}
      className={`border-black rounded-full hover:bg-green-100`}
    >
      {category.name}
      <Badge className="bg-black text-white w-fit h-4 flex justify-center items-center">
        {count}
      </Badge>
    </Button>
  );
};

// "use client";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// type CategoryPill = {
//   name: string;
//   count: number;
//   active: boolean;
// };

// export const CategoryPill = ({ name, count, active }: CategoryPill) => {
//   return (
//     <Button
//       variant={"outline"}
//       className={`${
//         active ? "border-green-600 bg-green-200" : "border-black"
//       }  rounded-full hover:bg-green-100`}
//     >
//       {name}
//       <Badge className="bg-black text-white w-fit h-[16px] flex justify-center items-center">
//         {count}
//       </Badge>
//     </Button>
//   );
// };

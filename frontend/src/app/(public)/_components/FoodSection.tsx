"use client";

import { Description } from "@radix-ui/react-dialog";
import { FoodCard } from "./FoodCard";
import { SubTitle } from "./SubTitle";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

// const foods = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1541599468348-e96984315921?w=400&h=300&fit=crop",
//     name: "Finger food",
//     description:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//     price: "$12.99",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1559058789-672da06263d8?w=400&h=300&fit=crop",
//     name: "Cranberry Brie Bites",
//     description:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//     price: "$12.99",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
//     name: "Sunshine Stackers",
//     description:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//     price: "$12.99",
//   },
//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
//     name: "Brie Crostini Appetizer",
//     description:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//     price: "$12.99",
//   },
//   {
//     id: 5,
//     image:
//       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
//     name: "Sunshine Stackers",
//     description:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//     price: "$12.99",
//   },
//   {
//     id: 6,
//     image:
//       "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
//     name: "Grilled chicken",
//     description:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//     price: "$12.99",
//   },
// ];
type FoodSectionProps = {
  categoryName: string;
  categoryId: string;
};

export const FoodSection = ({ categoryName, categoryId }: FoodSectionProps) => {
  const [foods, setFoods] = useState<food[]>([]);

  useEffect(() => {
    const fetchfoods = async () => {
      const { data } = await api.get<food[]>(`/foods/category/${categoryId}`);
      console.log({ data });

      setFoods(data);
    };
    fetchfoods();
  }, [categoryId]);

  return (
    <div className="w-full h-fit grid grid-cols-3 gap-9 border border-red-600 mb-13.5">
      <div className="col-span-3">
        <SubTitle text={categoryName} />
      </div>
      {foods?.map((item) => {
        return (
          <FoodCard
            key={item._id}
            item={item}
            onClose={() => {}}
            onAddToCart={(item, quantity) => {
              console.log(item, quantity);
            }}
          />
        );
      })}
    </div>
  );
};

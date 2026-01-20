"use client";

import { AddNewDish } from "./AddNewDish";
import { FoodMenuCard } from "./FoodMenuCard";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

// const appetizers = [
//   {
//     image: "food2.png",
//     name: "Brie Crostini Appetizer",
//     price: 12,
//     ingredients:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//   },
//   {
//     image: "food2.png",
//     name: "Brie Crostini Appetizer",
//     price: 12,
//     ingredients:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//   },
//   {
//     image: "food2.png",
//     name: "Brie Crostini Appetizer",
//     price: 12,
//     ingredients:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//   },
//   {
//     image: "food2.png",
//     name: "Brie Crostini Appetizer",
//     price: 12,
//     ingredients:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//   },
//   {
//     image: "food2.png",
//     name: "Brie Crostini Appetizer",
//     price: 12,
//     ingredients:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//   },
//   {
//     image: "food2.png",
//     name: "Brie Crostini Appetizer",
//     price: 12,
//     ingredients:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//   },
// ];
type FoodMenuSectionProps = {
  categoryId: string;
  title: string;
};

export const FoodMenuSection = ({
  categoryId,
  title,
}: FoodMenuSectionProps) => {
  const [foods, setFoods] = useState<food[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        setLoading(true);

        const url = categoryId ? `/foods?categoryId=${categoryId}` : `/foods`; // all dishes
        const { data } = await api.get(url);
        setFoods(data);
      } catch (error) {
        console.error("failed to fetch foods", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFoods();
  }, [categoryId]); //hamgiin chuhal mor
  return (
    <div className="w-full bg-white border rounded-xl p-5 flex flex-col gap-4  ">
      <h1 className="text-[#09090B] font-semibold text-xl">
        {title}(<span>{foods.length}</span>)
      </h1>
      <div className="flex flex-wrap gap-3 w-fit">
        <AddNewDish title={title} />

        {loading && <p>Loading ...</p>}

        {!loading &&
          foods.map((item) => {
            return (
              <FoodMenuCard
                key={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                ingredients={item.ingredients}
              />
            );
          })}
      </div>
    </div>
  );
};

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
  refreshKey?: number;
  onFoodCreated: () => void;
  onFoodDeleted?: () => void;
};

export const FoodMenuSection = ({
  categoryId,
  title,
  refreshKey,
  onFoodCreated,
  onFoodDeleted,
}: FoodMenuSectionProps) => {
  const [foods, setFoods] = useState<food[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        setLoading(true);

        const url = categoryId ? `/foods/category/${categoryId}` : `/foods`; // all dishes
        const { data } = await api.get(url);
        setFoods(data);
      } catch (error) {
        console.error("failed to fetch foods", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFoods();
  }, [categoryId, refreshKey]);
  return (
    <div className="w-full bg-white border rounded-xl p-5 flex flex-col gap-4  ">
      <h1 className="text-[#09090B] font-semibold text-xl">
        {title}(<span>{foods.length}</span>)
      </h1>
      <div className="flex flex-wrap gap-3 w-fit">
        <AddNewDish
          title={title}
          defaultCategoryId={categoryId}
          onCreated={(createdFood) => {
            setFoods((prev) => [createdFood, ...prev]);
            onFoodCreated(); //badge count refresh trigger
          }}
        />

        {loading && <p>Loading ...</p>}

        {!loading &&
          foods.map((item) => (
            <FoodMenuCard
              key={item._id}
              food={item}
              onUpdated={(updated) => {
                const newCatId = (updated.categoryIds as category[])?.[0]?._id;
                if (categoryId && newCatId !== categoryId) {
                  setFoods((prev) => prev.filter((f) => f._id !== updated._id));
                  onFoodDeleted?.();
                } else {
                  setFoods((prev) =>
                    prev.map((f) => (f._id === updated._id ? updated : f)),
                  );
                }
              }}
              onDeleted={(id) => {
                setFoods((prev) => prev.filter((f) => f._id !== id));
                onFoodDeleted?.();
              }}
            />
          ))}
      </div>
    </div>
  );
};

"use client";

import { FoodCard } from "./FoodCard";
import { SubTitle } from "./SubTitle";
const foods = [
  {
    image: "food.png",
    title: "Finger food",
    overview:
      "  Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    price: "12.99",
  },
  {
    image: "food.png",
    title: "Finger food",
    overview:
      "  Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    price: "12.99",
  },
  {
    image: "food.png",
    title: "Finger food",
    overview:
      "  Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    price: "12.99",
  },
  {
    image: "food.png",
    title: "Finger food",
    overview:
      "  Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    price: "12.99",
  },
  {
    image: "food.png",
    title: "Finger food",
    overview:
      "  Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    price: "12.99",
  },
  {
    image: "food.png",
    title: "Finger food",
    overview:
      "  Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    price: "12.99",
  },
];

export const FoodSection = () => {
  return (
    <div className="w-fit h-fit grid grid-cols-3 gap-9 border border-red-600 mb-13.5">
      <div className="col-span-3">
        <SubTitle text={"Appetizers"} />
      </div>
      {foods.map((item, index) => {
        return (
          <FoodCard
            key={index}
            image={item.image}
            title={item.title}
            overview={item.overview}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

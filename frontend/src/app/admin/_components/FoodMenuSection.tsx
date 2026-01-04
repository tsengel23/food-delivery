import { title } from "process";
import { AddNewDish } from "./AddNewDish";
import { FoodMenuCard } from "./FoodMenuCard";

const appetizers = [
  {
    image: "food2.png",
    title: "Brie Crostini Appetizer",
    price: 12,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "food2.png",
    title: "Brie Crostini Appetizer",
    price: 12,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "food2.png",
    title: "Brie Crostini Appetizer",
    price: 12,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "food2.png",
    title: "Brie Crostini Appetizer",
    price: 12,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "food2.png",
    title: "Brie Crostini Appetizer",
    price: 12,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "food2.png",
    title: "Brie Crostini Appetizer",
    price: 12,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "food2.png",
    title: "Brie Crostini Appetizer",
    price: 12,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "food2.png",
    title: "Brie Crostini Appetizer",
    price: 12,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "food2.png",
    title: "Brie Crostini Appetizer",
    price: 12,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
];

export const FoodMenuSection = () => {
  return (
    <div className="w-full bg-white border rounded-xl p-5 flex flex-col gap-4  ">
      <h1 className="text-[#09090B] font-semibold text-xl">
        {"Appetizers"}(<span>{appetizers.length}</span>)
      </h1>
      <div className="flex flex-wrap gap-3 w-fit">
        <AddNewDish title={"Appetizers"} />
        {appetizers.map((item, index) => {
          return (
            <FoodMenuCard
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              overview={item.overview}
            />
          );
        })}
      </div>
    </div>
  );
};

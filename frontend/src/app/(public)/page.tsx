"use client";

import { FoodSection } from "./_components/FoodSection";
import { SelectedFoodCard } from "./_components/SelectedFoodCard";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-[#404040] border border-red-500">
      <div className="mb-22">
        <img src="/hero.png" />
      </div>

      {/* <SelectedFoodCard image={""} title={""} overview="" price=  /> */}
      {/* <FoodSection />
      <FoodSection />
      <FoodSection /> */}
    </div>
  );
}

{
  /* <FoodCard image={""} title={""} overview="" price="" /> */
}

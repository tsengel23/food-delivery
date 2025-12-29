"use client";

import { FoodSection } from "./_components/FoodSection";
import { OpenAuthDialog } from "./_components/navigation/OpenAuthDialog";
import { SelectedFoodCard } from "./_components/SelectedFoodCard";
import Snowfall from "react-snowfall";
export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-[#404040] border border-red-500">
      <div className="mb-22 mt-17">
        <img src="/hero.png" />
      </div>
      {/* <Snowfall color="white" style={{ background: "" }} snowflakeCount={400} /> */}
      {/* <SelectedFoodCard image={""} title={""} overview="" price=  /> */}
      <OpenAuthDialog />
      <FoodSection />
      <FoodSection />
      <FoodSection />
    </div>
  );
}

{
  /* <FoodCard image={""} title={""} overview="" price="" /> */
}

"use client";

import { useEffect, useState } from "react";
import { FoodSection } from "./_components/FoodSection";
import { OpenAuthDialog } from "./_components/navigation/OpenAuthDialog";
import { SelectedFoodCard } from "./_components/SelectedFoodCard";
import Snowfall from "react-snowfall";
import { api } from "@/lib/axios";

export default function Home() {
  console.log("test");

  const [categories, setCategories] = useState<category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await api.get<category[]>(`/categories`);
      console.log({ data });

      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-[#404040] border border-red-500">
      <div className="mb-22 mt-17">
        <img src="/hero.png" />
      </div>
      {/* <Snowfall color="white" style={{ background: "" }} snowflakeCount={40} /> */}

      {/* <OpenAuthDialog /> */}
      <div className="">
        {categories?.map((el) => {
          return (
            <FoodSection
              key={el._id}
              categoryId={el._id}
              categoryName={el.name}
            />
          );
        })}
      </div>
    </div>
  );
}

{
  /* <FoodCard image={""} title={""} overview="" price="" /> */
}

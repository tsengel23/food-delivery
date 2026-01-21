"use client";
import { CategoryPill } from "./CategoryPill";
import { AddNewCategoryButton } from "./AddNewCategoryButton";
import { useEffect, useState } from "react";
// import { api } from "../../../lib/axios";
import { api } from "@/lib/axios";
import { CategoryPillAll } from "./CategoryPillAll";

type CategoryBarProps = {
  selectedCategoryId: string;
  onSelectCategory: (id: string, name: string) => void;
};

// export const CategoryBar = ({ categoryId }: CategoryBarProps) => {
export const CategoryBar = ({
  selectedCategoryId,
  onSelectCategory,
}: CategoryBarProps) => {
  const [categories, setCategories] = useState<category[]>([]);

  const fetchCategories = async () => {
    const { data } = await api.get<category[]>(`/categories`);
    console.log(data);

    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDeleteCategory = async (id: string) => {
    // ✅ UI дээр шууд алга болгоно (optimistic)
    setCategories((prev) => prev.filter((c) => c._id !== id));
    // ✅ Хэрвээ сонгосон нь устсан бол "All dishes" руу буцаана
    if (selectedCategoryId === id) {
      onSelectCategory("", "All dishes");
    }
    try {
      await api.delete(`/categories/${id}`);
    } catch (err) {
      console.log(err);
      // API уналаа => дахин fetch хийж сэргээх нь хамгийн амар
      fetchCategories();
    }
  };

  return (
    <div className="w-full bg-white border rounded-xl p-6 flex flex-col gap-4  ">
      <h1 className="text-[#09090B] font-semibold text-xl">Dishes category</h1>
      <div className="flex flex-wrap gap-3 w-fit">
        <CategoryPillAll
          name={"All dishes"}
          isActive={selectedCategoryId === ""}
          onClick={() => onSelectCategory("", "All dishes")}
        />
        {categories?.map((item) => {
          return (
            <CategoryPill
              key={item._id}
              category={item}
              isActive={selectedCategoryId === item._id}
              onSelect={() => onSelectCategory(item._id, item.name)}
              onDelete={() => handleDeleteCategory(item._id)}
            />
          );
        })}
        <AddNewCategoryButton setCategories={setCategories} />
      </div>
    </div>
  );
};

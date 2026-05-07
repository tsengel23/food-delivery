
"use client";
import { CategoryPill } from "./CategoryPill";
import { AddNewCategoryButton } from "./AddNewCategoryButton";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { CategoryPillAll } from "./CategoryPillAll";
import axios from "axios";

type CategoryBarProps = {
  selectedCategoryId: string;
  onSelectCategory: (id: string, name: string) => void;
  refreshKey: number;
  onCategoryChanged?: () => void;
};

export const CategoryBar = ({
  selectedCategoryId,
  onSelectCategory,
  refreshKey,
  onCategoryChanged,
}: CategoryBarProps) => {
  const [categories, setCategories] = useState<category[]>([]);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await api.get<category[]>("/categories");
    setCategories(data);
  };

  // const handleDeleteCategory = async (id: string) => {
  //   // ✅ UI дээр шууд алга болгоно (optimistic)
  //   setCategories((prev) => prev.filter((c) => c._id !== id));

  //   // ✅ Хэрвээ сонгосон нь устсан бол "All dishes" руу буцаана
  //   if (selectedCategoryId === id) {
  //     onSelectCategory("", "All dishes");
  //   }

  //   try {
  //     await api.delete(`/categories/${id}`);
  //   } catch (err) {
  //     console.log(err);
  //     // API уналаа => дахин fetch хийж сэргээх нь хамгийн амар
  //     fetchCategories();
  //   }
  // };
  const handleDeleteCategory = async (id: string) => {
    // 1) UI дээр түр алга болгох (optimistic)
    const prevCategories = categories;
    setCategories((prev) => prev.filter((c) => c._id !== id));

    if (selectedCategoryId === id) {
      onSelectCategory("", "All dishes");
    }

    try {
      await api.delete(`/categories/${id}`);

      // ✅ амжилттай устгасан үед badge refresh trigger (доорх 3-р хэсэгт prop нэмнэ)
      onCategoryChanged?.();
    } catch (err: unknown) {
      // 2) rollback: буцааж сэргээнэ
      setCategories(prevCategories);
      if (axios.isAxiosError(err)) {
        // 3) 409 үед ойлгомжтой message гаргана
        const status = err?.response?.status;
        const count = err?.response?.data?.count;

        if (status === 409) {
          alert(
            `Энэ category дотор ${count ?? ""} хоол байна. Эхлээд хоолоо устгах эсвэл өөр category руу шилжүүлээрэй 🙂`,
          );
          return;
        }
      }
      alert("Category устгах үед алдаа гарлаа 😅");
    }
  };

  return (
    <div className="w-full bg-white border rounded-xl p-6 flex flex-col gap-4">
      <h1 className="text-[#09090B] font-semibold text-xl">Dishes category</h1>

      <div className="flex flex-wrap gap-3 w-fit">
        <CategoryPillAll
          name={"All dishes"}
          isActive={selectedCategoryId === ""}
          onClick={() => onSelectCategory("", "All dishes")}
        />

        {categories.map((item) => (
          <CategoryPill
            key={item._id}
            category={item}
            isActive={selectedCategoryId === item._id}
            onSelect={() => onSelectCategory(item._id, item.name)}
            onDelete={() => handleDeleteCategory(item._id)}
            refreshKey={refreshKey}
          />
        ))}

        <AddNewCategoryButton setCategories={setCategories} />
      </div>
    </div>
  );
};

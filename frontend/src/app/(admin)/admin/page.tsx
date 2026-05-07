"use client";

import { useState, useEffect } from "react";
import { CategoryBar } from "../_components/CategoryBar";
import { FoodMenuSection } from "../_components/FoodMenuSection";
import { api } from "@/lib/axios";

export default function AdminPage() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [categoryId, setCategoryId] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("All dishes");
  const [categories, setCategories] = useState<category[]>([]);

  useEffect(() => {
    if (categoryId === "") {
      api.get<category[]>("/categories").then(({ data }) => setCategories(data));
    }
  }, [categoryId, refreshKey]);

  const handleRefresh = () => setRefreshKey((k) => k + 1);

  return (
    <div className="w-full flex flex-col gap-6 mt-6">
      <CategoryBar
        selectedCategoryId={categoryId}
        refreshKey={refreshKey}
        onCategoryChanged={handleRefresh}
        onSelectCategory={(id, name) => {
          setCategoryId(id);
          setCategoryName(name);
        }}
      />

      {categoryId === "" ? (
        <div className="flex flex-col gap-6">
          {categories.map((cat) => (
            <FoodMenuSection
              key={cat._id}
              categoryId={cat._id}
              title={cat.name}
              onFoodCreated={handleRefresh}
              onFoodDeleted={handleRefresh}
            />
          ))}
        </div>
      ) : (
        <FoodMenuSection
          categoryId={categoryId}
          title={categoryName}
          onFoodCreated={handleRefresh}
          onFoodDeleted={handleRefresh}
        />
      )}
    </div>
  );
}

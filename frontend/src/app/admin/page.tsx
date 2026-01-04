"use clients";

import { CategoryBar } from "./_components/CategoryBar";
import { FoodMenuSection } from "./_components/FoodMenuSection";

export default function AdminPage() {
  return (
    <div className="w-full h-screen border border-blue-500 flex flex-col gap-6 mt-6">
      <CategoryBar />
      <FoodMenuSection />
    </div>
  );
}

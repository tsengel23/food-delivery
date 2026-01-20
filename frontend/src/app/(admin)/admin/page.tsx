// "use client";

// import { CategoryBar } from "./_components/CategoryBar";
// import { FoodMenuSection } from "./_components/FoodMenuSection";

// export default function AdminPage() {
//   return (
//     <div className="w-full h-screen border border-blue-500 flex flex-col gap-6 mt-6">
//       <CategoryBar />
//       <FoodMenuSection />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { CategoryBar } from "../_components/CategoryBar";
import { FoodMenuSection } from "../_components/FoodMenuSection";

export default function AdminPage() {
  const [categoryId, setCategoryId] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("All dishes");

  return (
    <div className="w-full h-screen border border-blue-500 flex flex-col gap-6 mt-6">
      {/* <CategoryBar categoryId={categoryId} /> */}
      <CategoryBar
        selectedCategoryId={categoryId}
        onSelectCategory={(id, name) => {
          setCategoryId(id);
          setCategoryName(name);
        }}
      />
      <FoodMenuSection categoryId={categoryId} title={categoryName} />
    </div>
  );
}

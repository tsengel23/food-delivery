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
import { CategoryBar } from "../(public)/_components/CategoryBar";
// import { CategoryBar } from "./_components/CategoryBar";
import { FoodMenuSection } from "./_components/FoodMenuSection";

export default function AdminPage() {
  const [categoryId, setCategoryId] = useState<string>("");
  return (
    <div className="w-full h-screen border border-blue-500 flex flex-col gap-6 mt-6">
      <CategoryBar categoryId={categoryId} />
      <FoodMenuSection />
    </div>
  );
}

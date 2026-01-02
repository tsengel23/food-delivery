import { AddCategoryButton } from "./_components/AddCategoryButton";
import { AddNewCategoryButton } from "./_components/AddNewCategoryButton";
import { AddNewDish } from "./_components/AddNewDish";
import { DishesInfo } from "./_components/DishesInfo";
import { AdminFoodMenu } from "./_components/AdminFoodMenu";
import { CategoryPill } from "./_components/CategoryPill";
import { ImageUpload } from "./_components/ImageUpload";
import { CategoryBar } from "./_components/CategoryBar";

export default function AdminPage() {
  return (
    <div className="w-350 h-300 border-3 border-red-500 p-6  bg-gray-50 ">
      <CategoryBar />

      {/* <AddNewCategoryButton /> */}
      {/* <DishesInfo /> */}

      {/* <AddNewDish title={"salads"} /> */}
      {/* <CategoryPill name={"buuuz"} count={12} active={true} /> */}
    </div>
  );
}

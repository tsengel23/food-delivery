import { AddCategoryButton } from "./_components/AddCategoryButton";
import { AddNewDishTo } from "./_components/AddNewDishTo";
import { AdminFoodMenu } from "./_components/AdminFoodMenu";
import { CategoryPill } from "./_components/CategoryPill";
import { ImageUpload } from "./_components/ImageUpload";

export default function AdminPage() {
  return (
    <div className="w-200 h-200 border-3 border-red-500 p-6 ml-[205px] bg-gray-50 ">
      {/* <CategoryBar categories={} /> */}
      <AddCategoryButton />
      <AddNewDishTo />
      <ImageUpload />
    </div>
  );
}

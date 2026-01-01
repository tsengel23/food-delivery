import { AddCategoryButton } from "./_components/AddCategoryButton";
import { AddNewCategoryButton } from "./_components/AddNewCategoryButton";
import { AddNewDish } from "./_components/AddNewDish";
import { DishesInfo } from "./_components/DishesInfo";
import { AdminFoodMenu } from "./_components/AdminFoodMenu";
import { CategoryPill } from "./_components/CategoryPill";
import { ImageUpload } from "./_components/ImageUpload";

export default function AdminPage() {
  return (
    <div className="w-300 h-300 border-3 border-red-500 p-6 ml-[205px] bg-gray-50 ">
      {/* <CategoryBar categories={} /> */}
      <AddCategoryButton />
      {/* <AddNewCategoryButton /> */}
      {/* <DishesInfo /> */}
      <ImageUpload />
      {/* <AddNewDish title={"salads"} /> */}
    </div>
  );
}

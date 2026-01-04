import { AddNewCategoryButton } from "../_components/AddNewCategoryButton";
import { AddNewDish } from "../_components/AddNewDish";
import { AdminFoodMenu } from "../_components/AdminFoodMenu";
import { CategoryPill } from "../_components/CategoryPill";
import { DishesInfo } from "../_components/DishesInfo";
import { FoodMenuCard } from "../_components/FoodMenuCard";

export default function HomeAdminMenu() {
  return (
    <div className="w-fit h-fit border-3 border-red-500 flex gap-5 p-6 bg-gray-50 ">
      {/* <AddNewCategoryButton /> */}
      {/* <DishesInfo /> */}

      <AddNewDish title={"salads"} />
      <FoodMenuCard
        image={"/food2.png"}
        title={"Brie Crostini Appetizer"}
        price={12}
        overview={
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar."
        }
      />
      {/* <CategoryPill name={"buuuz"} count={12} active={true} /> */}
    </div>
  );
}

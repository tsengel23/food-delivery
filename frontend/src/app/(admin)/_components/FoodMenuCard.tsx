import { DishesInfo } from "./DishesInfo";

type FoodMenuCardProps = {
  food: food;
  onUpdated: (updated: food) => void;
  onDeleted: (id: string) => void;
};

export const FoodMenuCard = ({ food, onUpdated, onDeleted }: FoodMenuCardProps) => {
  return (
    <div className="border border-gray-300 rounded-xl flex flex-col aspect-[271/241] h-[241px] p-4 gap-5">
      <div className="aspect-[239/129] h-[129px] relative overflow-hidden border border-gray-300 rounded-xl">
        <img
          src={food.image}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2">
          <DishesInfo food={food} onUpdated={onUpdated} onDeleted={onDeleted} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex w-full justify-between">
          <h1 className="text-[#EF4444] font-medium text-sm">{food.name}</h1>
          <p className="text-[#09090B] font-semibold text-xs">
            ${food.price.toFixed(2)}
          </p>
        </div>
        <p className="text-[#09090B] font-normal text-xs line-clamp-2">
          {food.ingredients}
        </p>
      </div>
    </div>
  );
};

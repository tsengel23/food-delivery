import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type FoodCard = {
  image?: string;
  title: string;
  overview: string;
  price: string;
};

export const FoodCard = ({ image, title, overview, price }: FoodCard) => {
  return (
    <div className="flex flex-col gap-5 p-4 rounded-2xl border border-red-500">
      <div className="border border-green-500 rounded-xl relative aspect-[365/210] w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
          src={image}
        />
        <Button className="w-11 h-11 bg-white rounded-full absolute right-5 bottom-5">
          <Plus className="text-[#EF4444]" />
        </Button>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-[#EF4444] text-2xl font-semibold">{title}</h1>
          <p className="text-[#09090B] text-lg font-semibold">
            $<span>{price}</span>
          </p>
        </div>
        <p className="text-[#09090B] text-sm font-normal mt-2">{overview}</p>
      </div>
    </div>
  );
};

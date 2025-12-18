import { Minus, Plus } from "lucide-react";

type SelectedFoodCard = {
  image: string;
  title: string;
  overview: string;
  price: number;
};

export const SelectedFoodCard = ({
  image,
  title,
  overview,
  price,
}: SelectedFoodCard) => {
  return (
    <div className="flex gap-[10]">
      <div>
        <img src={image} />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <h1>{title}</h1>
          <p>{overview}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <Minus />
            <span>1</span>
            <Plus />
          </div>
          <p className="text-[#09090B] text-2xl font-semibold">
            $<span>{price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

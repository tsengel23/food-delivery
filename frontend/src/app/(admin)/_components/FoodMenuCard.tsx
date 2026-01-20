import { DishesInfo } from "./DishesInfo";

type FoodMenuCardProps = {
  name: string;
  price: number;
  ingredients: string;
  image?: string;
};

export const FoodMenuCard = ({
  name,
  price,
  ingredients,
  image,
}: FoodMenuCardProps) => {
  return (
    <div className="border border-gray-300 rounded-xl flex flex-col aspect-[271/241] h-[241px] p-4 gap-5">
      <div className="aspect-[239/129] h-[129px] relative overflow-hidden border border-gray-300 rounded-xl  ">
        {/* <img
          className=" absolute w-full h-full inset-0 top-0 left-0 object-cover "
          src={image || "/food2.png"}
          alt="Food image"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.endsWith("/food2.png")) return;
            target.src = "/food2.png";
          }}
        /> */}
        {/* <img
          src={image}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.includes("food2.png")) return;
            target.src = "/food2.png";
          }}
        /> */}
        <img
          src={image}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2">
          <DishesInfo />
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="flex w-full justify-between">
          <h1 className="text-[#EF4444] font-medium text-sm">{name}</h1>
          <p className="text-[#09090B] font-semibold text-xs">
            ${price.toFixed(2)}
          </p>
        </div>
        <p className="text-[#09090B] font-normal text-xs line-clamp-2">
          {ingredients}
        </p>
      </div>
    </div>
  );
};

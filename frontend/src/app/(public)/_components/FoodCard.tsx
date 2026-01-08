"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Check, Minus, Plus, X } from "lucide-react";
import { useState } from "react";

export interface FoodItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}
interface FoodCardProps {
  item: food;
  // onClick: (item: FoodItem) => void;
  onClose: () => void;
  onAddToCart: (item: FoodItem, quantity: number) => void;
}

export const FoodCard = ({ item, onClose, onAddToCart }: FoodCardProps) => {
  const [selected, setSelected] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // const handleAddToCart = () => {
  //   if (item) {
  //     onAddToCart(item, quantity);
  //     setQuantity(1);
  //   }
  // };

  return (
    <div className="relative">
      <Dialog>
        <div className="flex flex-col gap-5 p-4 rounded-2xl bg-white border border-red-500">
          <div className="border border-green-500 rounded-xl relative aspect-[365/210] w-full overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
              src={item.image}
              alt={item.name}
            />
          </div>
          <div>
            <div className="flex justify-between">
              <h1 className="text-[#EF4444] text-2xl font-semibold">
                {item.name}
              </h1>
              <p className="text-[#09090B] text-lg font-semibold">
                <span>{item.price}</span>
              </p>
            </div>
            <p className="text-[#09090B] text-sm font-normal mt-2">
              {item.ingredients}
            </p>
          </div>
        </div>

        <DialogContent className="[&>button]:hidden min-w-[826px] ">
          <DialogTitle></DialogTitle>
          {item && (
            <div className="flex gap-6">
              <div className="border border-green-500 rounded-xl relative aspect-[377/364] w-full overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col justify-between border border-green-600">
                <div className="border border-blue-500 flex flex-col gap-3 mt-9">
                  <h1 className="text-3xl text-[#EF4444] font-semibold">
                    {item.name}
                  </h1>
                  <p className="text-base">{item.ingredients}</p>
                </div>
                <div className="border border-blue-500 flex flex-col gap-6 ">
                  <div className="flex justify-between border">
                    <div className="flex flex-col justify-between">
                      <p className="text-[#09090B] text-2xl font-normal">
                        Total price
                      </p>
                      <p className="text-[#09090B] text-2xl font-semibold">
                        {/* <span>{getTotalPrice()}</span> */}
                      </p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Button
                        onClick={() =>
                          setQuantity((quantity) => Math.max(1, quantity - 1))
                        }
                        type="button"
                        variant={"outline"}
                        className="w-11 h-11 rounded-full border border-gray-400 flex justify-center items-center p-1"
                      >
                        <Minus className="w-4 h-4 " />
                      </Button>
                      <span className="text-[#09090B] text-lg font-semibold">
                        {quantity}
                      </span>
                      <Button
                        onClick={() => setQuantity((quantity) => quantity + 1)}
                        type="button"
                        variant={"outline"}
                        className="w-11 h-11 rounded-full border border-gray-400 flex justify-center items-center p-1"
                      >
                        <Plus className="w-4 h-4 " />
                      </Button>
                    </div>
                  </div>
                  <Button
                    // onClick={handleAddToCart}
                    className="rounded-full py-2"
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
              <DialogClose className="absolute top-10 right-5">
                <div className="w-9 h-9 border rounded-full flex justify-center items-center hover:bg-gray-200">
                  <X className="w-4 h-4 " />
                </div>
              </DialogClose>
            </div>
          )}
        </DialogContent>
        <DialogTrigger asChild>
          <Button
            onClick={() => setSelected(!selected)}
            type="button"
            className={`w-11 h-11  rounded-full absolute right-7 bottom-31 
            ${selected ? "bg-black" : "bg-white"}`}
          >
            {selected ? (
              <Check className="text-white" />
            ) : (
              <Plus className="text-[#EF4444]" />
            )}
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  );
};

// "use client";

// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import { Button } from "@/components/ui/button";
// import { Check, Minus, Plus, X } from "lucide-react";
// import { useState } from "react";

// type FoodCard = {
//   image?: string;
//   title: string;
//   overview: string;
//   price: string;
// };

// export const FoodCard = ({ image, title, overview, price }: FoodCard) => {
//   const [count, setCount] = useState(1);
//   const [selected, setSelected] = useState(false);
//   const unitPrice = Number(price);
//   const totalPrice = unitPrice * count;
//   const formattedTotalPrice = totalPrice.toFixed(2);

//   return (
//     <div className="relative">
//       <Dialog>
//         <div className="flex flex-col gap-5 p-4 rounded-2xl bg-white border border-red-500">
//           <div className="border border-green-500 rounded-xl relative aspect-[365/210] w-full overflow-hidden">
//             <img
//               className="absolute inset-0 w-full h-full object-cover rounded-xl"
//               src={image}
//             />
//           </div>
//           <div>
//             <div className="flex justify-between">
//               <h1 className="text-[#EF4444] text-2xl font-semibold">{title}</h1>
//               <p className="text-[#09090B] text-lg font-semibold">
//                 $<span>{formattedTotalPrice}</span>
//               </p>
//             </div>
//             <p className="text-[#09090B] text-sm font-normal mt-2">
//               {overview}
//             </p>
//           </div>
//         </div>

//         <DialogContent className="[&>button]:hidden min-w-[826px] ">
//           <DialogTitle></DialogTitle>
//           <div className="flex gap-6">
//             <div className="border border-green-500 rounded-xl relative aspect-[377/364] w-full overflow-hidden">
//               <img
//                 className="absolute inset-0 w-full h-full object-cover rounded-xl"
//                 src={image}
//               />
//             </div>
//             <div className="flex flex-col justify-between border border-green-600">
//               <div className="border border-blue-500 flex flex-col gap-3 mt-9">
//                 <h1 className="text-3xl text-[#EF4444] font-semibold">
//                   {title}
//                 </h1>
//                 <p className="text-base">{overview}</p>
//               </div>
//               <div className="border border-blue-500 flex flex-col gap-6 ">
//                 <div className="flex justify-between border">
//                   <div className="flex flex-col justify-between">
//                     <p className="text-[#09090B] text-2xl font-normal">
//                       Total price
//                     </p>
//                     <p className="text-[#09090B] text-2xl font-semibold">
//                       $<span>{formattedTotalPrice}</span>
//                     </p>
//                   </div>
//                   <div className="flex gap-3 items-center">
//                     <Button
//                       disabled={count === 1}
//                       onClick={() => setCount((prev) => Math.max(1, prev - 1))}
//                       // onClick={() => {
//                       //   if (count > 1) {
//                       //     setCount(count - 1);
//                       //   }
//                       // }}
//                       type="button"
//                       variant={"outline"}
//                       className="w-11 h-11 rounded-full border border-gray-400 flex justify-center items-center p-1"
//                     >
//                       <Minus className="w-4 h-4 " />
//                     </Button>
//                     <span className="text-[#09090B] text-lg font-semibold">
//                       {count}
//                     </span>
//                     <Button
//                       onClick={() => setCount((prev) => prev + 1)}
//                       // onClick={() => setCount(count + 1)}
//                       type="button"
//                       variant={"outline"}
//                       className="w-11 h-11 rounded-full border border-gray-400 flex justify-center items-center p-1"
//                     >
//                       <Plus className="w-4 h-4 " />
//                     </Button>
//                   </div>
//                 </div>
//                 <Button className="rounded-full py-2">Add to cart</Button>
//               </div>
//             </div>
//             <DialogClose className="absolute top-10 right-5">
//               <div className="w-9 h-9 border rounded-full flex justify-center items-center hover:bg-gray-200">
//                 <X className="w-4 h-4 " />
//               </div>
//             </DialogClose>
//           </div>
//         </DialogContent>
//         <DialogTrigger asChild>
//           <Button
//             onClick={() => setSelected(!selected)}
//             type="button"
//             className={`w-11 h-11  rounded-full absolute right-6 bottom-26
//             ${selected ? "bg-black" : "bg-white"}`}
//           >
//             {selected ? (
//               <Check className="text-white" />
//             ) : (
//               <Plus className="text-[#EF4444]" />
//             )}
//           </Button>
//         </DialogTrigger>
//       </Dialog>
//     </div>
//   );
// };

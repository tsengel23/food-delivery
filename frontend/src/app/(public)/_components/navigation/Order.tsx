"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Map,
  MapPinHouse,
  ShoppingBag,
  ShoppingCart,
  Soup,
  Timer,
  X,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { MyCartFood } from "../MyCartFood";
import { useState } from "react";
import { CartAndOrder } from "./CartAndOrder";
import { Badge } from "@/components/ui/badge";

const foods = [
  {
    image: "food2.png",
    title: "Mongol food",
    overview:
      "  Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    price: 12.99,
  },
  {
    image: "food2.png",
    title: "Mongol food",
    overview:
      "  Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    price: 12.99,
  },
  {
    image: "food2.png",
    title: "Mongol food",
    overview:
      "  Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    price: 12.99,
  },
  {
    image: "food2.png",
    title: "Mongol food",
    overview:
      "  Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    price: 12.99,
  },
];

export const Order = () => {
  const [total, setTotal] = useState();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          className="w-9 h-9 flex justify-center items-center bg-white rounded-full hover:bg-[#FF692A] hover:text-black transition ease-in"
        >
          <ShoppingCart className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="border-3 border-red-600 min-w-130 h-[100dvh] flex flex-col rounded-tl-3xl rounded-bl-3xl bg-[#404040] [&>button]:hidden">
        <SheetHeader className="border-2 border-blue-600 relative">
          <SheetTitle className="flex gap-3 ">
            <ShoppingCart className="w-6 h-6 text-[#E4E4E7]" />
            <p className="text-[#E4E4E7] font-semibold text-xl">Order detail</p>
          </SheetTitle>

          <SheetClose className="absolute top-2 right-2">
            <div className="w-9 h-9  rounded-full border border-[#F4F4F5] flex justify-center items-center hover:bg-gray-500">
              <X className="w-4 h-4 text-[#F4F4F5]" />
            </div>
          </SheetClose>
        </SheetHeader>
        <Tabs defaultValue="cart" className="px-4 flex flex-col flex-1">
          <TabsList className="w-full rounded-full ">
            <TabsTrigger
              value="cart"
              className="rounded-full p-1 data-[state=active]:bg-[#EF4444]"
            >
              Cart
            </TabsTrigger>
            <TabsTrigger
              value="order"
              className="rounded-full p-1 data-[state=active]:bg-[#EF4444]"
            >
              Order
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="cart"
            className="flex flex-col border-2 border-blue-600 mt-4 max-h-fit"
          >
            <div className="flex flex-col bg-white rounded-xl p-4 mb-6">
              <h1 className="text-[#71717A] text-xl font-semibold">My cart</h1>
              <div className="w-fit h-[289px] grid grid-cols-1 border border-green-600 overflow-y-auto">
                {foods.map((item, index) => {
                  return (
                    <MyCartFood
                      key={index}
                      image={item.image}
                      title={item.title}
                      overview={item.overview}
                      price={item.price}
                    />
                  );
                })}
                {/* <CartAndOrder
                  title={"Your cart is empthy"}
                  text={`Hungry? 🍔 Add some delicious dishes to your cart and satisfy your cravings!`}
                /> */}
              </div>

              <div className="mt-12 flex flex-col gap-2">
                <h1 className="text-[#71717A] text-xl  font-semibold">
                  Delivery location
                </h1>
                <Textarea
                  placeholder="Please share your complete address"
                  className="h-20 resize-none text-[#71717A] text-sm  font-normal"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-xl p-4 bg-white rounded-xl gap-2 mb-8">
              <h1 className="text-[#71717A] text-xl  font-semibold">
                Payment info
              </h1>
              <div className="flex flex-col">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Items</span>
                  <span className="font-medium">$0.99</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium">$0.99</span>
                </div>
              </div>
              <div className="border-t border-dashed border-gray-300 my-3" />
              <div className="flex justify-between text-base font-semibold">
                <span>Total</span>
                <span>$26.97</span>
              </div>
              <Button
                variant={"outline"}
                type="submit"
                className="!bg-[#EF4444] rounded-full text-white"
              >
                Checkout
              </Button>
            </div>
          </TabsContent>
          <TabsContent
            value="order"
            className="flex flex-col border-2 border-blue-600 mt-4 min-h-fit"
          >
            <div className="flex flex-col bg-white rounded-xl p-4 min-h-full">
              <h1 className="text-[#09090B] text-xl font-semibold">
                Order history
              </h1>
              <div className="w-[439px] flex flex-col border border-green-600 mt-5 gap-3">
                <div className="flex justify-between">
                  <p className="text-[#09090B] text-base font-bold ">
                    $<span>25.97</span> <span>(#09090)</span>
                  </p>
                  <Badge
                    variant={"outline"}
                    className=" border-black px-3 py-1 text-[#09090B] text-xs font-semibold"
                  >
                    Pending
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Soup className="w-4 h-4 text-gray-400" />
                    <span className="text-[#71717A] text-xs font-normal">
                      Sunshine Stackers
                    </span>
                    {/* <span>{food.title}</span> */}
                  </div>
                  <span>x 1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Soup className="w-4 h-4 text-gray-400" />
                    <span className="text-[#71717A] text-xs font-normal">
                      Sunshine Stackers
                    </span>
                    {/* <span>{food.title}</span> */}
                  </div>
                  <span>x 1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-gray-400" />
                    <span className="text-[#71717A] text-xs font-normal">
                      2024/12/20
                    </span>
                    {/* <span>{time}</span> */}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Map className="w-4 h-4 text-gray-400 shrink-0" />
                    <p className="line-clamp-1 text-[#71717A] text-xs font-normal">
                      2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen
                      emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД,
                      12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100
                      айлын гүүрэн гарцны хойд талд 4д ногоон20
                    </p>
                    {/* <span>{address}</span> */}
                  </div>
                </div>

                {/* <CartAndOrder
                  title={`No Orders Yet?`}
                  text={`🍕 "You haven't placed any orders yet. Start exploring our menu and satisfy your cravings!"`}
                /> */}
              </div>
              <div className="border-t border-dashed border-gray-300 my-5" />
              <div className="w-[439px] flex flex-col border border-green-600 gap-3">
                <div className="flex justify-between">
                  <p className="text-[#09090B] text-base font-bold ">
                    $<span>25.97</span> <span>(#09090)</span>
                  </p>
                  <Badge
                    variant={"outline"}
                    className=" border-black px-3 py-1 text-[#09090B] text-xs font-semibold"
                  >
                    Delivered
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Soup className="w-4 h-4 text-gray-400" />
                    <span className="text-[#71717A] text-xs font-normal">
                      Sunshine Stackers
                    </span>
                    {/* <span>{food.title}</span> */}
                  </div>
                  <span>x 1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-gray-400" />
                    <span className="text-[#71717A] text-xs font-normal">
                      2024/12/20
                    </span>
                    {/* <span>{time}</span> */}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Map className="w-4 h-4 text-gray-400 shrink-0" />
                  <p className="line-clamp-1 text-[#71717A] text-xs font-normal">
                    2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen
                    emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД,
                    12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100
                    айлын гүүрэн гарцны хойд талд 4д ногоон20
                  </p>
                  {/* <span>{address}</span> */}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};

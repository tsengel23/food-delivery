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
import { ShoppingCart, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Order = () => {
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
      <SheetContent className="w-100 sm:w-135 border-3 border-red-600 rounded-tl-3xl rounded-bl-3xl bg-[#404040] [&>button]:hidden">
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
        <Tabs>
          <TabsList className="w-full rounded-full  ">
            <TabsTrigger value="cart" className="rounded-full">
              Cart
            </TabsTrigger>
            <TabsTrigger value="order" className="rounded-full">
              Order
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cart">
            <div></div>
          </TabsContent>
          <TabsContent value="order"></TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};

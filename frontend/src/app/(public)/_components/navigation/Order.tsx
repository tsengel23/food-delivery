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
      <SheetContent className="w-[400px] sm:w-[540px] border-3 border-red-600 rounded-tl-3xl rounded-bl-3xl bg-[#404040] [&>button]:hidden">
        <SheetHeader className="border-2 border-blue-600 relative">
          <SheetTitle className="flex gap-3 ">
            <ShoppingCart className="w-6 h-6 text-[#E4E4E7]" />
            <p className="text-[#E4E4E7] font-semibold text-xl">Order detail</p>
          </SheetTitle>
          <div>transition button</div>
          <SheetClose className="absolute top-2 right-2">
            <div className="w-9 h-9  rounded-full border border-[#F4F4F5] flex justify-center items-center hover:bg-gray-500">
              <X className="w-4 h-4 text-[#F4F4F5]" />
            </div>
          </SheetClose>
        </SheetHeader>
        <div className="px-4">
          <span>
            <p>My cart</p>
          </span>
          <div className="flex flex-col gap-10">
            "OrderCard" example will be here
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

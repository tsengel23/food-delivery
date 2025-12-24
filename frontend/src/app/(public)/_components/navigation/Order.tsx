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
import { Textarea } from "@/components/ui/textarea";

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
        <Tabs className="px-5">
          <TabsList className="w-full rounded-full ">
            <TabsTrigger value="cart" className="rounded-full p-1">
              Cart
            </TabsTrigger>
            <TabsTrigger value="order" className="rounded-full p-1">
              Order
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cart" className="flex flex-col gap-6">
            <div className="flex flex-col gap-14 bg-white rounded-xl">
              <div>hello</div>
              <div>
                <h1>Delivery location</h1>
                <Textarea />
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-xl gap-5">
              <h1>Payment info</h1>
              <div className="flex flex-col">
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">Shipping</span>
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
            </div>
          </TabsContent>
          <TabsContent value="order">
            <div> </div>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};

import { Button } from "@/components/ui/button";
import { Image, Plus, X } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const AddNewDishTo = () => {
  return (
    <Dialog>
      <div className="flex flex-col gap-6 items-center">
        <DialogTrigger asChild>
          <Button
            type="button"
            variant={"destructive"}
            className="w-9 h-9 bg-[#EF4444] flex justify-center items-center rounded-full"
          >
            <Plus className="w-4 h-4 text-white" />
          </Button>
        </DialogTrigger>
        <p className="w-[154px] text-center text-[#18181B] text-sm font-medium">
          Add new Dish to <span>Salads</span>
        </p>
      </div>

      <DialogContent className="[&>button]:hidden">
        <DialogHeader className="relative mb-12">
          <DialogTitle className="text-[#09090B] text-xl font-semibold">
            Add new Dish to <span>Salads</span>
          </DialogTitle>
          <DialogClose asChild>
            <button className="flex justify-center items-center w-8 h-8 rounded-full border hover:bg-gray-300 absolute top-0 right-0">
              <X className="w-3 h-3 text-black" />
            </button>
          </DialogClose>
        </DialogHeader>
        <div className="flex flex-col gap-6 border border-red-500">
          <div className="flex gap-6">
            <div className="flex flex-col w-full ">
              <Label className="mb-2 text-[#09090B] text-sm font-medium">
                Food name
              </Label>
              <Input placeholder="Type food name" type="text" />
            </div>
            <div className="flex flex-col w-full ">
              <Label className="mb-2 text-[#09090B] text-sm font-medium">
                Food price
              </Label>
              <Input placeholder="Enter price..." type="text" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <Label className="mb-2 text-[#09090B] text-sm font-medium">
              Ingredients
            </Label>
            <Textarea
              placeholder="List ingredients..."
              className="h-5 resize-none overflow-x-hidden break-all"
            />
          </div>
          <div className="flex flex-col gap-3 border-2 border-red-500">
            <Label className="text-[#09090B] text-sm font-medium">
              Food image
            </Label>
            <div className="relative bg-[#2563EB0D] h-[138px] w-full rounded-lg border border-[#2563EB33] border-dashed flex items-center justify-center ">
              <Input
                id="picture"
                type="file"
                className=" opacity-0 absolute inset-0 cursor-pointer"
              />

              <div className=" flex flex-col items-center gap-2 pointer-events-none">
                <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center">
                  <Image className="w-4 h-4 " />
                </div>
                <p className="text-[#18181B] text-sm font-medium">
                  Choose a file or drag & drop it here
                </p>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" variant={"default"} className="mt-8">
            Add Dish
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

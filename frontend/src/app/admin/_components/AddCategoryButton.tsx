"use client";

import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
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

export const AddCategoryButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant={"destructive"}
          className="w-9 h-9 bg-[#EF4444] flex justify-center items-center rounded-full"
        >
          <Plus className="w-4 h-4 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-xl bg-white flex gap-6 flex-col [&>button]:hidden">
        <DialogHeader className="relative">
          <DialogTitle className="text-[#09090B] font-semibold text-xl">
            Add new category
          </DialogTitle>
          <DialogClose asChild>
            <button className="flex justify-center items-center w-8 h-8 rounded-full border hover:bg-gray-300 absolute top-0 right-0">
              <X className="w-3 h-3 text-black" />
            </button>
          </DialogClose>
        </DialogHeader>
        <div className="flex flex-col w-full ">
          <Label className="mb-2">Category name</Label>
          <Input placeholder="Type category name..." type="text" />
        </div>
        <DialogFooter className="flex justify-end">
          <Button
            type="submit"
            variant={"default"}
            className="hover:bg-red-500 mt-6"
          >
            Add category
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

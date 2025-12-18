"use client";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
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
import { ChevronRight, MapPin, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export const DeliveryAddress = () => {
  //
  const ref = useRef<HTMLTextAreaElement>(null);
  const handleInput = () => {
    if (!ref.current) return;

    ref.current.style.height = "auto";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  };
  //

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" flex justify-center items-center bg-white rounded-full hover:bg-gray-200 transition">
          <MapPin className="w-5 h-5 text-[#EF4444]" />
          <span className="text-[#EF4444] text-xs font-normal">
            Delivery address :
          </span>
          <p className="text-[#71717A] text-xs font-normal">Add Location</p>
          <ChevronRight className="text-gray-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="[&>button]:hidden">
        <DialogHeader className="flex flex-col gap-6 relative">
          <DialogTitle className="text-2xl font-semibold text-[#09090B] mt-1">
            Please write your delivery address!
          </DialogTitle>
          <Textarea
            //---> ref = textarea-г барьж авах,textarea-гийн бодит өндрийг (scrollHeight) мэдэхийн тулд
            ref={ref}
            onInput={handleInput}
            // ---> Хэрэглэгч бичих, устгах, paste хийх бүрт ажиллана,бичих болгонд барьсан textarea-гаа шалгах
            // ----->Ингэж "textarea" автоматаар өсдөг
            placeholder="Please share your complete address"
            className=" w-full resize-none min-w-0 break-all  overflow-hidden min-h-16"
          />
          <DialogClose className="absolute top-0 right-0">
            <div className="w-10 h-10  rounded-full bg-[#F4F4F5] flex justify-center items-center hover:bg-gray-300">
              <X className="w-4 h-4" />
            </div>
          </DialogClose>
        </DialogHeader>
        <div className="flex gap-4 justify-end mt-12">
          <Button type="button" variant={"outline"}>
            Cancel
          </Button>
          <Button>Deliver Here</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

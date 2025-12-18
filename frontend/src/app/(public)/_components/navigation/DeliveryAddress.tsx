"use client";
import { useRef, useState } from "react";

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
import { Input } from "@/components/ui/input";

export const DeliveryAddress = () => {
  const [address, setAddress] = useState("");
  //

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setAddress(e.target.value);
  // };

  // const handleClear = () => {
  //   setAddress("");
  // };

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
          <div className="relative">
            <Input
              value={address}
              // onChange={handleChange}
              onChange={(el) => setAddress(el.target.value)}
              type="text"
              placeholder="Please share your complete address"
              className=""
            />
            {address && (
              <Button
                type="button"
                // onClick={handleClear}
                onClick={() => setAddress("")}
                variant={"ghost"}
                className="absolute top-0 rounded-full p-0 hover:bg-transparent right-2"
              >
                <X />
              </Button>
            )}
          </div>
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

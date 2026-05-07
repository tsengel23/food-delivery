"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight, MapPin, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/app/context/Cart-Context";

export const DeliveryAddressLocation = () => {
  const { address, setAddress } = useCart();
  const [draft, setDraft] = useState(address);
  const [open, setOpen] = useState(false);

  const handleOpen = (val: boolean) => {
    if (val) setDraft(address);
    setOpen(val);
  };

  const handleSave = () => {
    setAddress(draft.trim());
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogTrigger asChild>
        <Button className="flex justify-center items-center bg-white rounded-full hover:bg-gray-200 transition max-w-[200px]">
          <MapPin className="w-5 h-5 text-[#EF4444] shrink-0" />
          <span className="text-[#EF4444] text-xs font-normal shrink-0">
            Delivery address:
          </span>
          <p className="text-[#71717A] text-xs font-normal truncate">
            {address || "Add Location"}
          </p>
          <ChevronRight className="text-gray-500 shrink-0" />
        </Button>
      </DialogTrigger>
      <DialogContent className="[&>button]:hidden w-full flex flex-col">
        <DialogHeader className="mb-4 mt-1 p-1 relative">
          <DialogTitle className="text-[#09090B] font-semibold text-2xl">
            Please write your delivery address!
          </DialogTitle>
          <DialogClose className="absolute top-0 right-0">
            <div className="w-9 h-9 rounded-full bg-[#F4F4F5] flex justify-center items-center hover:bg-gray-300">
              <X className="w-4 h-4" />
            </div>
          </DialogClose>
        </DialogHeader>
        <Textarea
          placeholder="Please share your complete address"
          className="resize-none h-20 w-full break-all overflow-y-hidden"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <div className="flex gap-4 w-full justify-end mt-4">
          <DialogClose asChild>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </DialogClose>
          <Button variant="default" type="button" onClick={handleSave}>
            Deliver Here
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

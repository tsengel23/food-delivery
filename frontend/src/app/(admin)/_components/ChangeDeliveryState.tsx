"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";

type Status = "pending" | "paid" | "delivered" | "cancelled";

type Props = {
  selectedCount: number;
  onSave: (status: Status) => void;
};

export const ChangeDeliveryState = ({ selectedCount, onSave }: Props) => {
  const [active, setActive] = useState<Status | "">("");
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    if (!active) return;
    onSave(active);
    setActive("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full" variant="default">
          Change delivery state
          <span className="w-8 h-5 rounded-full flex justify-center items-center border bg-white text-black ml-1">
            {selectedCount}
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-fit [&>button]:hidden">
        <div className="relative">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="w-7 h-7 rounded-full border absolute top-0 right-0 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </DialogClose>
          <div className="flex flex-col gap-6">
            <DialogTitle className="text-[#09090B] font-medium text-lg">
              Change delivery state
            </DialogTitle>
            <div className="flex gap-4 justify-between">
              <Button
                onClick={() => setActive("delivered")}
                type="button"
                variant="outline"
                className={`rounded-full text-xs font-medium px-5 hover:bg-green-200 ${
                  active === "delivered"
                    ? "border-green-500 text-black bg-green-200"
                    : ""
                }`}
              >
                Delivered
              </Button>
              <Button
                onClick={() => setActive("paid")}
                type="button"
                variant="outline"
                className={`rounded-full text-xs font-medium px-5 hover:bg-blue-100 ${
                  active === "paid"
                    ? "border-blue-500 text-black bg-blue-100"
                    : ""
                }`}
              >
                Paid
              </Button>
              <Button
                onClick={() => setActive("pending")}
                type="button"
                variant="outline"
                className={`rounded-full text-xs font-medium px-5 hover:bg-red-200 ${
                  active === "pending"
                    ? "border-red-500 text-black bg-red-200"
                    : ""
                }`}
              >
                Pending
              </Button>
              <Button
                onClick={() => setActive("cancelled")}
                type="button"
                variant="outline"
                className={`rounded-full text-xs font-medium px-5 ${
                  active === "cancelled" ? "border-black bg-gray-100" : ""
                }`}
              >
                Cancelled
              </Button>
            </div>
            <Button
              type="button"
              variant="default"
              className="rounded-full py-2"
              disabled={!active}
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

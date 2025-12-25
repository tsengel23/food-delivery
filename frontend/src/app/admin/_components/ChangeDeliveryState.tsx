import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";

export const ChangeDeliveryState = () => {
  const [active, setActive] = useState<string>("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full" variant={"outline"}>
          Change delivery state
          <span className="w-8   h-5 rounded-full flex justify-center items-center border">
            1{/* {ids.length} */}
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-fit [&>button]:hidden">
        <div className="relative">
          <DialogClose asChild>
            <Button
              variant={"outline"}
              className="w-7 h-7 rounded-full border absolute top-0 right-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </DialogClose>
          <div className="flex flex-col gap-6">
            <DialogTitle className="text-[#09090B] font-medium text-lg">
              Change delivery state
            </DialogTitle>

            <div className="flex  gap-4 justify-between">
              <Button
                onClick={() => setActive("Delivered")}
                type="button"
                variant={"outline"}
                className={`rounded-full text-xs font-medium px-5 hover:bg-green-200 ${
                  active === "Delivered"
                    ? "border-green-500 text-black bg-green-200 "
                    : ""
                }`}
              >
                Delivered
              </Button>
              <Button
                onClick={() => {
                  setActive("Pending");
                }}
                type="button"
                variant="outline"
                className={`rounded-full text-xs font-medium px-5 hover:bg-red-200 ${
                  active === "Pending"
                    ? "border-red-500 text-black bg-red-200"
                    : ""
                }`}
              >
                Pending
              </Button>
              <Button
                onClick={() => {
                  setActive("Canceled");
                }}
                type="button"
                variant={"outline"}
                className={`rounded-full text-xs font-medium px-5  ${
                  active === "Canceled" ? "border-black bg-gray-100" : ""
                }`}
              >
                Canceled
              </Button>
            </div>
            <Button
              type="reset"
              variant={"default"}
              className="rounded-full py-2"
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

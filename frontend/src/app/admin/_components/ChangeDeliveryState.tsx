import { Button } from "@/components/ui/button";
import {
  Dialog,
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
            1
          </span>
        </Button>
      </DialogTrigger>

      {/* <DialogContent className="w-fit "> */}
      <DialogContent className="w-fit [&>button]:hidden">
        <div className="relative">
          <Button
            variant={"outline"}
            className="w-7 h-7 rounded-full border absolute top-0 right-0"
          >
            <X className="w-4 h-4" />
          </Button>
          <div className="flex flex-col gap-6">
            <DialogTitle className="text-[#09090B] font-medium text-sm">
              Change delivery state
            </DialogTitle>

            <div className="flex  gap-4 justify-between">
              <Button
                onClick={() => setActive("Delivered")}
                type="button"
                variant={"outline"}
                className="rounded-full text-xs font-medium px-5  "
              >
                Delivered
              </Button>
              <Button
                onClick={() => {
                  setActive("Pending");
                }}
                type="button"
                variant={"outline"}
                className="rounded-full text-xs font-medium px-5 "
              >
                Pending
              </Button>
              <Button
                onClick={() => {
                  setActive("Cancelled");
                }}
                type="button"
                variant={"outline"}
                className="rounded-full text-xs font-medium px-5 "
              >
                Cancelled
              </Button>
            </div>
            <Button variant={"default"} className="rounded-full py-2">
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

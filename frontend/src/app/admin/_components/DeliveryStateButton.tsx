import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type DeliveryState = "Pending" | "Delivered" | "Canceled";

type DeliveryStateButton = {
  state: DeliveryState;
};
export const DeliveryStateButton = ({ state }: DeliveryStateButton) => {
  const stateStyle = {
    Pending: "border-red-600 text-red-600",
    Delivered: "border-green-500 text-green-500",
    Canceled: "border-gray-300 text-gray-600",
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`rounded-full flex gap-3 items-center ${stateStyle[state]}`}
          variant={"outline"}
        >
          {state}
          <ChevronsUpDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex flex-col gap-1 p-1">
          <div className="flex justify-start  px-2 py-2">
            <p className="text-[#18181B] font-medium text-xs border px-2 bg-gray-100 rounded-full cursor-pointer">
              Pending
            </p>
          </div>
          <div className="flex justify-start  px-2 py-2">
            <p className="text-[#18181B] font-medium text-xs border px-2 bg-gray-100 rounded-full cursor-pointer">
              Delivered
            </p>
          </div>
          <div className="flex justify-start  px-2 py-2">
            <p className="text-[#18181B] font-medium text-xs border px-2 bg-gray-100 rounded-full cursor-pointer">
              Canceled
            </p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

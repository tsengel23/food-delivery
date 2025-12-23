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
        <div className="flex flex-col py-3 pl-3 pr-15 gap-3">
          <Button variant={"outline"} className="rounded-full p-0 ">
            Pending
          </Button>
          <Button variant={"outline"} className="rounded-full p-0 ">
            Delivered
          </Button>
          <Button variant={"outline"} className="rounded-full p-0 ">
            Canceled
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

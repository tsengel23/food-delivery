import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";

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
    <Button
      className={`rounded-full flex gap-3 items-center ${stateStyle[state]}`}
      variant={"outline"}
    >
      {state}
      <ChevronsUpDown className="w-4 h-4" />
    </Button>
  );
};

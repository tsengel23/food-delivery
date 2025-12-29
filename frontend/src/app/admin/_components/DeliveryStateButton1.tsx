"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronsUpDown } from "lucide-react";

export type DeliveryState = "Pending" | "Delivered" | "Canceled";

type DeliveryStateButton1 = {
  state: DeliveryState;
  // onChange: (state: DeliveryState) => void;
};

export const DeliveryStateButton1 = ({
  state,
}: // onChange,
DeliveryStateButton1) => {
  const stateStyle = {
    Pending: "border-red-600 text-red-600",
    Delivered: "border-green-500 text-green-500",
    Canceled: "border-gray-300 text-gray-600",
  };
  return (
    // <Select value={state} onValueChange={onChange}>
    <Select>
      <div className="relative border border-red-400">
        <SelectTrigger
          className={`w-fit pr-8 rounded-full [&>svg]:hidden ${stateStyle[state]}`}
        >
          <SelectValue />
        </SelectTrigger>
        <ChevronsUpDown className="absolute w-4 h-4 top-2.5 right-5" />
      </div>

      <SelectContent>
        <SelectItem value="Pending">Pending</SelectItem>
        <SelectItem value="Delivered">Delivered</SelectItem>
        <SelectItem value="Canceled">Canceled</SelectItem>
      </SelectContent>
    </Select>
  );
};

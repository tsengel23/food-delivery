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
};

const stateStyle = {
  Pending: "border-red-600 text-red-600",
  Delivered: "border-green-500 text-green-500",
  Canceled: "border-gray-300 text-gray-600",
};

export const DeliveryStateButton1 = ({ state }: DeliveryStateButton1) => {
  return (
    <Select value={state}>
      <SelectTrigger
        className={`w-fit rounded-full [&>svg]:hidden ${stateStyle[state]}`}
      >
        <div className="flex gap-3 items-center">
          <SelectValue />
          <ChevronsUpDown className=" w-4 h-4 " />
        </div>
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="Pending">Pending</SelectItem>
        <SelectItem value="Delivered">Delivered</SelectItem>
        <SelectItem value="Canceled">Canceled</SelectItem>
      </SelectContent>
    </Select>
  );
};

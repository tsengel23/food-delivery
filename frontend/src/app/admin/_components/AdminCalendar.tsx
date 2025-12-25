"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import * as React from "react";
import { type DateRange } from "react-day-picker";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

export const AdminCalendar = () => {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="rounded-full pl-4 " variant={"outline"}>
          <CalendarDays />
          {Date()}
          {/* 13 June 2023 - 14 July 2023 */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
          className="rounded-lg border shadow-sm"
        />
      </PopoverContent>
    </Popover>
  );
};

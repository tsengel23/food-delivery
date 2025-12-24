"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Checkbox } from "@/components/ui/checkbox";
import { CalendarDays, ChevronsUpDown } from "lucide-react";
import { DeliveryAddress } from "@/app/(public)/_components/navigation/DeliveryAddress";
import { Button } from "@/components/ui/button";
import { DeliveryStateButton } from "./DeliveryStateButton";
import { AdminPagination } from "./AdminPagination";
import { ChangeDeliveryState } from "./ChangeDeliveryState";

const orderInfo = [
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Bantan",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "СБД, 12-р хороо, СБД нэгдсэн эмнэлэг | 100 айлын гүүрэн гарцны хойд талд 4-д ногоон байр , 5-орц 5-давхар 97-тоот орцны код #1526",
    DeliveryState: <DeliveryStateButton state={"Pending"} />,
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Bantan",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "СБД, 12-р хороо, СБД нэгдсэн эмнэлэг | 100 айлын гүүрэн гарцны хойд талд 4-д ногоон байр , 5-орц 5-давхар 97-тоот орцны код #1526",
    DeliveryState: <DeliveryStateButton state={"Pending"} />,
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Bantan",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "СБД, 12-р хороо, СБД нэгдсэн эмнэлэг | 100 айлын гүүрэн гарцны хойд талд 4-д ногоон байр , 5-орц 5-давхар 97-тоот орцны код #1526",
    DeliveryState: <DeliveryStateButton state={"Delivered"} />,
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Bantan",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "СБД, 12-р хороо, СБД нэгдсэн эмнэлэг | 100 айлын гүүрэн гарцны хойд талд 4-д ногоон байр , 5-орц 5-давхар 97-тоот орцны код #1526",
    DeliveryState: <DeliveryStateButton state={"Canceled"} />,
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Bantan",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "СБД, 12-р хороо, СБД нэгдсэн эмнэлэг | 100 айлын гүүрэн гарцны хойд талд 4-д ногоон байр , 5-орц 5-давхар 97-тоот орцны код #1526",
    DeliveryState: <DeliveryStateButton state={"Pending"} />,
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Bantan",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "СБД, 12-р хороо, СБД нэгдсэн эмнэлэг | 100 айлын гүүрэн гарцны хойд талд 4-д ногоон байр , 5-орц 5-давхар 97-тоот орцны код #1526",
    DeliveryState: <DeliveryStateButton state={"Pending"} />,
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Bantan",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "СБД, 12-р хороо, СБД нэгдсэн эмнэлэг | 100 айлын гүүрэн гарцны хойд талд 4-д ногоон байр , 5-орц 5-давхар 97-тоот орцны код #1526",
    DeliveryState: <DeliveryStateButton state={"Pending"} />,
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Bantan",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "СБД, 12-р хороо, СБД нэгдсэн эмнэлэг | 100 айлын гүүрэн гарцны хойд талд 4-д ногоон байр , 5-орц 5-давхар 97-тоот орцны код #1526",
    DeliveryState: <DeliveryStateButton state={"Pending"} />,
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Bantan",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "СБД, 12-р хороо, СБД нэгдсэн эмнэлэг | 100 айлын гүүрэн гарцны хойд талд 4-д ногоон байр , 5-орц 5-давхар 97-тоот орцны код #1526",
    DeliveryState: <DeliveryStateButton state={"Pending"} />,
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Bantan",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "СБД, 12-р хороо, СБД нэгдсэн эмнэлэг | 100 айлын гүүрэн гарцны хойд талд 4-д ногоон байр , 5-орц 5-давхар 97-тоот орцны код #1526",
    DeliveryState: <DeliveryStateButton state={"Pending"} />,
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Bantan",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "СБД, 12-р хороо, СБД нэгдсэн эмнэлэг | 100 айлын гүүрэн гарцны хойд талд 4-д ногоон байр , 5-орц 5-давхар 97-тоот орцны код #1526",
    DeliveryState: <DeliveryStateButton state={"Pending"} />,
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Bantan",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "СБД, 12-р хороо, СБД нэгдсэн эмнэлэг | 100 айлын гүүрэн гарцны хойд талд 4-д ногоон байр , 5-орц 5-давхар 97-тоот орцны код #1526",
    DeliveryState: <DeliveryStateButton state={"Pending"} />,
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Bantan",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "СБД, 12-р хороо, СБД нэгдсэн эмнэлэг | 100 айлын гүүрэн гарцны хойд талд 4-д ногоон байр , 5-орц 5-давхар 97-тоот орцны код #1526",
    DeliveryState: <DeliveryStateButton state={"Pending"} />,
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Bantan",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "СБД, 12-р хороо, СБД нэгдсэн эмнэлэг | 100 айлын гүүрэн гарцны хойд талд 4-д ногоон байр , 5-орц 5-давхар 97-тоот орцны код #1526",
    DeliveryState: <DeliveryStateButton state={"Pending"} />,
  },
];

export const AdminOrders = () => {
  return (
    <div className="border-2 border-blue-400">
      <div className="flex justify-between p-4 mt-15 border-2 rounded-tl-lg rounded-tr-lg ">
        <div className="flex flex-col justify-between">
          <h1 className="font-bold text-xl text-[#09090B]">Orders</h1>
          <p className="font-medium text-xs text-[#71717A]">
            <span>{orderInfo.length}</span> items
          </p>
        </div>
        <div className="flex gap-3">
          <div>
            <Button className="rounded-full pl-4 " variant={"outline"}>
              <CalendarDays />
              13 June 2023 - 14 July 2023
            </Button>
          </div>
          <div>
            <ChangeDeliveryState />
          </div>
        </div>
      </div>

      <Table className="w-full border border-green-600 ">
        <TableHeader>
          <TableRow>
            <TableHead className="py-[18] px-4 border border-red-500">
              <Checkbox />
            </TableHead>
            <TableHead className="p-6 border border-blue-500">№</TableHead>
            <TableHead className="py-4 pl-4 pr-[130] border border-red-600">
              Customer
            </TableHead>
            <TableHead className="py-4 pl-4 pr-[110] border border-blue-500">
              Food
            </TableHead>
            <TableHead className="p-4 border border-red-600">
              <div className="flex gap-20 items-center border">
                Date
                <ChevronsUpDown className="w-4 h-4" />{" "}
              </div>
            </TableHead>
            <TableHead className="py-4 pl-4 pr-[110] border border-blue-500">
              Total{" "}
            </TableHead>
            <TableHead className="py-4 pl-4 pr-[83] border border-red-600 ">
              Delivery Address
            </TableHead>
            <TableHead className="p-4 border border-blue-600">
              {" "}
              <div className="flex gap-5 items-center border">
                Delivery state
                <ChevronsUpDown className="w-4 h-4" />{" "}
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderInfo.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="py-[18] px-4">
                <Checkbox />
              </TableCell>
              <TableCell className="pl-7">{item.orderNumber}</TableCell>
              <TableCell className="pl-4">{item.costumer}</TableCell>
              <TableCell className="pl-4">{item.food}</TableCell>
              <TableCell className="pl-7">{item.date}</TableCell>
              <TableCell className="pl-4">{item.total}</TableCell>
              <TableCell className="whitespace-normal">
                {item.DeliveryAddress}
              </TableCell>
              <TableCell className="pl-8">{item.DeliveryState}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <AdminPagination
          currentPage={currentPage}
          totalPage={totalPage}
          nextPage={nextPage}
          prevPage={prevPage}
          className=""
        /> */}
    </div>
  );
};

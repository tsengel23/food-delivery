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
import { useState } from "react";
import { AdminCalendar } from "./AdminCalendar";

const orderInfo = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
  const [orders, setOrders] = useState(
    orderInfo.map((order) => ({
      ...order,
      checked: false,
    }))
  );
  const selectedCount = orders.filter((o) => o.checked).length;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <div className="border-blue-400">
      <div className="flex justify-between p-4 mt-15 border-2 rounded-tl-lg rounded-tr-lg">
        <div className="flex flex-col justify-between">
          <h1 className="font-bold text-xl text-[#09090B]">Orders</h1>
          <p className="font-medium text-xs text-[#71717A]">
            <span>{orderInfo.length}</span> items
          </p>
        </div>
        <div className="flex gap-3">
          <div>
            <AdminCalendar />
            {/* <Button className="rounded-full pl-4 " variant={"outline"}>
              <CalendarDays />
              13 June 2023 - 14 July 2023
            </Button> */}
          </div>
          <div>
            <ChangeDeliveryState stateNumber={selectedCount} />
          </div>
        </div>
      </div>

      <Table className="w-full border border-green-600  mb-6">
        <TableHeader>
          <TableRow>
            <TableHead className="py-[18] px-4 border border-red-500">
              <Checkbox
                checked={
                  orders.length > 0 && orders.every((order) => order.checked)
                }
                onCheckedChange={(value) => {
                  setOrders((prev) =>
                    prev.map((order) => ({
                      ...order,
                      checked: !!value,
                    }))
                  );
                }}
              />
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
                <ChevronsUpDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead className="py-4 pl-4 pr-[110] border border-blue-500">
              Total
            </TableHead>
            <TableHead className="py-4 pl-4 pr-[83] border border-red-600 ">
              Delivery Address
            </TableHead>
            <TableHead className="p-4 border border-blue-600">
              <div className="flex gap-5 items-center border">
                Delivery state
                <ChevronsUpDown className="w-4 h-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.slice(0, 12).map((item) => (
            <TableRow key={item.id}>
              <TableCell className="py-[18] px-4">
                <Checkbox
                  checked={item.checked}
                  onCheckedChange={(value) => {
                    setOrders((prev) =>
                      prev.map((order) =>
                        order.id === item.id
                          ? { ...order, checked: !!value }
                          : order
                      )
                    );
                  }}
                />
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
      <div className="border border-red-500 mb-7 py-4">
        <AdminPagination
          currentPage={currentPage}
          totalPage={totalPage}
          nextPage={nextPage}
          prevPage={prevPage}
          className=""
        />
      </div>
    </div>
  );
};

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

const orderInfo = [
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Baas",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    DeliveryState: "button",
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Baas",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    DeliveryState: "button",
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Baas",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    DeliveryState: "button",
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Baas",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    DeliveryState: "button",
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Baas",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    DeliveryState: "button",
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Baas",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    DeliveryState: "button",
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Baas",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    DeliveryState: "button",
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Baas",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    DeliveryState: "button",
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Baas",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    DeliveryState: "button",
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Baas",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    DeliveryState: "button",
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Baas",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    DeliveryState: "button",
  },
  {
    check: false,
    orderNumber: 1,
    costumer: "Test@gamil.com",
    food: "Baas",
    date: "2024/12/20",
    total: "$26.97",
    DeliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    DeliveryState: "button",
  },
];

export const AdminOrders = () => {
  return (
    <div className=" w-full h-full border border-red-600">
      <div className="mt-15 rounded-lg border border-indigo-600 ">
        <div className="flex justify-between p-4">
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
              <Button className="rounded-full" variant={"outline"}>
                Change delivery state <span>1</span>
              </Button>
            </div>
          </div>
        </div>

        <Table className="w-full border border-green-600">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Checkbox />
              </TableHead>
              <TableHead className="w-[100px]">№</TableHead>
              <TableHead className="w-[100px]">Customer</TableHead>
              <TableHead>Food</TableHead>
              <TableHead>
                <div className="flex gap-5 items-center border">
                  Date
                  <ChevronsUpDown className="w-4 h-4" />{" "}
                </div>
              </TableHead>
              <TableHead>Total </TableHead>
              <TableHead>Delivery Address</TableHead>
              <TableHead>
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
                <TableCell className="font-medium">
                  <div>
                    <Checkbox />
                  </div>
                </TableCell>
                <TableCell>{item.orderNumber}</TableCell>
                <TableCell>{item.costumer}</TableCell>
                <TableCell>{item.food}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.total}</TableCell>
                <TableCell>{item.DeliveryAddress}</TableCell>
                <TableCell>{item.DeliveryState}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

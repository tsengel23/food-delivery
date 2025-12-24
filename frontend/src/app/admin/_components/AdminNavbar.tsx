"use client";

import { Button } from "@/components/ui/button";
import { Truck, Utensils } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdminAvatar } from "./AdminAvatar";

const AdminNavbar = () => {
  const pathname = usePathname();
  return (
    <div className=" h-full w-fit border-green-500">
      <Link href="/">
        <div className="mt-9 mx-5">
          <img src="/logo2.png" />
        </div>
      </Link>
      <div className="flex flex-col gap-6 mt-10 mx-5 justify-between">
        {/*  */}
        <Link href="/admin/food-menu">
          <Button
            variant={pathname === "/admin/food-menu" ? "default" : "outline"}
            className="rounded-full w-[165]"
          >
            <div className="flex gap-2 ml-6">
              <Utensils /> Food menu
            </div>
          </Button>
        </Link>
        <Link href="/admin/orders">
          <Button
            variant={pathname === "/admin/orders" ? "default" : "outline"}
            className="rounded-full w-[165]"
          >
            <div className="flex gap-2 ">
              <Truck /> Orders
            </div>
          </Button>
        </Link>
        {/*  */}

        {/* <Button
          variant={"outline"}
          className="rounded-full hover:bg-[#18181B] hover:text-white"
        >
          <div className="flex gap-2 ml-6">
            <Utensils /> Food menu
          </div>
        </Button>
        <Button
          variant={"outline"}
          className="rounded-full hover:bg-[#18181B] hover:text-white"
        >
          <div className="flex gap-2 ">
            <Truck /> Orders
          </div>
        </Button> */}

        {/* 
      <div className="p-6 border rounded-xl">
        {active === "food" && <FoodMenu />}
        {active === "orders" && <Orders />}
      </div> */}
      </div>
      <AdminAvatar />
    </div>
  );
};

export default AdminNavbar;

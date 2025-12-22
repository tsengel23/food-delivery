"use client";

import { Button } from "@/components/ui/button";
import { Truck, Utensils } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const AdminNavbar = () => {
  const [active, setActive] = useState("food");
  return (
    <div className=" h-full w-fit  border-green-500">
      <Link href="/">
        <div className="mt-9 mx-5">
          <img src="/logo2.png" />
        </div>
      </Link>
      <div className="flex flex-col gap-6 mt-10 mx-5 justify-between">
        {/*  */}
        <Button
          onClick={() => setActive("food")}
          variant={active === "food" ? "default" : "outline"}
          className="rounded-full "
        >
          <div className="flex gap-2 ml-6">
            <Utensils /> Food menu
          </div>
        </Button>
        <Button
          onClick={() => setActive("order")}
          variant={active === "order" ? "default" : "outline"}
          className="rounded-full "
        >
          <div className="flex gap-2 ml-6">
            <Truck /> Orders
          </div>
        </Button>
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
    </div>
  );
};

export default AdminNavbar;

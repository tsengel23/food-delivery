import { Button } from "@/components/ui/button";
import { Truck, Utensils } from "lucide-react";
import Link from "next/link";
import React from "react";

const AdminNavbar = () => {
  return (
    <div className=" h-full w-fit border-2 border-green-500">
      <Link href="/">
        <div className="mt-9 mx-5">
          <img src="/logo2.png" />
        </div>
      </Link>
      <div className="flex flex-col gap-6 mt-10 mx-5 border justify-between">
        <Button
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
        </Button>
      </div>
    </div>
  );
};

export default AdminNavbar;

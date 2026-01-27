"use client";
import Link from "next/link";
import { DeliveryAddress } from "./DeliveryAddress";
import { Order } from "./Order";
import { UserStatus } from "./UserStatus";
import { AfterLogin } from "./AfterLogin";
import { BeforeLogin } from "./BeforeLogin";
import { useState } from "react";
import { useAuth } from "@/app/context/AuthProvider";

export const Navigation = () => {
  const { user } = useAuth();
  console.log("adgadg", user);
  // const [enter, setEnter] = useState<boolean>(false);
  return (
    <div className="w-full bg-[#18181B] py-3 fixed z-10">
      <div className="flex justify-between mx-22">
        <Link href="/">
          <div>
            <img src="/logo1.png" />
          </div>
        </Link>
        {/* <BeforeLogin /> <AfterLogin /> */}
        {!user ? <BeforeLogin /> : <AfterLogin />}
      </div>
    </div>
  );
};

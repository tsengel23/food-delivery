"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AfterLogin } from "./AfterLogin";
import { BeforeLogin } from "./BeforeLogin";

export const Navigation = () => {
  const [user, setUser] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser === "true") {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  return (
    <div className="w-full bg-[#18181B] py-3 fixed z-10">
      <div className="flex justify-between mx-22">
        <Link href="/">
          <img src="/logo1.png" />
        </Link>

        {user ? <AfterLogin /> : <BeforeLogin />}
      </div>
    </div>
  );
};

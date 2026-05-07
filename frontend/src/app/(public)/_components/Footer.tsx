"use client";

import Link from "next/link";
import { Flow } from "./Flow";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

export const Footer = () => {
  const [categories, setCategories] = useState<category[]>([]);

  useEffect(() => {
    api.get<category[]>("/categories").then(({ data }) => setCategories(data));
  }, []);
  return (
    <div className="w-full bg-[#18181B] flex flex-col   border-red-500">
      <div className="w-full py-7 pl-[98px] bg-[#EF4444] mt-15 whitespace-nowrap overflow-hidden animate-flow flex gap-[34]">
        <Flow
          text="Fresh fast delivered"
          speed={120}
          direction="left"
          repeat={14}
        />

        {/* <span className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </span>
        <span className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </span>
        <span className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </span>
        <span className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </span>
        <span className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </span>
        <span className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </span>
        <span className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </span>
        <span className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </span>
        <span className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </span>
        <span className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </span>
        <span className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </span>
        <span className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </span>
        <span className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </span>
        <span className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </span> */}
      </div>
      <div className="relative mx-22 mt-[76] mb-[104]  border-blue-400 flex justify-between">
        <div className="absolute left-0 top-0">
          <img src="/logo.png" className="" />
        </div>
        <div className="ml-[308]">
          <h1 className="uppercase font-normal text-base text-[#71717A] mb-4">
            NomNom
          </h1>
          <ul className="text-base font-normal text-white space-y-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Contact us</Link>
            </li>
            <li>
              <Link href="/">Delivery zone</Link>
            </li>
          </ul>
        </div>
        <div className="w-[320]">
          <h1 className="uppercase font-normal text-base text-[#71717A] mb-4">
            menu
          </h1>
          <ul className="text-base font-normal text-white space-y-4 grid grid-cols-2">
            {categories.map((cat) => (
              <li key={cat._id}>
                <Link href={`/#${cat._id}`}>{cat.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between h-20 pr-9">
          <h1 className="font-normal text-base text-[#71717A] uppercase">
            Follow us
          </h1>
          <div className="flex gap-4">
            <Link href="#" target="_blank">
              <img className="w-7 h-7" src="./facebook.png" />
            </Link>
            <Link href="#" target="_blank">
              <img className="w-7 h-7" src="/Instagram.png" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-22  mb-[111] border-t border-gray-400 flex py-8 gap-12">
        <p className="font-normal text-sm text-[#71717A]">
          Copy right 2024 © Nomnom LLC
        </p>
        <Link href="#">
          <p className="font-normal text-sm text-[#71717A]">Privacy policy</p>
        </Link>
        <Link href="#">
          <p className="font-normal text-sm text-[#71717A]">
            Terms and conditoin
          </p>
        </Link>
        <Link href="#">
          <p className="font-normal text-sm text-[#71717A]">Cookie policy</p>
        </Link>
      </div>
    </div>
  );
};

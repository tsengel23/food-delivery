import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full bg-[#18181B] flex flex-col   border-red-500">
      <div className="w-full py-7 pl-[98px] bg-[#EF4444] mt-15 flex gap-[34px] whitespace-nowrap overflow-hidden">
        <p className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </p>
        <p className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </p>
        <p className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </p>
        <p className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </p>
        <p className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </p>
        <p className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </p>
        <p className="font-semibold text-[#FAFAFA] text-3xl">
          Fresh fast delivered
        </p>
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
            <li>
              <Link href="/menu">Appetizers</Link>
            </li>
            <li>
              <Link href="/menu">Salads</Link>
            </li>
            <li>
              <Link href="/menu">Pizzas</Link>
            </li>
            <li>
              <Link href="/menu">Lunch favorites</Link>
            </li>
            <li>
              <Link href="/menu">Main dishes</Link>
            </li>
            <li>
              <Link href="/menu">Side dish </Link>
            </li>
            <li>
              <Link href="/menu">Brunch</Link>
            </li>
            <li>
              <Link href="/menu">Desserts</Link>
            </li>
            <li>
              <Link href="/menu">Beverages</Link>
            </li>
            <li>
              <Link href="/menu">Fish & Sea foods</Link>
            </li>
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
              <img className="w-7 h-7" src="./instagram.png" />
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

// import Link from "next/link";

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export const Footerz = () => {
  return (
    <footer className="w-full bg-[#111114] text-gray-300">
      <div
        className="
          max-w-7xl mx-auto
          px-6 py-16
          grid
          grid-cols-1
          md:grid-cols-4
          gap-12
        "
      >
        {/* LOGO */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-500 rounded-full" />
            <span className="text-xl font-semibold text-white">NomNom</span>
          </div>
          <p className="text-sm text-gray-400">Swift delivery</p>
        </div>

        {/* NOMNOM */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            NomNom
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
            <li>
              <Link href="/delivery-zone">Delivery zone</Link>
            </li>
          </ul>
        </div>

        {/* MENU */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Menu
          </h4>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-8">
            <li>
              <Link href="/menu/appetizers">Appetizers</Link>
            </li>
            <li>
              <Link href="/menu/side-dish">Side dish</Link>
            </li>
            <li>
              <Link href="/menu/salads">Salads</Link>
            </li>
            <li>
              <Link href="/menu/brunch">Brunch</Link>
            </li>
            <li>
              <Link href="/menu/pizzas">Pizzas</Link>
            </li>
            <li>
              <Link href="/menu/desserts">Desserts</Link>
            </li>
            <li>
              <Link href="/menu/lunch">Lunch favorites</Link>
            </li>
            <li>
              <Link href="/menu/beverages">Beverages</Link>
            </li>
            <li>
              <Link href="/menu/main">Main dishes</Link>
            </li>
            <li>
              <Link href="/menu/seafood">Fish & Sea foods</Link>
            </li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Follow us
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-gray-600
                         flex items-center justify-center
                         hover:border-white hover:text-white transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-gray-600
                         flex items-center justify-center
                         hover:border-white hover:text-white transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// export const Footer = () => {
//   return (
//     <div className="flex flex-col  w-full  bg-[#18181B] border-3 border-green-500">
//       <div className="w-full py-7 pl-[98px] bg-[#EF4444] mt-15 flex gap-[34px] whitespace-nowrap overflow-hidden">
//         <p className="font-semibold text-[#FAFAFA] text-3xl">
//           Fresh fast delivered
//         </p>
//         <p className="font-semibold text-[#FAFAFA] text-3xl">
//           Fresh fast delivered
//         </p>
//         <p className="font-semibold text-[#FAFAFA] text-3xl">
//           Fresh fast delivered
//         </p>
//         <p className="font-semibold text-[#FAFAFA] text-3xl">
//           Fresh fast delivered
//         </p>
//         <p className="font-semibold text-[#FAFAFA] text-3xl">
//           Fresh fast delivered
//         </p>
//         <p className="font-semibold text-[#FAFAFA] text-3xl">
//           Fresh fast delivered
//         </p>
//         <p className="font-semibold text-[#FAFAFA] text-3xl">
//           Fresh fast delivered
//         </p>
//       </div>
//       <div className="flex justify-between mx-[396] h-[228] mt-[76] mb-[104] border-3 border-pink-600">
//         <div className="flex flex-col gap-4">
//           <h1 className="font-normal text-base text-[#71717A]">NOMNOM</h1>
//           <p className="text-base font-normal text-white">Home </p>
//           <p className="text-base font-normal text-white">Contact us</p>
//           <p className="text-base font-normal text-white">Delivery zone</p>
//         </div>
//         <div className="flex justify-between w-[320]">
//           <div className="flex flex-col gap-4">
//             <h1 className="font-normal text-base text-[#71717A]">MENU</h1>
//             <p className="text-base font-normal text-white">Appetizers</p>
//             <p className="text-base font-normal text-white">Salads</p>
//             <p className="text-base font-normal text-white">Pizzas</p>
//             <p className="text-base font-normal text-white">Lunch favorites</p>
//             <p className="text-base font-normal text-white">Main dishes</p>
//           </div>
//           <div className="flex flex-col gap-4">
//             <h1 className="">ABC</h1>
//             <p className="text-base font-normal text-white">Appetizers</p>
//             <p className="text-base font-normal text-white">Salads</p>
//             <p className="text-base font-normal text-white">Pizzas</p>
//             <p className="text-base font-normal text-white">Lunch favorites</p>
//             <p className="text-base font-normal text-white">Main dishes</p>
//           </div>
//         </div>
//         <div></div>
//         <div className="flex flex-col justify-between h-20 pr-9">
//           <h1 className="font-normal text-base text-[#71717A]">FOLLOW US</h1>
//           <div className="flex gap-4">
//             <Link href="#" target="_blank">
//               <img className="w-7 h-7" src="./facebook.png" />
//             </Link>
//             <Link href="#" target="_blank">
//               <img className="w-7 h-7" src="./instagram.png" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

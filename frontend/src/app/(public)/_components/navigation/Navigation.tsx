// export const Navigation = () => {
//   const hasUser = false;
//   return (
//     <div className="flex justify-between">
//       <p>logo</p>
//       <div>{hasUser ? <div> cart</div> : <div>login</div>}</div>
//     </div>
//   );
// };
"use client";
import Link from "next/link";
import { DeliveryAddress } from "./DeliveryAddress";
import { Order } from "./Order";
import { UserStatus } from "./UserStatus";
import { AfterLogin } from "./AfterLogin";
import { BeforeLogin } from "./BeforeLogin";

export const Navigation = () => {
  const user = false;
  return (
    <div className="w-full bg-[#18181B] py-3 fixed z-10">
      <div className="flex justify-between mx-22">
        <Link href="/">
          <div>
            <img src="/logo1.png" />
          </div>
        </Link>

        {user ? <AfterLogin /> : <BeforeLogin />}
        {/* <BeforeLogin />
        <AfterLogin /> */}
      </div>
    </div>
  );
};

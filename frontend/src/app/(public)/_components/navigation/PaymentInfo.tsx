"use client";

import { useCart } from "@/app/context/Cart-Context";
import { Button } from "@/components/ui/button";

interface PaymentInfoProps {
  subtotal: number;
  shipping: number;
  total: number;
}

export const PaymentInfo = () => {
  const { getTotalPrice } = useCart();
  const subtotal = getTotalPrice();
  const shipping = 0.99;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col rounded-xl p-4 bg-white gap-2 mb-8">
      <h1 className="text-[#71717A] text-xl font-semibold">Payment info</h1>
      <div className="flex flex-col">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Items</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span className="text-gray-500">Shipping</span>
          <span className="font-medium">${shipping.toFixed(2)}</span>
        </div>
      </div>
      <div className="border-t border-dashed border-gray-300 my-3" />
      <div className="flex justify-between text-base font-semibold mb-5">
        <span>Total</span>
        <span>${total}</span>
      </div>
      <Button
        variant={"outline"}
        type="submit"
        className="!bg-[#EF4444] rounded-full text-white"
      >
        Checkout
      </Button>
    </div>
  );
};

// import { Button } from "@/components/ui/button";

// interface PaymentInfoProps {
//   subtotal: number;
//   shipping: number;
//   total: number;
// }

// export const PaymentInfo = ({
//   subtotal,
//   shipping,
//   total,
// }: PaymentInfoProps) => {
//   return (
//     <div className="flex flex-col rounded-xl p-4 bg-white rounded-xl gap-2 mb-8">
//       <h1 className="text-[#71717A] text-xl  font-semibold">Payment info</h1>
//       <div className="flex flex-col">
//         <div className="flex justify-between text-sm">
//           <span className="text-gray-500">Items</span>
//           <span className="font-medium">$0.99</span>
//         </div>
//         <div className="flex justify-between text-sm mt-2">
//           <span className="text-gray-500">Shipping</span>
//           <span className="font-medium">$0.99</span>
//         </div>
//       </div>
//       <div className="border-t border-dashed border-gray-300 my-3" />
//       <div className="flex justify-between text-base font-semibold">
//         <span>Total</span>
//         <span>$26.97</span>
//       </div>
//       <Button
//         variant={"outline"}
//         type="submit"
//         className="!bg-[#EF4444] rounded-full text-white"
//       >
//         Checkout
//       </Button>
//     </div>
//   );
// };

"use client";
export const CartIsEmpthy = () => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center p-8 rounded-2xl bg-gray-100 min-w-full h-[182px] mt-3">
      <img src={"/logo empthy.png"} className="w-[61px] h-[50px]" />
      <h1 className="font-bold text-[#09090B] text-base">Your cart is empthy</h1>
      <p className="text-xs text-[#71717A] font-normal text-center mx-auto">Hungry? 🍔 Add some delicious dishes to your cart and satisfy your cravings!</p>
    </div>
  );
};

"use client";
export const CartIsEmpthy = () => {
  return (
    <div className="flex flex-col gap-1 items-center p-8 rounded-2xl">
      <img src={"/logo empty.png"} className="w-[50px] h-[61px]" />
      <h1 className="font-bold text-[#09090B] text-base">Your cart is empthy</h1>
      <p className="text-xs text-[#71717A] font-normal">Hungry? 🍔 Add some delicious dishes to your cart and satisfy your cravings!</p>
    </div>
  );
};

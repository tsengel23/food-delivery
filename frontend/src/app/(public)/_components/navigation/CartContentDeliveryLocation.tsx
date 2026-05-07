"use client";

import { Textarea } from "@/components/ui/textarea";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export const CartContentDeliveryLocation = ({ value, onChange }: Props) => {
  return (
    <div className="mt-14 flex flex-col gap-2">
      <h2 className="text-[#71717A] text-xl font-semibold">Delivery location</h2>
      <Textarea
        placeholder="Please share your complete address"
        className="h-20 resize-none break-all overflow-y-hidden"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

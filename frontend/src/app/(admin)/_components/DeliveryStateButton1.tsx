"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { toast } from "sonner";

type Status = "pending" | "paid" | "delivered" | "cancelled";

type Props = {
  orderId: string;
  status: Status;
  onStatusChange: (orderId: string, newStatus: Status) => void;
};

const stateStyle: Record<Status, string> = {
  pending: "border-red-500 text-red-500",
  paid: "border-blue-500 text-blue-500",
  delivered: "border-green-500 text-green-500",
  cancelled: "border-gray-400 text-gray-500",
};

export const DeliveryStateButton1 = ({ orderId, status, onStatusChange }: Props) => {
  // Local state: API хариу ирэхийг хүлээхгүйгээр шууд UI шинэчилнэ
  const [current, setCurrent] = useState<Status>(status);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrent(status);
  }, [status]);

  const handleChange = async (val: string) => {
    const newStatus = val as Status;
    const prev = current;
    setCurrent(newStatus); // optimistic
    setLoading(true);
    try {
      await api.put(`/orders/${orderId}`, { status: newStatus });
      onStatusChange(orderId, newStatus);
      toast.success("Status updated");
    } catch {
      setCurrent(prev); // rollback
      toast.error("Failed to update status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Select value={current} onValueChange={handleChange} disabled={loading}>
      <SelectTrigger
        className={`w-fit rounded-full [&>svg]:hidden ${stateStyle[current]}`}
      >
        <div className="flex gap-3 items-center capitalize">
          <SelectValue />
          <ChevronsUpDown className="w-4 h-4" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pending">Pending</SelectItem>
        <SelectItem value="paid">Paid</SelectItem>
        <SelectItem value="delivered">Delivered</SelectItem>
        <SelectItem value="cancelled">Cancelled</SelectItem>
      </SelectContent>
    </Select>
  );
};

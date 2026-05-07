"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ChevronsUpDown, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import { DeliveryStateButton1 } from "./DeliveryStateButton1";
import { AdminCalendar } from "./AdminCalendar";
import { ChangeDeliveryState } from "./ChangeDeliveryState";

type Status = "pending" | "paid" | "delivered" | "cancelled";

const PAGE_SIZE = 12;

const FoodCell = ({ items }: { items: Order["orderItems"] }) => {
  const [expanded, setExpanded] = useState(false);

  const FoodRow = ({ item }: { item: Order["orderItems"][0] }) => (
    <div className="flex items-center gap-2">
      <img
        src={item.foodId.image}
        alt={item.foodId.name}
        className="w-8 h-8 rounded object-cover flex-shrink-0"
      />
      <span className="text-xs">{item.foodId.name}</span>
      <span className="text-xs text-gray-400 ml-auto">× {item.quantity}</span>
    </div>
  );

  if (items.length === 1) return <FoodRow item={items[0]} />;

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium hover:underline w-fit"
      >
        {items.length} foods
        {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
      </button>
      {expanded && (
        <div className="flex flex-col gap-1.5 min-w-[180px]">
          {items.map((item) => (
            <FoodRow key={item.foodId._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await api.get<Order[]>("/orders");
        setOrders(data);
      } catch {
        toast.error("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const totalPages = Math.ceil(orders.length / PAGE_SIZE);
  const paginatedOrders = orders.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const currentPageIds = paginatedOrders.map((o) => o._id);
  const allCurrentSelected =
    currentPageIds.length > 0 && currentPageIds.every((id) => selectedIds.includes(id));

  const handleStatusChange = (orderId: string, newStatus: Status) => {
    setOrders((prev) =>
      prev.map((o) => (o._id === orderId ? { ...o, status: newStatus } : o)),
    );
  };

  const handleDelete = async (orderId: string) => {
    if (!confirm("Энэ захиалгыг устгах уу?")) return;
    try {
      await api.delete(`/orders/${orderId}`);
      setOrders((prev) => prev.filter((o) => o._id !== orderId));
      setSelectedIds((prev) => prev.filter((id) => id !== orderId));
      toast.success("Order deleted");
    } catch {
      toast.error("Failed to delete order");
    }
  };

  const handleBulkStatusChange = async (status: Status) => {
    if (selectedIds.length === 0) {
      toast.error("Please select at least one order");
      return;
    }
    try {
      await Promise.all(selectedIds.map((id) => api.put(`/orders/${id}`, { status })));
      setOrders((prev) =>
        prev.map((o) => (selectedIds.includes(o._id) ? { ...o, status } : o)),
      );
      setSelectedIds([]);
      toast.success(`${selectedIds.length} orders updated`);
    } catch {
      toast.error("Failed to update orders");
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const toggleSelectAll = () => {
    if (allCurrentSelected) {
      setSelectedIds((prev) => prev.filter((id) => !currentPageIds.includes(id)));
    } else {
      setSelectedIds((prev) => [...new Set([...prev, ...currentPageIds])]);
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between p-4 border-2 rounded-tl-lg rounded-tr-lg">
        <div className="flex flex-col justify-between">
          <h1 className="font-bold text-xl text-[#09090B]">Orders</h1>
          <p className="font-medium text-xs text-[#71717A]">{orders.length} items</p>
        </div>
        <div className="flex gap-3 items-center">
          <AdminCalendar />
          <ChangeDeliveryState selectedCount={selectedIds.length} onSave={handleBulkStatusChange} />
        </div>
      </div>

      {/* Table */}
      <Table className="w-full border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-4 px-4">
              <Checkbox checked={allCurrentSelected} onCheckedChange={toggleSelectAll} />
            </TableHead>
            <TableHead className="p-4">№</TableHead>
            <TableHead className="py-4 pl-4 pr-20">Customer</TableHead>
            <TableHead className="py-4 pl-4 pr-16">Food</TableHead>
            <TableHead className="p-4">
              <div className="flex gap-4 items-center">
                Date
                <ChevronsUpDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead className="py-4 pl-4 pr-12">Total</TableHead>
            <TableHead className="py-4 pl-4 pr-10">Delivery Address</TableHead>
            <TableHead className="p-4">
              <div className="flex gap-4 items-center">
                Delivery state
                <ChevronsUpDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead className="p-4" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedOrders.map((order, index) => (
            <TableRow
              key={order._id}
              className={selectedIds.includes(order._id) ? "bg-gray-50" : ""}
            >
              <TableCell className="py-4 px-4">
                <Checkbox
                  checked={selectedIds.includes(order._id)}
                  onCheckedChange={() => toggleSelect(order._id)}
                />
              </TableCell>
              <TableCell className="pl-4">
                {(currentPage - 1) * PAGE_SIZE + index + 1}
              </TableCell>
              <TableCell className="pl-4">{order.userId.email}</TableCell>
              <TableCell className="pl-4">
                <FoodCell items={order.orderItems} />
              </TableCell>
              <TableCell className="pl-4">
                {new Date(order.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="pl-4">${order.totalPrice.toFixed(2)}</TableCell>
              <TableCell className="whitespace-normal max-w-45 pl-4 text-sm text-gray-600">
                {order.deliveryAddress || "-"}
              </TableCell>
              <TableCell className="pl-4">
                <DeliveryStateButton1
                  orderId={order._id}
                  status={order.status}
                  onStatusChange={handleStatusChange}
                />
              </TableCell>
              <TableCell className="px-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-gray-400 hover:text-red-500 hover:bg-red-50"
                  onClick={() => handleDelete(order._id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border border-t-0 rounded-bl-lg rounded-br-lg mb-6">
          <p className="text-xs text-[#71717A]">
            {(currentPage - 1) * PAGE_SIZE + 1}–{Math.min(currentPage * PAGE_SIZE, orders.length)} of {orders.length}
          </p>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              className="w-8 h-8 p-0"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                className="w-8 h-8 p-0 text-xs"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="w-8 h-8 p-0"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { useAuth } from "@/app/context/AuthProvider";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type User = {
  _id: string;
  email: string;
  role: "owner" | "manager" | "customer";
  createdAt: string;
};

export default function UsersPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Зөвхөн owner нэвтэрч болно
  useEffect(() => {
    if (user && user.role !== "owner") {
      router.replace("/admin");
    }
  }, [user, router]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get<User[]>("/users");
        setUsers(data);
      } catch {
        toast.error("Failed to load users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleRoleChange = async (userId: string, role: string) => {
    try {
      await api.put(`/users/${userId}/role`, { role });
      setUsers((prev) =>
        prev.map((u) => (u._id === userId ? { ...u, role: role as User["role"] } : u))
      );
      toast.success("Role updated");
    } catch {
      toast.error("Failed to update role");
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Бүртгэсэн огноо</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((u) => (
            <TableRow key={u._id}>
              <TableCell>{u.email}</TableCell>
              <TableCell>
                {/* Owner өөрийнхийг өөрчлөх боломжгүй */}
                {u._id === user?._id ? (
                  <span className="font-semibold">{u.role}</span>
                ) : (
                  <Select
                    value={u.role}
                    onValueChange={(val) => handleRoleChange(u._id, val)}
                  >
                    <SelectTrigger className="w-36">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="owner">Owner</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="customer">Customer</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </TableCell>
              <TableCell>
                {new Date(u.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

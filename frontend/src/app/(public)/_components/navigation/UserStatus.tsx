"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { useAuth } from "@/app/context/AuthProvider";

export const UserStatus = () => {
  const { user, logout } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button
            variant={"default"}
            className="w-9 h-9 flex justify-center items-center bg-[#EF4444] rounded-full hover:bg-[#FF692A] hover:text-black transition ease-in"
          >
            <User className="w-4 h-4" />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col items-center">
        <DropdownMenuLabel className="mx-4 mt-4">
          <span className="text-[#09090B] font-semibold text-xl">
            {user?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="border w-fit p-0 rounded-full my-3">
          <Button
            onClick={logout}
            variant={"outline"}
            className="rounded-full border border-red-200"
          >
            Sign out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

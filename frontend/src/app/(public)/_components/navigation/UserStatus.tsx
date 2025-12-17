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

export const UserStatus = () => {
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
      <DropdownMenuContent className="flex flex-col items-center ">
        <DropdownMenuLabel className="mx-4 mt-4">
          <span className="text-[#09090B] font-semibold text-2xl">
            Test@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            variant={"outline"}
            className="mt-2 rounded-full overflow-hidden"
          >
            Sign out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

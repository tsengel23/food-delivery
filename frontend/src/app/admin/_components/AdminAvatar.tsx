import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChartNoAxesCombined,
  LogOut,
  MessageCircleQuestionMark,
  MessagesSquare,
  Settings,
  SquareChartGantt,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const AdminAvatar = () => {
  const router = useRouter();
  return (
    <div className="absolute top-3 right-3 ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-11 h-11 cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="p-1 text-xs">MT</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="" align="start">
          <DropdownMenuItem>
            <Link href="/admin/plan" className="flex">
              <SquareChartGantt className="mr-2 h-4 w-4" /> Plan
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/admin/statistic" className="flex">
              <ChartNoAxesCombined className="mr-2 h-4 w-4" /> Statistic
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/admin/feedback" className="flex">
              <MessagesSquare className="mr-2 h-4 w-4" />
              Feedback
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/admin/settings" className="flex">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/admin/help" className="flex">
              <MessageCircleQuestionMark className="mr-2 h-4 w-4" />
              Help
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => {
              localStorage.removeItem("token");
              router.push("/login");
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

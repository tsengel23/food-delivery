import { Button } from "@/components/ui/button";
import Link from "next/link";

export const LogEnter = () => {
  return (
    <Link href="/Login">
      <div>
        <Button
          variant={"outline"}
          className="rounded-full bg-[#EF4444] hover:bg-[#FF692A]"
        >
          Log in
        </Button>
      </div>
    </Link>
  );
};

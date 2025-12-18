import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SignUp = () => {
  return (
    <Link href="/SignUp">
      <div>
        <Button variant={"outline"} className="rounded-full hover:bg-gray-300">
          Sign up
        </Button>
      </div>
    </Link>
  );
};

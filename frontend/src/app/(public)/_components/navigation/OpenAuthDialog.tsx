import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const OpenAuthDialog = () => {
  // const router = useRouter();
  const [active, setActive] = useState(true);
  return (
    <Dialog>
      <DialogTrigger>OpenAuthDialog</DialogTrigger>
      <DialogContent className="aspect-[429/184] w-[429px] p-6  rounded-2xl [&>button]:hidden">
        <div className="relative flex flex-col justify-between overflow-hidden">
          <DialogHeader className="flex justify-center">
            <DialogTitle className="text-[#09090B] font-semibold text-2xl flex justify-center">
              You need to log in first
            </DialogTitle>
          </DialogHeader>
          <div className="flex gap-4 mb-8 h-5">
            <Button
              variant={"outline"}
              type="button"
              onClick={() => setActive(true)}
              className={`rounded-md py-2 px-4 flex-1 ${
                active ? "!bg-black !text-white" : ""
              }`}

              // className="rounded-md py-2 px-4 flex-1 focus:bg-black focus:text-white"
            >
              Log in
            </Button>
            <Button
              variant={"outline"}
              type="button"
              onClick={() => setActive(false)}
              className={`rounded-md py-2 px-4 flex-1  ${
                !active ? "!bg-black !text-white" : ""
              }`}

              // className="rounded-md py-2 px-4 flex-1 focus:bg-black focus:text-white"
            >
              Sign up
            </Button>
          </div>
          <DialogClose asChild className="absolute top-1 right-1">
            <Button
              variant={"outline"}
              className="w-8 h-8 rounded-full flex justify-center items-center"
            >
              <X className="w-3 h-3 text-black" />
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

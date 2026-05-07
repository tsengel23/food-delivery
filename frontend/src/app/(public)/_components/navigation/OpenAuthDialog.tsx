"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const OpenAuthDialog = ({ open, onOpenChange }: Props) => {
  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[429px] p-6 rounded-2xl [&>button]:hidden">
        <div className="relative flex flex-col gap-6 h-[150px]">
          <DialogHeader className="flex justify-center mb-8 mt-2">
            <DialogTitle className="text-[#09090B] font-semibold text-2xl text-center">
              You need to log in first
            </DialogTitle>
          </DialogHeader>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 rounded-md bg-black text-white hover:bg-gray-800 hover:text-white"
              onClick={() => {
                onOpenChange(false);
                router.push("/login");
              }}
            >
              Log in
            </Button>
            <Button
              variant="outline"
              className="flex-1 rounded-md"
              onClick={() => {
                onOpenChange(false);
                router.push("/sign-up");
              }}
            >
              Sign up
            </Button>
          </div>
          <DialogClose asChild className="absolute top-0 right-0">
            <Button
              variant="outline"
              className="w-8 h-8 rounded-full flex justify-center items-center p-0"
            >
              <X className="w-3 h-3" />
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

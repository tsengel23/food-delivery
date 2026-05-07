"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const SuccessOrder = ({ open, onClose }: Props) => {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="flex flex-col items-center gap-6  rounded-2xl">
        <DialogTitle className="text-2xl font-semibold text-center text-[#09090B]">
          Your order has been successfully placed !
        </DialogTitle>
        <img src="/illustration.png" alt="Success" className="w-39 h-66.5 object-contain" />
        <Button variant="outline" className="rounded-full px-12" onClick={onClose}>
          Back to home
        </Button>
      </DialogContent>
    </Dialog>
  );
};

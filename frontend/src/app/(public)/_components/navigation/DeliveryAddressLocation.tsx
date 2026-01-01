"use client";

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
import { ChevronRight, MapPin, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  address: z.string(),
});

export const DeliveryAddressLocation = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" flex justify-center items-center bg-white rounded-full hover:bg-gray-200 transition">
          <MapPin className="w-5 h-5 text-[#EF4444]" />
          <span className="text-[#EF4444] text-xs font-normal">
            Delivery address :
          </span>
          <p className="text-[#71717A] text-xs font-normal">Add Location</p>
          <ChevronRight className="text-gray-500 " />
        </Button>
      </DialogTrigger>
      <DialogContent className="[&>button]:hidden w-full flex flex-col ">
        <DialogHeader className="mb-4 mt-1 p-1 relative">
          <DialogTitle className="text-[#09090B] font-semibold text-2xl">
            Please write your delivery address!
          </DialogTitle>
          <DialogClose className="absolute top-0 right-0">
            <div className="w-9 h-9  rounded-full bg-[#F4F4F5] flex justify-center items-center hover:bg-gray-300">
              <X className="w-4 h-4" />
            </div>
          </DialogClose>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Please share your complete address"
                      className="resize-none h-20 w-ful break-all overflow-y-hidden"
                      {...field}
                    />
                    {/* <Input placeholder="shadcn" {...field} /> */}
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4 w-full justify-end">
              <DialogClose asChild>
                <Button variant={"outline"} type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button variant={"default"} type="submit">
                Deliver Here
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

"use client";

import { Plus, X } from "lucide-react";
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
  categoryName: z.string(),
});

export const AddNewCategoryButton = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant={"destructive"}
          className="w-9 h-9 bg-[#EF4444] flex justify-center items-center rounded-full"
        >
          <Plus className="w-4 h-4 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full rounded-xl bg-white flex gap-6 flex-col [&>button]:hidden border border-red-600">
        <DialogHeader className="relative">
          <DialogTitle className="text-[#09090B] font-semibold text-2xl mb-10">
            Add new category
          </DialogTitle>
          <DialogClose asChild>
            <button className="flex justify-center items-center w-8 h-8 rounded-full border hover:bg-gray-300 absolute top-0 right-0">
              <X className="w-3 h-3 text-black" />
            </button>
          </DialogClose>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col items-end "
          >
            <FormField
              control={form.control}
              name="categoryName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="">Category name</FormLabel>
                  <FormControl className=" ">
                    <Input placeholder="Type category name..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogClose asChild>
              <Button variant={"default"} type="submit" className="mt-10 ">
                Add category
              </Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

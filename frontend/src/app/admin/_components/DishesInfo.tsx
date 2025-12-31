"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { ImageIcon, Pencil, Plus, Trash, X } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const formSchema = z.object({
  dishesName: z.string(),
  dishCategory: z.string(),
  ingredients: z.string(),
  price: z.string(),
  image: z.instanceof(File).optional(),
});

export const DishesInfo = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dishesName: "",
      dishCategory: "",
      ingredients: "",
      price: "",
      image: undefined,
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
      <div className="flex flex-col gap-6 items-center">
        <DialogTrigger asChild>
          <Button
            type="button"
            variant={"default"}
            className="w-9 h-9 bg-white flex justify-center items-center rounded-full border"
          >
            <Pencil className="w-4 h-4 text-[#EF4444]" />
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent className="[&>button]:hidden">
        <DialogHeader className=" w-full relative border">
          <DialogTitle className="text-[#09090B] font-semibold text-lg mb-5">
            Dishes info
          </DialogTitle>
          <DialogClose asChild>
            <button className="flex justify-center items-center w-8 h-8 rounded-full border hover:bg-gray-300 absolute top-0 right-0">
              <X className="w-3 h-3 text-black" />
            </button>
          </DialogClose>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="dishesName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dish name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name here..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dishCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dish category</FormLabel>
                  <FormControl>
                    {/* <Input placeholder="Category here..." {...field} /> */}
                    <Select {...field} onValueChange={field.onChange}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Appetizer">Appetizer</SelectItem>
                        <SelectItem value="pizzas">pizzas</SelectItem>
                        <SelectItem value="salads">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingredients</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none break-all h-30 w-full"
                      placeholder="Ingredients here..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input placeholder="Price here..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="file"
                        placeholder="Image file"
                        className="absolute w-full h-full top-0 left-0 opacity-0 z-10 cursor-pointer"
                        onChange={(e) => {
                          const files = e.target.files;
                          if (!files) return;
                          const [file] = files;
                          field.onChange(file);
                        }}
                      />
                      {field.value && (
                        <div className="absolute w-full h-full top-0 left-0 rounded-xl overflow-hidden">
                          <Image
                            src={URL.createObjectURL(field.value)}
                            alt="image"
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="w-full h-40 rounded-xl border border-dashed border-[#2563EB33] flex justify-center items-center bg-[#2563EB0D]">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-9 h-9 rounded-full flex justify-center items-center bg-white">
                            <ImageIcon className="text-black" />
                          </div>
                          Choose a file or drag & drop it here
                        </div>
                      </div>
                    </div>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" flex justify-between">
              <Button
                type="submit"
                variant={"outline"}
                className="w-9 h-9 border border-red-600"
              >
                <Trash className="w-4 h-4 text-red-600" />
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

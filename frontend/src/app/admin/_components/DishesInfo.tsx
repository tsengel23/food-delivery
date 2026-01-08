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
import { ImageIcon, Pencil, Trash, X } from "lucide-react";

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
import { useEffect, useState } from "react";
import { assert } from "console";
import { api } from "@/lib/axios";

const formSchema = z.object({
  dishesName: z.string(),
  dishCategory: z.string(),
  ingredients: z.string(),
  price: z.string(),
  image: z.instanceof(File).optional(),
});

// type category = {
//   _id: string;
//   name: string;
// };

export const DishesInfo = () => {
  const [categories, setCategories] = useState<category[]>([]);
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  //
  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await api.get<category[]>("/categories");
      setCategories(data);
    };
    fetchCategories();
  }, []);
  //
  return (
    <Dialog>
      <div className="flex flex-col gap-6 items-center">
        <DialogTrigger asChild>
          <Button
            type="button"
            variant={"secondary"}
            className="w-9 h-9 bg-white flex justify-center items-center rounded-full border"
          >
            <Pencil className="w-4 h-4 text-[#EF4444]" strokeWidth={2} />
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent className="[&>button]:hidden ">
        <DialogHeader className=" w-full relative">
          <DialogTitle className="text-[#09090B] font-semibold text-xl mb-5">
            Dishes info
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
            className=" border-red-500"
          >
            <div className="flex flex-col items-end relative border-blue-500">
              <FormField
                control={form.control}
                name="dishesName"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className=" w-full absolute left-0">
                      Dish name
                    </FormLabel>
                    <FormControl className="w-[288px]">
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
                  <FormItem className="mb-6">
                    <FormLabel className=" w-full absolute left-0">
                      Dish category
                    </FormLabel>
                    <FormControl>
                      {/* <Input placeholder="Category here..." {...field} /> */}
                      <Select
                        {...field}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[288px]">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => {
                            return (
                              <SelectItem
                                key={category._id}
                                value={category._id}
                              >
                                {category.name}
                              </SelectItem>
                            );
                          })}
                          {/* <SelectItem value="appetizer">Appetizers</SelectItem>
                          <SelectItem value="pizzas">Pizzas</SelectItem>
                          <SelectItem value="salads">Salads</SelectItem>
                          <SelectItem value="main dishs">
                            Main dishes
                          </SelectItem> */}
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
                  <FormItem className="mb-6">
                    <FormLabel className=" w-full absolute left-0">
                      Ingredients
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none break-all h-30 w-[288px]"
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
                  <FormItem className="mb-6">
                    <FormLabel className=" w-full absolute left-0">
                      Price
                    </FormLabel>
                    <FormControl className="w-[288px]">
                      <Input
                        type="number"
                        min={0}
                        step={0.01}
                        placeholder="Price here..."
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
                name="image"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className=" w-full absolute left-0">
                      Image
                    </FormLabel>
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
                        <div className="  aspect-[288/116] h-[116px] rounded-xl border border-dashed border-[#2563EB33] flex justify-center items-center bg-[#2563EB0D]">
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-9 h-9 rounded-full  border flex justify-center items-center bg-white">
                              <ImageIcon className=" w-4 h-4 text-black" />
                            </div>
                            <p className="font-normal text-sm">
                              Choose a file or drag & drop it here
                            </p>
                          </div>
                        </div>
                      </div>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className=" flex justify-between">
              <Button
                onClick={() => {
                  form.reset();
                  console.clear();
                }}
                type="button"
                variant={"outline"}
                className="w-9 h-9 border border-red-600"
              >
                <Trash className="w-4 h-4 text-red-600" />
              </Button>
              <Button variant={"default"} type="submit">
                Save changes
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

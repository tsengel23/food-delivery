

"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
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
import { api } from "@/lib/axios";
import Image from "next/image";
import { ImageIcon, Plus, Upload, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const foodFormSchema = z.object({
  name: z.string().min(2, {
    message: "Food name must be at least 2 characters",
  }),
  // foodPrice: z.coerce.number().min(0, "Price cannot be negative"),
  price: z.string().refine(
    (val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num > 0;
    },
    {
      message: "Price must be a valid positive number.",
    },
  ),
  image: z.string().min(1, {
    message: "Image is required.",
  }),
  ingredients: z.string().min(5, {
    message: "Ingredients must be at least 5 characters.",
  }),
  categoryId: z.string().min(1, {
    message: "Please select a category.",
  }),
});

type FoodFormValues = z.infer<typeof foodFormSchema>;

type Category = {
  _id: string;
  name: string;
};

type AddNewDish = {
  title: string;
  defaultCategoryId: string;
  onCreated: (food: food) => void; // дараа type хийж болно
};

export const AddNewDish = ({
  title,
  defaultCategoryId,
  onCreated,
}: AddNewDish) => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<FoodFormValues>({
    resolver: zodResolver(foodFormSchema),
    defaultValues: {
      name: "",
      price: "",
      ingredients: "",
      image: "",
      categoryId: defaultCategoryId || "",
    },
  });

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const response = await fetch(
        `/api/upload?filename=${encodeURIComponent(file.name)}`,
        {
          method: "POST",
          body: file,
        },
      );

      if (!response.ok) {
        const error = await response.json();
        console.error("Upload error:", error);
        alert(`Upload failed: ${error.details || error.error}`);
        return;
      }

      const blob = await response.json();
      setUploadedImageUrl(blob.url);
      form.setValue("image", blob.url);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = () => {
    setUploadedImageUrl("");
    form.setValue("image", "");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = async (values: FoodFormValues) => {
    toast.success("New dish is being added to the menu");
    const { data: createdFood } = await api.post<food>("/foods/create", {
      name: values.name,
      price: parseFloat(values.price),
      ingredients: values.ingredients,
      image: values.image,
      categoryIds: [values.categoryId],
    });
    console.log("createdFood:", createdFood);

    onCreated(createdFood);
    form.reset();
    setUploadedImageUrl("");
    setOpen(false);
  };

  const fetchCategories = async () => {
    const { data } = await api.get<Category[]>("/categories");
    setCategories(data);
  };

 
  useEffect(() => {
    if (!open) return; // dialog хаалттай үед битгий тат
    fetchCategories();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    if (!defaultCategoryId) return;

    form.setValue("categoryId", defaultCategoryId, { shouldValidate: true });
  }, [open, defaultCategoryId, categories.length]);

 
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="border border-dashed  border-[#EF4444] rounded-xl flex justify-center items-center aspect-[271/241] h-[241px] ">
        <div className="flex flex-col gap-6 items-center">
          <DialogTrigger asChild>
            <Button
              type="button"
              variant={"destructive"}
              className="w-9 h-9 bg-[#EF4444] flex justify-center items-center rounded-full"
            >
              <Plus className="w-4 h-4 text-white" />
            </Button>
          </DialogTrigger>
          <p className="w-[154px] text-center text-[#18181B] text-sm font-medium">
            Add new Dish to <span>{title}</span>
          </p>
        </div>
      </div>

      <DialogContent className="flex flex-col [&>button]:hidden ">
        <DialogHeader className="relative w-full ">
          <DialogTitle className=" text-[#09090B] font-semibold text-lg mb-5">
            Add new Dish to {title}
          </DialogTitle>
          <DialogClose asChild>
            <button className="flex justify-center items-center w-8 h-8 rounded-full border hover:bg-gray-300 absolute top-0 right-0 ">
              <X className="w-3 h-3 text-black" />
            </button>
          </DialogClose>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" border-green-500 w-full flex flex-col items-end gap-6 relative"
          >
            <div className="w-full flex gap-6 justify-between">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food name</FormLabel>
                    <FormControl>
                      <Input placeholder="Type food name" {...field} />
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
                    <FormLabel>Food price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        step={0.01}
                        placeholder="Enter price..."
                        {...field}
                        // value={field.value || ""}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category._id} value={category._id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full">
              <FormField
                control={form.control}
                name="ingredients"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ingredients</FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none break-all h-30 w-full overflow-y-hidden"
                        placeholder="List ingredients..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col w-full">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food image</FormLabel>
                    <FormControl>
                      <div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        {uploadedImageUrl ? (
                          <div className="relative border-2 border-gray-300 rounded-lg overflow-hidden">
                            <Image
                              src={uploadedImageUrl}
                              alt="Uploaded food"
                              width={400}
                              height={300}
                              className="w-full h-48 object-cover"
                            />
                            <button
                              type="button"
                              onClick={removeImage}
                              className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <label
                            htmlFor="file-upload"
                            className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center hover:border-gray-400 transition-colors cursor-pointer"
                          >
                            <Upload className="w-8 h-8 text-gray-400 mb-3" />
                            <p className="text-sm text-gray-600">
                              {isUploading
                                ? "Uploading..."
                                : "Choose a file or drag & drop it here"}
                            </p>
                          </label>
                        )}
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              variant={"destructive"}
              disabled={isUploading}
              type="submit"
              className="w-20"
            >
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

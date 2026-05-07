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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil, Trash, Upload, X } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { api } from "@/lib/axios";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Food name must be at least 2 characters"),
  categoryId: z.string().min(1, "Please select a category"),
  ingredients: z.string().min(5, "Ingredients must be at least 5 characters"),
  price: z.string().refine(
    (val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0,
    { message: "Price must be a valid positive number" },
  ),
  image: z.string().min(1, "Image is required"),
});

type FormValues = z.infer<typeof formSchema>;

type DishesInfoProps = {
  food: food;
  onUpdated: (updated: food) => void;
  onDeleted: (id: string) => void;
};

export const DishesInfo = ({ food, onUpdated, onDeleted }: DishesInfoProps) => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<category[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(food.image);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // categoryIds нь populate хийгдсэн объект массив байдаг
  const firstCategoryId = (food.categoryIds as category[])?.[0]?._id ?? "";

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: food.name,
      categoryId: firstCategoryId,
      ingredients: food.ingredients,
      price: String(food.price),
      image: food.image,
    },
  });

  // Dialog нээхэд categories татаж, формыг одоогийн өгөгдлөөр дүүргэнэ
  useEffect(() => {
    if (!open) return;

    api.get<category[]>("/categories").then(({ data }) => setCategories(data));

    const catId = (food.categoryIds as category[])?.[0]?._id ?? "";
    form.reset({
      name: food.name,
      categoryId: catId,
      ingredients: food.ingredients,
      price: String(food.price),
      image: food.image,
    });
    setPreviewUrl(food.image);
  }, [open]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const res = await fetch(
        `/api/upload?filename=${encodeURIComponent(file.name)}`,
        { method: "POST", body: file },
      );
      const blob = await res.json();
      setPreviewUrl(blob.url);
      form.setValue("image", blob.url);
    } catch {
      toast.error("Image upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = async (values: FormValues) => {
    try {
      const { data: updated } = await api.put<food>(`/foods/${food._id}`, {
        name: values.name,
        price: parseFloat(values.price),
        ingredients: values.ingredients,
        image: values.image,
        categoryIds: [values.categoryId],
      });
      onUpdated(updated);
      toast.success("Dish updated");
      setOpen(false);
    } catch {
      toast.error("Failed to update dish");
    }
  };

  const handleDelete = async () => {
    if (!confirm(`"${food.name}" хоолыг устгах уу?`)) return;
    try {
      await api.delete(`/foods/${food._id}`);
      onDeleted(food._id);
      toast.success("Dish deleted");
      setOpen(false);
    } catch {
      toast.error("Failed to delete dish");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="secondary"
          className="w-9 h-9 bg-white flex justify-center items-center rounded-full border"
        >
          <Pencil className="w-4 h-4 text-[#EF4444]" strokeWidth={2} />
        </Button>
      </DialogTrigger>

      <DialogContent className="[&>button]:hidden">
        <DialogHeader className="w-full relative">
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
                name="name"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="w-full absolute left-0">
                      Dish name
                    </FormLabel>
                    <FormControl className="w-[288px]">
                      <Input placeholder="Name here..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="w-full absolute left-0">
                      Dish category
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-[288px]">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat._id} value={cat._id}>
                            {cat.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ingredients"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="w-full absolute left-0">
                      Ingredients
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none break-all h-30 w-[288px]"
                        placeholder="Ingredients here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="w-full absolute left-0">
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={() => (
                  <FormItem className="mb-6">
                    <FormLabel className="w-full absolute left-0">
                      Image
                    </FormLabel>
                    <FormControl>
                      <div className="w-[288px]">
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="edit-file-upload"
                        />
                        {previewUrl ? (
                          <div className="relative border-2 border-gray-300 rounded-lg overflow-hidden">
                            <Image
                              src={previewUrl}
                              alt="Food image"
                              width={288}
                              height={116}
                              className="w-full h-[116px] object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setPreviewUrl("");
                                form.setValue("image", "");
                                if (fileInputRef.current)
                                  fileInputRef.current.value = "";
                              }}
                              className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <label
                            htmlFor="edit-file-upload"
                            className="h-[116px] rounded-xl border border-dashed border-[#2563EB33] flex flex-col justify-center items-center bg-[#2563EB0D] cursor-pointer gap-2"
                          >
                            <Upload className="w-6 h-6 text-gray-400" />
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

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                className="w-9 h-9 border border-red-600"
                onClick={handleDelete}
              >
                <Trash className="w-4 h-4 text-red-600" />
              </Button>
              <Button variant="default" type="submit" disabled={isUploading}>
                Save changes
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

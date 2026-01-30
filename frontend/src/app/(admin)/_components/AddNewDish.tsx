// "use client";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { positive, z } from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@radix-ui/react-dropdown-menu";
// import Image from "next/image";
// import { ImageIcon, Plus, X } from "lucide-react";

// const formSchema = z.object({
//   foodName: z.string(),
//   // foodPrice: z.coerce.number().min(0, "Price cannot be negative"),
//   foodPrice: z.string(),

//   foodRecepies: z.string().min(1, "Ingredients required"),
//   foodImage: z.instanceof(File).optional(),
//   // foodImage: z.file("file upload ?!").optional(),
// });

// type AddNewDish = {
//   title: string;
// };

// export const AddNewDish = ({ title }: AddNewDish) => {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       foodName: "",
//       foodPrice: "",

//       foodRecepies: "",
//       foodImage: undefined,
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values);
//   }

//   return (
//     <Dialog>
//       <div className="border border-dashed  border-[#EF4444] rounded-xl flex justify-center items-center aspect-[370/241] h-[241px] ">
//         <div className="flex flex-col gap-6 items-center">
//           <DialogTrigger asChild>
//             <Button
//               type="button"
//               variant={"destructive"}
//               className="w-9 h-9 bg-[#EF4444] flex justify-center items-center rounded-full"
//             >
//               <Plus className="w-4 h-4 text-white" />
//             </Button>
//           </DialogTrigger>
//           <p className="w-[154px] text-center text-[#18181B] text-sm font-medium">
//             Add new Dish to <span>{title}</span>
//           </p>
//         </div>
//       </div>

//       <DialogContent className="flex flex-col [&>button]:hidden ">
//         <DialogHeader className="relative w-full ">
//           <DialogTitle className=" text-[#09090B] font-semibold text-lg mb-5">
//             Add new Dish to {title}
//           </DialogTitle>
//           <DialogClose asChild>
//             <button className="flex justify-center items-center w-8 h-8 rounded-full border hover:bg-gray-300 absolute top-0 right-0 ">
//               <X className="w-3 h-3 text-black" />
//             </button>
//           </DialogClose>
//         </DialogHeader>

//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className=" border-green-500 w-full flex flex-col items-end gap-6 relative"
//           >
//             <div className="w-full flex gap-6 justify-between">
//               <FormField
//                 control={form.control}
//                 name="foodName"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Food name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Type food name" {...field} />
//                     </FormControl>
//                     <FormDescription></FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="foodPrice"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Food price</FormLabel>
//                     <FormControl>
//                       <Input
//                         type="number"
//                         min={0}
//                         step={0.01}
//                         placeholder="Enter price..."
//                         {...field}
//                         // value={field.value || ""}
//                       />
//                     </FormControl>
//                     <FormDescription></FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-full">
//               <FormField
//                 control={form.control}
//                 name="foodRecepies"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Ingredients</FormLabel>
//                     <FormControl>
//                       <Textarea
//                         className="resize-none break-all h-30 w-full overflow-y-hidden"
//                         placeholder="List ingredients..."
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormDescription></FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="flex flex-col w-full">
//               <FormField
//                 control={form.control}
//                 name="foodImage"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Food image</FormLabel>
//                     <FormControl>
//                       <div className="relative">
//                         <Input
//                           // ref={fileInputRef}
//                           // type="file"
//                           // accept="image/*"
//                           // className="hidden"
//                           // placeholder="Upload image ..."
//                           // onChange={handleFileUpload}
//                           // id="file-upload"
//                           type="file"
//                           placeholder="image file"
//                           className="absolute w-full h-full top-0 left-0 opacity-0 z-10 cursor-pointer"
//                           onChange={(e) => {
//                             const files = e.target.files;
//                             if (!files) return;
//                             const [file] = files;
//                             field.onChange(file);
//                           }}
//                         />
//                         {field.value && (
//                           <div className="absolute w-full h-full top-0 left-0 rounded-xl overflow-hidden">
//                             <Image
//                               src={URL.createObjectURL(field.value)}
//                               alt="Profile"
//                               fill
//                               className="object-cover"
//                             />
//                           </div>
//                         )}
//                         <div className="w-full h-40 rounded-xl border border-dashed border-[#2563EB33] flex justify-center items-center bg-[#2563EB0D]">
//                           <div className="flex flex-col items-center gap-2">
//                             <div className="w-9 h-9 rounded-full flex justify-center items-center bg-white">
//                               <ImageIcon className="text-black" />
//                             </div>
//                             Choose a file or drag & drop it here
//                           </div>
//                         </div>
//                       </div>
//                     </FormControl>
//                     <FormDescription></FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <Button variant={"destructive"} type="submit" className="w-20">
//               Submit
//             </Button>
//           </form>
//         </Form>
//       </DialogContent>
//     </Dialog>
//   );
// };

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
};

export const AddNewDish = ({ title }: AddNewDish) => {
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
      categoryId: "",
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
    await api.post("/foods/create", {
      name: values.name,
      price: parseFloat(values.price),
      ingredients: values.ingredients,
      image: values.image,
      categoryIds: [values.categoryId],
    });

    form.reset();
    setUploadedImageUrl("");
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await api.get<Category[]>("/categories");
      setCategories(data);
    };

    fetchCategories();
  }, []);

  console.log(form.formState.errors);
  return (
    <Dialog>
      <div className="border border-dashed  border-[#EF4444] rounded-xl flex justify-center items-center aspect-[370/241] h-[241px] ">
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
              NikoN
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

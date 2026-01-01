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
// import { z } from "zod";

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
//   foodPrice: z.number(),
//   //   foodPrice: z.coerce.number(),
//   foodImage: z.file("file upload ?!").optional(),
//   //   foodImage: z.instanceof(File).optional(),
// });

// type AddNewDish = {
//   title: string;
// };

// export const AddNewDish = ({ title }: AddNewDish) => {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       foodName: "",
//       foodPrice: 1,
//       //   foodPrice: "" as any,
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values);
//   }

//   return (
//     <Dialog>
//       <div className="flex flex-col gap-6 items-center">
//         <DialogTrigger asChild>
//           <Button
//             type="button"
//             variant={"destructive"}
//             className="w-9 h-9 bg-[#EF4444] flex justify-center items-center rounded-full"
//           >
//             <Plus className="w-4 h-4 text-white" />
//           </Button>
//         </DialogTrigger>
//         <p className="w-[154px] text-center text-[#18181B] text-sm font-medium">
//           Add new Dish to <span>{title}</span>
//         </p>
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
//                         placeholder="Enter price..."
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
//               <Label className="mb-2 text-[#09090B] text-sm font-medium">
//                 Ingredients
//               </Label>
//               <Textarea
//                 placeholder="List ingredients..."
//                 maxLength={500}
//                 className="resize-none h-25 break-all overflow-y-hidden"
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
//             <Button type="submit" className="w-20">
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
import { Label } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { ImageIcon, Plus, X } from "lucide-react";

const formSchema = z.object({
  foodName: z.string(),
  foodPrice: z.string(),

  foodRecepies: z.string(),
  // foodImage: z.file("file upload ?!").optional(),
  foodImage: z.instanceof(File).optional(),
});

type AddNewDish = {
  title: string;
};

export const AddNewDish = ({ title }: AddNewDish) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "",
      foodPrice: "",

      foodRecepies: "",
      foodImage: undefined,
    },
  });

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
                name="foodName"
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
                name="foodPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
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
                name="foodRecepies"
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
                name="foodImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food image</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="file"
                          placeholder="image file"
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
                              alt="Profile"
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
            </div>
            <Button type="submit" className="w-20">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

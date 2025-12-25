"use client";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight, MapPin, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />;
}

export const DeliveryAddress = () => {
  const [address, setAddress] = useState("");
  //

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setAddress(e.target.value);
  // };

  // const handleClear = () => {
  //   setAddress("");
  // };

  //
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
      <DialogContent className="[&>button]:hidden">
        <DialogHeader className="flex flex-col gap-6 relative">
          <DialogTitle className="text-2xl font-semibold text-[#09090B] mt-1">
            Please write your delivery address!
          </DialogTitle>
          <div className="relative">
            <Textarea
              placeholder="Please share your complete address"
              className="w-full min-w-0 resize-none overflow-hidden break-all"
            />
            {/* <Input
              value={address}
              // onChange={handleChange}
              onChange={(el) => setAddress(el.target.value)}
              type="text"
              placeholder="Please share your complete address"
              className=""
            /> */}
            {address && (
              <Button
                type="button"
                // onClick={handleClear}
                onClick={() => setAddress("")}
                variant={"ghost"}
                className="absolute top-0 rounded-full p-0 hover:bg-transparent right-2"
              >
                <X />
              </Button>
            )}
          </div>
          <DialogClose className="absolute top-0 right-0">
            <div className="w-10 h-10  rounded-full bg-[#F4F4F5] flex justify-center items-center hover:bg-gray-300">
              <X className="w-4 h-4" />
            </div>
          </DialogClose>
        </DialogHeader>
        <div className="flex gap-4 justify-end mt-12">
          <Button type="button" variant={"outline"}>
            Cancel
          </Button>
          <Button type="submit" variant={"default"}>
            Deliver Here
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// "use client";
// import { useRef, useState } from "react";

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// import { ChevronRight, MapPin, X } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";

// const formSchema = z.object({
//   address1: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   address2: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   address3: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// });

// export const DeliveryAddress = () => {
//   const [address, setAddress] = useState("");
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       address1: "",
//       address2: "",
//       address3: "",
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values);
//   }

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <div className=" flex gap-2  items-center justify-center bg-white rounded-full hover:bg-gray-200 transition py-2 pl-3 pr-9 relative">
//           <div className="flex gap-2 items-center">
//             <MapPin className="w-5 h-5 text-[#EF4444]" />
//             <span className="text-[#EF4444] text-xs font-normal">
//               Delivery address :
//             </span>
//           </div>
//           <p className="text-[#71717A] text-xs font-normal">Add Location</p>
//         </div>
//       </DialogTrigger>
//       <DropdownMenu>
//         <DropdownMenuTrigger>
//           <div className="w-7 h-7 border-black rounded-full absolute top-5 right-[200] flex justify-center items-center hover:bg-gray-200">
//             <ChevronRight className="text-black " />
//           </div>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="">
//           <FormField
//             control={form.control}
//             name="address1"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Username</FormLabel>
//                 <FormControl>
//                   <Input placeholder="shadcn" {...field} />
//                 </FormControl>
//                 <FormDescription>
//                   This is your public display name.
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="address2"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Username</FormLabel>
//                 <FormControl>
//                   <Input placeholder="shadcn" {...field} />
//                 </FormControl>
//                 <FormDescription>
//                   This is your public display name.
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="address3"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Username</FormLabel>
//                 <FormControl>
//                   <Input placeholder="shadcn" {...field} />
//                 </FormControl>
//                 <FormDescription>
//                   This is your public display name.
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </DropdownMenuContent>
//       </DropdownMenu>
//       <DialogContent className="[&>button]:hidden">
//         <DialogHeader className="flex flex-col gap-6 relative">
//           <DialogTitle className="text-2xl font-semibold text-[#09090B] mt-1">
//             Please write your delivery address!
//           </DialogTitle>
//           <div className="relative">
//             <Input
//               value={address}
//               // onChange={handleChange}
//               onChange={(el) => setAddress(el.target.value)}
//               type="text"
//               placeholder="Please share your complete address"
//               className=""
//             />
//             {address && (
//               <Button
//                 type="button"
//                 // onClick={handleClear}
//                 onClick={() => setAddress("")}
//                 variant={"ghost"}
//                 className="absolute top-0 rounded-full p-0 hover:bg-transparent right-2"
//               >
//                 <X />
//               </Button>
//             )}
//           </div>
//           <DialogClose className="absolute top-0 right-0">
//             <div className="w-10 h-10  rounded-full bg-[#F4F4F5] flex justify-center items-center hover:bg-gray-300">
//               <X className="w-4 h-4" />
//             </div>
//           </DialogClose>
//         </DialogHeader>
//         <div className="flex gap-4 justify-end mt-12">
//           <Button type="button" variant={"outline"}>
//             Cancel
//           </Button>
//           <Button>Deliver Here</Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

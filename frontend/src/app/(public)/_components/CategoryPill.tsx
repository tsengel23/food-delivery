"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/axios";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

type CategoryPillProps = {
  category: category;
};

export const CategoryPill = ({ category }: CategoryPillProps) => {
  // const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getFoodCount = async () => {
      const { data } = await api.get(`/foods/category/count/${category._id}`);
      setCount(data.count);
    };

    getFoodCount();
  }, []);

  return (
    <div className="flex justify-center items-center border rounded-full border-red-500 px-0.5 hover:bg-green-100 hover:border-green-400">
      <Button
        // onClick={() => setSelected(true)}
        variant={"ghost"}
        className={`border border-white rounded-full hover:bg-green-100 hover:border-green-100 `}
      >
        {category.name}
        <Badge className="bg-black text-white w-fit h-4 flex justify-center items-center hover:bg-white hover:text-black">
          {count}
        </Badge>
      </Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            className="w-7 h-7 border border-red-400 rounded-full hover:bg-red-100"
          >
            <Trash2 className="w-3 h-3 text-red-400" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                await api.delete(`categories/${category._id}`);
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

// "use client";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// type CategoryPill = {
//   name: string;
//   count: number;
//   active: boolean;
// };

// export const CategoryPill = ({ name, count, active }: CategoryPill) => {
//   return (
//     <Button
//       variant={"outline"}
//       className={`${
//         active ? "border-green-600 bg-green-200" : "border-black"
//       }  rounded-full hover:bg-green-100`}
//     >
//       {name}
//       <Badge className="bg-black text-white w-fit h-[16px] flex justify-center items-center">
//         {count}
//       </Badge>
//     </Button>
//   );
// };

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
  isActive: boolean;
  onSelect: () => void;
  onDelete: () => void;
};

export const CategoryPill = ({
  category,
  isActive,
  onSelect,
  onDelete,
}: CategoryPillProps) => {
  // const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getFoodCount = async () => {
      const { data } = await api.get(`/foods/category/count/${category._id}`);
      setCount(data.count);
    };

    getFoodCount();
  }, [category._id]);

  return (
    // <div className={["flex justify-center items-center border rounded-full border-red-500 px-0.5 transition hover:bg-green-100 hover:border-green-400",
    <div
      className={[
        "flex justify-center items-center border rounded-full  px-0.5 transition ",
        isActive
          ? "bg-green-100 border-green-400"
          : "border-red-500 hover:bg-green-100 hover:border-green-400",
      ].join(" ")}
    >
      <Button
        onClick={onSelect}
        variant={"ghost"}
        className={`border border-white rounded-full hover:bg-green-100 hover:border-green-100 group`}
      >
        {category.name}
        <Badge className="border border-black bg-black text-white w-fit h-4 flex justify-center items-center group-hover:bg-white group-hover:text-black">
          {count}
        </Badge>
      </Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            className="w-7 h-7 border border-red-400 rounded-full hover:bg-red-100"
            onClick={(e) => e.stopPropagation()} //  ✅ энэ байхгүй бол delete дарахад pill select болчихдог
          >
            <Trash2 className="w-3 h-3 text-red-400" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent onClick={(e) => e.stopPropagation()}>
          <AlertDialogHeader>
            <AlertDialogTitle>Та үнэхээр итгэлтэй байна уу?</AlertDialogTitle>
            <AlertDialogDescription>
              Энэ үйлдлийг буцаах боломжгүй. Уг хоолны категорийг бүрмөсөн
              устгах бөгөөд түүнд хамаарах бүх өгөгдөл серверээс устах болно.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={onDelete}
              // onClick={async () => {
              //   await api.delete(`categories/${category._id}`);
              // }}
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

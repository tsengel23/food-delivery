"use client";

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
import { useContext } from "react";
import { StepContext } from "@/app/Login/page";
import { FormHeader } from "./FormHeader";
import { ChevronLeftIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { FormFooter } from "./FormFooter";
import { motion } from "framer-motion";

const formSchema = z.object({
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  passwordConfirm: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const CreateNewPassword = () => {
  const { setStep } = useContext(StepContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setStep(4);
  }
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      style={{
        // position: "absolute",
        width: "70%",
      }}
    >
      <div className="w-104 h-fit flex flex-col gap-6  border-red-500">
        <Button
          onClick={() => setStep(3)}
          variant={"outline"}
          className="w-9 h-9 "
        >
          <ChevronLeftIcon />
        </Button>
        <FormHeader
          title={"Create new password"}
          text={
            "Set a new password with a combination of letters and numbers for better security."
          }
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col gap-4  border-green-400">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Confirm" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-[#71717A] text-sm font-normal flex justify-start h-5 gap-2 ">
                <Checkbox /> Show password
              </div>
            </div>

            <Button
              variant={"default"}
              type="submit"
              className="w-full font-medium text-sm"
              onClick={() => setStep(1)}
            >
              Create password
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

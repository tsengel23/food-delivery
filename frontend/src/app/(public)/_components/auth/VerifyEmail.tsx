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
import { FormFooter } from "./FormFooter";
import { motion } from "framer-motion";

const formSchema = z.object({
  // email: z.string().min(2, {
  //   message: "Username must be at least 2 characters.",
  // }),
  // password: z.string().min(2, {
  //   message: "Username must be at least 2 characters.",
  // }),
});

export const VerifyEmail = () => {
  const { setStep } = useContext(StepContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // email: "",
      // password: "",
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
          onClick={() => setStep(2)}
          variant={"outline"}
          className="w-9 h-9 "
        >
          <ChevronLeftIcon />
        </Button>
        {/* <FormHeader
          title={"Please verify Your Email"}
          text={`We just sent an email to ${(
            <span className="bg-red-300"> Test@gmail.com.</span>
          )} Click the link in the email to verify your account.`}
        /> */}
        <div className="flex flex-col gap-1  border-blue-500">
          <h1 className="font-inter text-[#09090B] text-2xl font-semibold ">
            Please verify Your Email
          </h1>
          <p className="font-inter text-[#71717A] text-base font-normal ">
            We just sent an email to
            <span className="text-black"> Test@gmail.com</span>.Click the link
            in the email to verify your account.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* <div onClick={() => setStep(2)}>Forgot password?</div> */}
            <Button
              variant={"default"}
              type="submit"
              className="w-full font-medium text-sm"
            >
              Resend email
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

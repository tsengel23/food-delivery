"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { set, z } from "zod";

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
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .min(5, {
      message: "Email must be at least 5 characters.",
    })
    .max(50, {
      message: "Email is too long characters",
    })
    .toLowerCase()
    .email("Need correct Email address"),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(25, {
      message: "Password is too heavy",
    })
    .regex(/[a-z]/, "Contains at least 1 lowercase letter ")
    .regex(/[A-Z]/, "Contains at least 1 uppercase letter")
    .regex(/[0-9]/, "Contains at least 1 number")
    .regex(/[!@#$%^&*]/, "Contains at least 1 special character")
    .refine((val) => !val.includes("123"), "It is a too simple way"),
});

export const LoginStep = () => {
  const router = useRouter();
  const { setStep } = useContext(StepContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.replace("/");
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
          // onClick={() => router.push("/SignUp")}
          type="button"
          variant={"outline"}
          className="w-9 h-9 "
        >
          <ChevronLeftIcon />
        </Button>
        <FormHeader
          title={"Log in"}
          text={"Log in to enjoy your favorite dishes."}
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col gap-4  border-green-400">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
              <Button
                onClick={() => setStep(2)}
                className="text-[#18181B] text-sm font-normal flex justify-start p-0 h-5 "
                variant={"link"}
              >
                Forgot password ?
              </Button>
            </div>
            {/* <div onClick={() => setStep(2)}>Forgot password?</div> */}
            <Button
              variant={"default"}
              type="submit"
              className="w-full font-medium text-sm"
            >
              Let's Go
            </Button>
            <FormFooter
              text={"Don’t have an account?"}
              step={"Sign up"}
              href={"/SignUp"}
            />
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { boolean, z } from "zod";

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
import { useContext, useState } from "react";
import { StepContext } from "@/app/sign-up/page";
import { FormHeader } from "./FormHeader";
import { ChevronLeftIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { FormFooter } from "./FormFooter";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .max(25, {
        message: "Password is too heavy",
      })
      .regex(/[a-z]/, "Contains at least 1 lowercase letter")
      .regex(/[A-Z]/, "Contains at least 1 uppercase letter")
      .regex(/[0-9]/, "Contains at least 1 number")
      .regex(/[!@##$%^&*]/, "Contains at least 1 special character")
      .refine((val) => !val.includes("123"), "It is a too simple way"),
    passwordConfirm: z.string().min(8),
  })
  .refine((values) => values.password === values.passwordConfirm, {
    message: "Password is not matching",
    path: ["passwordConfirm"],
  });

export const CreateStrongPassword = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const router = useRouter();
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
    router.replace("/login");
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
          onClick={() => setStep(1)}
          type="button"
          variant={"outline"}
          className="w-9 h-9 "
        >
          <ChevronLeftIcon />
        </Button>
        <FormHeader
          title={"Create a strong password"}
          text={"Create a strong password with letters, numbers."}
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
                      <Input
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                      />
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
                      <Input
                        type={showPass ? "text" : "password"}
                        placeholder="Confirm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-[#71717A] text-sm font-normal flex justify-start h-5 gap-2 ">
                <Checkbox
                  checked={showPass}
                  onCheckedChange={(checked) => setShowPass(Boolean(checked))}
                />{" "}
                Show password
              </div>
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
              text={"Already have an account?"}
              step={"Log in"}
              href={"/login"}
            />
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

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

const formSchema = z.object({
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  passwordConfirm: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const CreateStrongPassword = () => {
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
    setStep(2);
  }
  return (
    <div className="w-104 h-fit flex flex-col gap-6  border-red-500">
      <Button variant={"outline"} className="w-9 h-9 ">
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
          {/* <div onClick={() => setStep(2)}>Forgot password?</div> */}
          <Button
            variant={"default"}
            type="submit"
            className="w-full font-medium text-sm"
          >
            Let's Go
          </Button>
          <FormFooter text={"Already have an account?"} step={"Log in"} />
        </form>
      </Form>
    </div>
  );
};

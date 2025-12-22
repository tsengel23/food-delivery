"use client";
import { Dispatch, SetStateAction, useState, createContext } from "react";

import { CreateYourAccount } from "../(public)/_components/auth/CreateYourAccount";
import { CreateStrongPassword } from "../(public)/_components/auth/CreateStrongPassword";

import { AnimatePresence, motion } from "framer-motion";

type StepContextType = {
  setStep: Dispatch<SetStateAction<number>>;
};

export const StepContext = createContext<StepContextType>(
  {} as StepContextType
);
export default function SignUp() {
  const [step, setStep] = useState<number>(1);
  return (
    <StepContext.Provider value={{ setStep }}>
      <AnimatePresence>
        <div className="w-screen h-screen pl-25 p-5 border-2 border-red-500 flex gap-12 ">
          <div className="flex items-center">
            {step == 1 && <CreateYourAccount />}
            {step == 2 && <CreateStrongPassword />}
          </div>
          <div className=" flex-1 relative  ">
            <img
              className=" absolute inset-0 w-full h-full object-cover rounded-4xl"
              src="./kai-pilger-tL92LY152Sk-unsplash 1.png"
            />
          </div>
        </div>
      </AnimatePresence>
    </StepContext.Provider>
  );
}

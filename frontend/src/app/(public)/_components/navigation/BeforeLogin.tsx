import { LogEnter } from "./LogEnter";
import { SignUp } from "./SignUp";

export const BeforeLogin = () => {
  return (
    <div className=" flex gap-3 items-center">
      <SignUp />
      <LogEnter />
    </div>
  );
};

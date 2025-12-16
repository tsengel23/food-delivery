type FormFooter = {
  text: string;
  step: string;
};

export const FormFooter = ({ text, step }: FormFooter) => {
  return (
    <div className="flex gap-3 justify-center">
      <p className="text-[#71717A] text-base font-normal">{text}</p>
      <span className="text-[#2563EB] text-base font-normal cursor-pointer">
        {step}
      </span>
    </div>
  );
};
// span-iig linkeer wrap hiih uu?

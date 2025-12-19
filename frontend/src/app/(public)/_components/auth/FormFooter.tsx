import Link from "next/link";

type FormFooter = {
  text: string;
  step: string;
  href: string;
};

export const FormFooter = ({ text, step, href }: FormFooter) => {
  return (
    <div className="flex gap-3 justify-center">
      <p className="text-[#71717A] text-base font-normal">{text}</p>
      <Link href={href}>
        <span className="text-[#2563EB] text-base font-normal cursor-pointer">
          {step}
        </span>
      </Link>
    </div>
  );
};
// span-iig linkeer wrap hiih uu?

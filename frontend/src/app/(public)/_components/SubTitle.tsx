import Link from "next/link";

type SubTitle = {
  text: string;
  // href: string;
};

export const SubTitle = ({ text }: SubTitle) => {
  return (
    // <Link href={href}>
    <h1 className="font-semibold text-white text-3xl">{text}</h1>
    // </Link>
  );
};

type SubTitle = {
  text: string;
};

export const SubTitle = ({ text }: SubTitle) => {
  return <h1 className="font-semibold text-white text-3xl">{text}</h1>;
};

type CartAndOrder = {
  title: string;
  text: string;
};

export const CartAndOrder = ({ title, text }: CartAndOrder) => {
  const image = "logo3.png";
  return (
    <div className="rounded-xl border bg-[#F4F4F5] flex flex-col items-center gap-1 aspect-[439/182] h-[182px] mt-5 py-8 px-12">
      <img
        src={image}
        onError={(e) => {
          e.currentTarget.src = "logo3.png";
        }}
        className="w-[60px] h-[50px]"
      />
      <h1 className="font-bold text-base text-[#09090B]">{title}</h1>
      <p className="font-normal text-xs text-[#71717A] text-center">{text}</p>
    </div>
  );
};

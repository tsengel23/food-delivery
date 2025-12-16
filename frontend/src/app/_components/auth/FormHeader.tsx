type FormHearder = {
  title: string;
  text: string;
};

export const FormHeader = ({ title, text }: FormHearder) => {
  return (
    <div className="flex flex-col gap-1  border-blue-500">
      <h1 className="font-inter text-[#09090B] text-2xl font-semibold ">
        {title}
      </h1>
      <p className="font-inter text-[#71717A] text-base font-normal ">{text}</p>
    </div>
  );
};

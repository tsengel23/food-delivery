type Card = {
  image: string;
  title: string;
  overview: string;
  price: string;
};

export const Card = ({ image, title, overview, price }: Card) => {
  return (
    <div className="flex flex-col gap-5 p-4">
      <div className="border border-red-500 rounded-xl">
        <img className=" " />
      </div>
    </div>
  );
};

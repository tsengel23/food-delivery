type Flow = {
  text: string;
  speed?: number;
  repeat?: number | undefined;
  direction: "left" | "right";
  // hideOnMobile?: boolean;
};

export const Flow = ({
  text,
  speed = 23,
  repeat = 6,
  direction = "left",
}: Flow) => {
  const items = Array.from({ length: repeat });
  return (
    <div
      className="flex gap-[34]"
      style={{ animation: `flow-${direction} ${speed}s linear infinite` }}
    >
      {[...items, ...items].map((_, index) => (
        <span key={index} className="font-semibold text-[#FAFAFA] text-3xl">
          {text}
        </span>
      ))}
    </div>
  );
};

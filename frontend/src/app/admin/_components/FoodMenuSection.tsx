import { CategoryPill } from "./CategoryPill";

const foods = [
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "bantan",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "huushuur",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "tsuivan",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
  {
    name: "buuz",
    count: 1,
    active: false,
  },
];

export const FoodMenuSection = () => {
  return (
    <div className="w-full  bg-white border rounded-xl p-6 flex flex-col gap-4  ">
      <h1>Dishes category</h1>
      <div className="flex flex-wrap  gap-3">
        {foods.map((item, index) => {
          return (
            <CategoryPill
              key={index}
              name={item.name}
              count={item.count}
              active={item.active}
            />
          );
        })}
        {/* // <CategoryPill name={"buuuz"} count={12} active={true} /> */}
      </div>
    </div>
  );
};

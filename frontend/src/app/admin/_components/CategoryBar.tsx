import { CategoryPill } from "./CategoryPill";
import { AddNewCategoryButton } from "./AddNewCategoryButton";
const foods = [
  {
    name: "buuz",
    count: 112,
    active: true,
  },
  {
    name: "buuz",
    count: 112,
    active: false,
  },
  {
    name: "bantan",
    count: 1,
    active: true,
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
];

export const CategoryBar = () => {
  return (
    <div className="w-full bg-white border rounded-xl p-6 flex flex-col gap-4  ">
      <h1 className="text-[#09090B] font-semibold text-xl">Dishes category</h1>
      <div className="flex flex-wrap gap-3 w-fit">
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
        <AddNewCategoryButton />
      </div>
    </div>
  );
};

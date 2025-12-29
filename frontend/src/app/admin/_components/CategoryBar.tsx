import { CategoryPill } from "./CategoryPill";

type CategoryBar = {
  categories: Category[];
  activeCategory: string;
  onChange: (id: string) => void;
};

type Category = {
  id: string;
  name: string;
};

export const CategoryBar = ({
  categories,
  activeCategory,
  onChange,
}: CategoryBar) => {
  return (
    <div>
      <CategoryPill
        key={cat.index}
        id={cat.id}
        name={cat.name}
        count={cat.count}
        active={cat.id === activeCategory}
        onSelect={() => onChange(cat.id)}
      />
    </div>
  );
};

type food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
  categotyIds: category[];
};

// type categoryId = {
//   _id: string;
//   name: string;
// };

type category = {
  _id: string;
  name: string;
  // foodCount: number;
};

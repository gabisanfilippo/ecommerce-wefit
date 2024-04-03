export type ProductsList = {
  products: Product[];
};

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

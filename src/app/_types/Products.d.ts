type TProducts = {
  products: TProduct[];
  total: number;
  skip: number;
  limit: number;
};

type TProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

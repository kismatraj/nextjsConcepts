import { getAllProducts } from "@/app/_lib/products";
import ProductList from "./ProductList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products list",
  description: "This is the list of all products page",
};

const SSGPage = () => {
  const promise: Promise<TProducts> = getAllProducts();
  return <ProductList promise={promise} />;
};

export default SSGPage;

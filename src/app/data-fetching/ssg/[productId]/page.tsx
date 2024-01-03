import { getAllProducts, getProductDetails } from "@/app/_lib/products";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type TParams = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params: { productId },
}: TParams): Promise<Metadata> => {
  const promise: Promise<TProduct> = getProductDetails(productId);
  const product = await promise;
  if (!product.id) return { title: "Product not found" };
  return {
    title: `${product.title}`,
    description: `${product.title} details page `,
  };
};

const ProductDetailsPage = async ({ params: { productId } }: TParams) => {
  const promise: Promise<TProduct> = getProductDetails(productId);
  const product = await promise;
  if (!product.id) return notFound();

  return (
    <div>
      <h1 className="font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <div className="flex flex-col md:flex-row overflow-auto gap-4">
        {product.images.map((im, ind) => (
          <Image
            src={im}
            width={400}
            height={400}
            alt={product.title}
            key={ind}
          />
        ))}
      </div>

      <p>{product.rating}</p>
      <p>${product.price}</p>
      <p>{product.discountPercentage}%</p>
    </div>
  );
};

export async function generateStaticParams() {
  const promise: Promise<TProducts> = getAllProducts();
  const { products } = await promise;
  return products.map((p) => ({ productId: p.id.toString() }));
}

export default ProductDetailsPage;

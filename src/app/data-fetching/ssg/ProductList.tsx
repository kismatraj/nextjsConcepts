import Image from "next/image";
import Link from "next/link";

type TProductsProps = {
  promise: Promise<TProducts>;
};

const ProductList = async ({ promise }: TProductsProps) => {
  const { products } = await promise;

  return (
    <div className="flex gap-4 flex-wrap">
      {products.map((p) => (
        <div key={p.id}>
          <Link href={`/data-fetching/ssg/${p.id}`}>
            <h1 className="font-bold border-1">{p.title}</h1>
            <p>{p.brand}</p>
            <Image src={p.thumbnail} width={400} height={400} alt={p.title} />
            <p className="font-bold">${p.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

import { NextResponse } from "next/server";

type TProps = {
  params: {
    productId: string;
  };
};

export async function GET(req: Request, { params: { productId } }: TProps) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  // const data: TProduct = await res.json();
  if (!res.ok) undefined;
  return NextResponse.json(res);
}

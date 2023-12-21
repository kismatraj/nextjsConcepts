import { NextResponse } from "next/server";

type TProps = {
  params: {
    productId: string;
  };
};

export async function GET(req: Request, { params: { productId } }: TProps) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  const data: TProduct = await res.json();
  if (!data) undefined;
  return NextResponse.json(data);
}

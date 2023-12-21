import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) undefined;
  return NextResponse.json(res);
  // const data: TProducts = await res.json();
  // if (!data) undefined;
  // return NextResponse.json(data);
}

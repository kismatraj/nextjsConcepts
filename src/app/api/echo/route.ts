import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  console.log(searchParams);
  const obj = Object.fromEntries(searchParams.entries());

  return NextResponse.json(obj);
}

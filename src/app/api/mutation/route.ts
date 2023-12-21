import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const res = await fetch(`${process.env.baseApiUri}/`);
  return NextResponse.json({ msg: "Test" });
}

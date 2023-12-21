import { NextResponse } from "next/server";

type TFeedback = {
  name?: string;
  email?: string;
  message?: string;
};
export async function POST(req: Request) {
  const feedback: TFeedback = await req.json();
  return NextResponse.json(feedback);
}

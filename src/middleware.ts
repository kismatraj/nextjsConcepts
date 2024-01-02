import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  const allowedOrigins = ["/api/:path*"];
  //   const regex = new RegExp("/api/:.*");
  //   if (regex.test(req.url)) {
  const origin = req.headers.get("origin") as string;
  // console.log(origin);

  if (origin && !allowedOrigins.includes(origin))
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad request",
      headers: { "Content-Type": "text/plain" },
    });

  // console.log(process.env.NODE_ENV);
  // console.log(req.method);
  // console.log(req.url);

  return NextResponse.next();
}
export const config = {
  matcher: ["/api/:path*"],
};

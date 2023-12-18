"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 px-2 bg-gray-400">
      <Link
        href="/"
        style={{ fontWeight: pathname === "/" ? "bold" : "normal" }}
      >
        Home
      </Link>

      <div className="flex flex-col md:flex-row gap-4 py-4 px-2">
        <Link href="/data-fetching/ssr">SSR Data fetching</Link>
        <Link href="/data-fetching/ssg">SSG Data fetching</Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 py-4 px-2">
        <Link href="/mutation">Data mutation</Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 py-4 px-2">
        <Link
          href="/sign-in"
          style={{ fontWeight: pathname === "/sign-in" ? "bold" : "normal" }}
        >
          Sign in
        </Link>
        <Link
          href="/sign-up"
          style={{ fontWeight: pathname === "/sign-up" ? "bold" : "normal" }}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

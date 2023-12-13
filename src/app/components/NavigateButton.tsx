"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type NavigateButtonType = {
  label: string;
  path: string;
  type: "Button" | "Link";
};

const NavigateButton = (input: NavigateButtonType) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(input.path);
  };
  return input.type === "Button" ? (
    <button
      className="px-4 py-2 bg-blue-600 hover:bg-blue-400 rounded-md"
      onClick={handleClick}
    >
      {input.label}
    </button>
  ) : (
    <Link
      href={input.path}
      className="px-4 py-2 hover:underline"
      onClick={handleClick}
    >
      {input.label}
    </Link>
  );
};

export default NavigateButton;

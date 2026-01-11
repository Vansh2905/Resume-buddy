"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path) =>
    pathname === path
      ? "text-blue-100 font-semibold"
      : "text-gray-700 hover:text-blue-100";

  return (
    <nav className="w-full px-8 py-4 shadow-md sticky top-0 z-50 bg-black flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-100">
        <Link href="/">Resume_Buddy</Link>
      </h1>

      {/* Links */}
      <div className="flex gap-6">
        <Link href="/" className={linkStyle("/")}>
          Home
        </Link>
        <Link href="/about" className={linkStyle("/about")}>
          About Us
        </Link>
      </div>
    </nav>
  );
}

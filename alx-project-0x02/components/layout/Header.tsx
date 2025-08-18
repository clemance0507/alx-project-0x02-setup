import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">My Next.js App 🚀</h1>
      <nav className="space-x-4">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
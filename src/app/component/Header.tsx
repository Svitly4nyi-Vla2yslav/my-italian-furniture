import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Italian Furniture
        </Link>
        <ul className="flex space-x-4 ">
          <li className="">
            <Link href="/about" className="text-gray-600 hover:text-primary">
              About
            </Link>
          </li>
          <li className="">
            <Link href="/products" className="text-gray-600 hover:text-primary">
              Products
            </Link>
          </li>
          <li className="">
            <Link
              href="/real-estate"
              className="text-gray-600 hover:text-primary"
            >
              Real Estate
            </Link>
          </li>
          <li className="">
            <Link href="/contact" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

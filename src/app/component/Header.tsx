import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-transparent  shadow-md py-4 hover:backdrop-brightness-75
     active:backdrop-brightness-75
     ">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Italian Furniture
        </Link>
        <ul className="flex space-x-4 ">
        <li className="">
            <Link href="/" className="text-primary hover:text-gray-600 ">
              Home
            </Link>
          </li>
          <li className="">
            <Link href="/about" className="text-primary hover:text-gray-600 ">
              About
            </Link>
          </li>
          <li className="">
            <Link href="/products" className="text-primary hover:text-gray-600 ">
              Products
            </Link>
          </li>
          <li className="">
            <Link
              href="/real-estate"
              className="text-primary hover:text-gray-600 "
            >
              Real Estate
            </Link>
          </li>
          <li className="">
            <Link href="/contact" className="text-primary hover:text-gray-600 ">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

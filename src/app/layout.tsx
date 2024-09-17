import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/Header";
import BurgerMenu from "./component/BurgerMenu";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Italian Furniture",
  description: "Benvenuti nel sito di mobili italiani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/coding.ico" type="image/x-icon" />
      </head>
      <body className="min-h-screen flex flex-col">
        <div className="hidden md:block top-0 left-0 right-0 fixed w-full z-50">
          <Header />
        </div>
        <div className="flex justify-between px-4
         md:hidden fixed top-0 left-0 right-0 z-50
         bg-transparent shadow-md py-4  hover:backdrop-brightness-75 active:backdrop-brightness-75">
          <div className="">
            <Link href="/" className="text-2xl font-bold text-primary">
              Italian Furniture
            </Link>
          </div>
          <div>
            <BurgerMenu />
          </div>
        </div>
        {children}
        <div className="">
          <footer className="bg-gray-800 text-white py-4 text-center">
            <p>&copy; 2024 Italian Furniture. Всі права захищено.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

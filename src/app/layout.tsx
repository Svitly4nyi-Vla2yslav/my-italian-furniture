import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/Header";
import BurgerMenu from "./component/BurgerMenu";

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
        <div className="block md:hidden fixed top-0 left-0 right-0 z-50 ">
          <BurgerMenu />
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

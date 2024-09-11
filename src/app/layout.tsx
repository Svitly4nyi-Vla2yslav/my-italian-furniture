import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}

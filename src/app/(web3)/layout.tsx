import type { Metadata } from "next";
import { Short_Stack } from "next/font/google";
import "../globals.css";

const font = Short_Stack({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "SOLPAKA - More Than A Meme Token",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={font.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Short_Stack } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const font = Short_Stack({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "SOLPAKA - More Than A Meme Token",
  description:
    "SOLPAKA is a community-driven token aiming to build a strong and vibrant community in the Solana ecosystem. SOLPAKA is a meme coin but it does not stop it from being one of the most loved and admired tokens on Solana. SOLPAKA aims to build a strong foundation of open-minded people and continue building and investing in new, long-term projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={font.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

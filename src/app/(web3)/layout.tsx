import "../globals.css";
import type { Metadata } from "next";
import { Short_Stack } from "next/font/google";
import Web3Providers from "@/providers/Web3Providers";
import { Toaster } from "@/components/Toaster";

const font = Short_Stack({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "OG Solpaka NFT Collection",
  description:
    "These NFTs were created to help Solpaka grow and expand its farm. NFT holders will support the project's growth which will have a positive impact on their Solpaka tokens.",
  openGraph: {
    description:
      "These NFTs were created to help Solpaka grow and expand its farm. NFT holders will support the project's growth which will have a positive impact on their Solpaka tokens.",
    images: "https://solpaka.com/assets/meta/nfts-meta.png",
    title: "SOLPAKA - OG Solpaka NFT Collection",
    url: "https://solpaka.com/nft",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={font.className}>
        <Web3Providers>
          <main>{children}</main>
          <Toaster />
        </Web3Providers>
      </body>
    </html>
  );
}

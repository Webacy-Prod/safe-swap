import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Web3ModalContext } from "./Web3ModalContext";

export const metadata: Metadata = {
  title: "Webacy SafeSwap + Blast",
  description: "Webacy SafeSwap, operating on the world's only native yield Ethereum L2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Web3ModalContext>
        <body>{children}</body>
      </Web3ModalContext>
    </html>
  );
}

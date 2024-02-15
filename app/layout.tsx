import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Web3ModalContext } from "./Web3ModalContext";

export const metadata: Metadata = {
  title: "Webacy SafeSwap + Blast",
  description: "Generated by create next app",
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

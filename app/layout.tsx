import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar/navbar";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Components",
  description: "Free Tailwind CSS Components",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

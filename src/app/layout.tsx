import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel blog with Ulia and Nazar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <main className="relative overflow-hidden">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

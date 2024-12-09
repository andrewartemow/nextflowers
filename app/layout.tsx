import type { Metadata } from "next";
import { Poppins } from 'next/font/google'

import Navbar from "./components/Navbar";
import ShoppingCartModal from "./components/ShoppingCartModal";
import CartProvider from "./components/Providers";

import "./globals.css";


const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "NextFlowers",
  description: "Flowers Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <CartProvider>
          <ShoppingCartModal />
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

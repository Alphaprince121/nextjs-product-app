import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/Component/Navbar"
import Footer from "@/Component/Footer";
import { CartProvider } from "../context/cartContext";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <CartProvider>
        <Navbar />
          {children}
          <Footer />
        </CartProvider>
        
      </body>
    </html>
  );
}

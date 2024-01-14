'use client'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ShoppingCartProvider, useShoppingCart } from "../lib/context";
import { useEffect } from "react";
import { SearchBarMobile } from "../components/components-nav/search-bar";

interface StructureProps {
  children: React.ReactNode;
}

export default function Structure({ children }: StructureProps) {
  const { searchBarActive } = useShoppingCart();

  useEffect(() => {
    console.log("searchBarActive updated:", searchBarActive);
  }, [searchBarActive]);

  return (
    <ShoppingCartProvider>
      <Navbar />
      <SearchBarMobile />
      <div
        className={`${
          searchBarActive ? 'overflow-y-hidden h-500' : 'overflow-y-auto'
        } static px-4 md:px-8 lg:px-0`}
      >
        {children}
      </div>
      <Footer />
    </ShoppingCartProvider>
  );
}

'use client'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ShoppingCartContext, ShoppingCartProvider} from "../lib/context";
import { SearchBarMobile } from "../components/navbar-components/search-bar";
import DarkOverlay from "../components/dark-overlay";
import { Inter } from 'next/font/google'
import { useContext } from "react";
import { LeftNavBarMobile } from "../components/left-nav";
import Extent from "../components/extent-button";

const inter = Inter({ subsets: ['latin'] })
interface StructureProps {
  children: React.ReactNode;
}

export default function Structure({ children }: StructureProps) {
const {mobileSearchBarActive} = useContext(ShoppingCartContext);
  
  return (
    <ShoppingCartProvider>
              
      <body className={`${inter.className} ${mobileSearchBarActive ? 'overflow-hidden':''}    min-h-screen `}>
      <DarkOverlay />
      <Navbar />
      <SearchBarMobile />
      <LeftNavBarMobile />
      <div
        className={` aria-hidden:${mobileSearchBarActive}  ${mobileSearchBarActive ? ' pointer-events-none': ' '} max-w-6xl mx-auto  px-4 md:px-8 lg:px-0`}
      >
        <Extent />
        {children}
      </div>
      <Footer />
      </body>
    </ShoppingCartProvider>
  );
}

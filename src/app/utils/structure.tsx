'use client'

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ShoppingCartProvider } from "../lib/shopppingCartContext";
interface StructureProps {
    children: React.ReactNode;
  }

export default function Structure({children}:StructureProps){


    return (
    <ShoppingCartProvider>
        <Navbar />
        <div className="px-4  md:px-8 lg:px-0">
            {children}
        </div>
        <Footer />
    </ShoppingCartProvider>
    )
}
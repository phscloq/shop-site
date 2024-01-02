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
 <Navbar 
     
     />
     {children}
     <Footer />
     </ShoppingCartProvider>
    )
}
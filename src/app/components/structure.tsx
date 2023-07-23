'use client'

import Navbar from "./navbar";
import Footer from "./footer";
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
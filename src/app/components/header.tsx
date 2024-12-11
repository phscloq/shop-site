'use client'

import OrderPreview from "./order-preview"
import { useShoppingCart } from "../lib/context";
import SearchBar from "./navbar-components/search-bar";
import Basket from "./navbar-components/basket";
import Logo from "./navbar-components/logo";
import SearchPopOver from "./navbar-components/search-dropdown";
import Navbar from "./navbar-components/categories-navbar";
interface NavbarProps{
    activeLink:string;
}

export default function Header (){
    const {basket} = useShoppingCart();
    return (
            <header className="  
                bg-white shadow-md">
                <div className="flex items-center justify-between gap-16 ">
                    <Logo />
                    <SearchBar />
                    <Basket />
                </div>
                <Navbar />
                {basket ? <OrderPreview /> : null }
            </header> 

    )


}
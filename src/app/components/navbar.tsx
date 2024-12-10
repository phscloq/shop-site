'use client'

import OrderPreview from "./order-preview"
import { useShoppingCart } from "../lib/context";
import SearchBar from "./navbar-components/search-bar";
import SubBar from "./navbar-components/categories-navbar";
import Basket from "./navbar-components/basket";
import Logo from "./navbar-components/logo";
import SearchPopOver from "./navbar-components/search-dropdown";
interface NavbarProps{
    activeLink:string;
}

export default function Navbar (){
    const {basket} = useShoppingCart();
    return (
            <nav className="w-full  max-h-24 pt-4   
                bg-orange-600  text-white">
                <div className="px-4 flex items-center justify-between gap-16">
                    <Logo />
                    <SearchBar />
                    <Basket />
                </div>
                <SubBar />
                {basket ? <OrderPreview /> : null }
            </nav> 

    )


}
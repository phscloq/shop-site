
import OrderPreview from "./order-preview"
import { useShoppingCart } from "../lib/shopppingCartContext";
import SearchBar from "./components-nav/search-bar";
import SubBar from "./components-nav/sub-bar";
import Basket from "./components-nav/basket";
import Logo from "./components-nav/logo";
interface NavbarProps{
    activeLink:string;
}

export default function Navbar (){
    const {basket} = useShoppingCart();
    return (
            <nav className="w-full  max-h-24 pt-4  border-0 border-b-2 border-paynes-gray
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
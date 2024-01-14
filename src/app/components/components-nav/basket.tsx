import Link from "next/link"
import Image from "next/image"
import { useShoppingCart } from "../../lib/context";
export default function Basket(){
    const { cartItems, handleMobileSearchBarActive} = useShoppingCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <div className="flex gap-4">
            <button
            onClick={()=>handleMobileSearchBarActive(true)}
            >
                <Image className=" sm:hidden text-white"
                src="/svgs/search-icon.svg" width={45} height={45} alt="Search icon" />
            </button>
            
            <Link 
            className="relative"
            href="./cart">
                <Image src="/svgs/shop-icon.svg" width={50} height={50} alt="Shopping basket icon" />
                <div 
                className="absolute top-8  z-40 bg-g-red rounded-full 
                w-6 h-6  items-center flex justify-center">
                    <span 
                    className=" text-sm text-white">
                        {totalItems}
                    </span>
                </div>
            </Link>
        </div>
    )
}
import Link from "next/link"
import Image from "next/image"
import { useShoppingCart } from "../../lib/shopppingCartContext";
export default function Basket(){
    const { cartItems} = useShoppingCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <div className="flex gap-4">
            <Image className=" text-white"
             src="/svgs/search-icon.svg" width={45} height={45} alt="Search icon" />
            <Link 
            className="relative"
            href="./cart">
                <Image src="/svgs/shop-icon.svg" width={50} height={50} alt="Shopping basket icon" />
                <div 
                className="absolute top-8  bg-g-red rounded-full 
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
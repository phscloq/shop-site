import Link from "next/link"
import Image from "next/image"
import { useShoppingCart } from "../../lib/context";
import OrderPreview from "../order-preview";
export default function Cart(){
    const { cartItems, basket} = useShoppingCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <div className="relative">
            <Link 
            className=""
            href="/cart">
                <Image src="/svgs/shop-icon.svg" width={24} height={24} alt="Shopping basket icon" />
                {totalItems > 0 && (
                    <span 
                    className=" absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {totalItems}
                    </span>
                )}
            </Link>
            {basket && cartItems.length > 0 ? <OrderPreview /> : null }
        </div>
    )
}
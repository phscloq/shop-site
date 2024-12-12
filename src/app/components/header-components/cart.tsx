'use client'
import Link from "next/link"
import Image from "next/image"
import { useShoppingCart } from "../../lib/context";
import OrderPreview from "../order-preview";
import { ShoppingCart } from "lucide-react";
export default function Cart(){
    const { cartItems, basket} = useShoppingCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="relative">
            <Link 
            className=""
            href="/cart">
                <ShoppingCart className="w-6 h-6 text-black" />
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
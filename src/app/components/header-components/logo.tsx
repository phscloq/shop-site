'use client'
import { useShoppingCart } from "@/app/lib/context";
import Link from "next/link"
export default function Logo(){
    const {resetSearch} = useShoppingCart();
    
    return (
        <Link className="text-2xl  tracking-wider font-bold text-gray-800" href="/" onClick={resetSearch}>
            Shop Allure                               
        </Link>
    )
}


{/* <div className="flex  flex-col items-center w-44  h-full ">
<h1 className=" text-black tracking-wider text-3xl lg:text-3xl xl:text-4xl">
    Shop Allure                       
</h1>
</div> */}
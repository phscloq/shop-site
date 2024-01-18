'use client'
import Link from "next/link"
import { useShoppingCart } from "../../lib/context";
import { usePathname } from "next/navigation";
export default function SubBar(){
    const { handleCategoryClick, setTab} = useShoppingCart();
    const pathname = usePathname();
    return (
        <div className=" px-4 bg-orange-500 flex gap-4  h-[26px]">
    <Link href='/products/men' onClick={()=>handleCategoryClick("men")} 
    className={`${pathname=='/products/men' ? 'text-orange-800  border-b-2 border-orange-700':''} 
    font-bold hover:text-orange-800 hover:border-orange-700 hover:border-b-2 `}>Men</Link>
    <Link href='/products/women' onClick={()=>handleCategoryClick("women")} 
    className={`${pathname=='/products/women' ? 'text-orange-800  border-b-2 border-orange-700':''} font-bold hover:text-orange-800 hover:border-orange-700 hover:border-b-2`}>Women</Link>
    <Link href='/products/electronics' onClick={()=>handleCategoryClick("electronics")} 
    className={`${pathname=='/products/electronics' ? 'text-orange-800  border-b-2 border-orange-700':''} font-bold hover:text-orange-800 hover:border-orange-700 hover:border-b-2`}>Electronics</Link>
    
    <Link href='/products/jewelery' onClick={()=>handleCategoryClick("jewelery")} 
    className={`${pathname=='/products/jewelery' ? 'text-orange-800  border-b-2 border-orange-700':''} font-bold hover:text-orange-800 hover:border-orange-700 hover:border-b-2`}>Jewelery</Link>



</div>
    )
}
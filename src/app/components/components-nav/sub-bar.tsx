'use client'
import Link from "next/link"
import { useShoppingCart } from "../../lib/context";
import { usePathname } from "next/navigation";
export default function SubBar(){
    const {handleCategoryClick} = useShoppingCart();
    const pathname = usePathname();
    return (
        <div className=" px-4 bg-orange-500 flex gap-4  h-[26px]">
    <Link href='/products/men'  
    className={`${pathname=='/products/men' ? 'text-orange-800  border-b-2 border-orange-700':''} 
    font-bold hover:text-orange-800 hover:border-orange-700 hover:border-b-2 `}
    onClick={()=>handleCategoryClick('men')}
    >
        Men
    </Link>
    
    <Link href='/products/women'   
    className={`${pathname=='/products/women' ? 'text-orange-800  border-b-2 border-orange-700':''} 
    font-bold hover:text-orange-800 hover:border-orange-700 hover:border-b-2`}
    onClick={()=>handleCategoryClick('women')}

    >
        Women
        </Link>
    
    <Link href='/products/electronics' 
    className={`${pathname=='/products/electronics' ? 'text-orange-800  border-b-2 border-orange-700':''} 
    font-bold hover:text-orange-800 hover:border-orange-700 hover:border-b-2`}
    onClick={()=>handleCategoryClick('electronics')}

    >Electronics</Link>
    
    <Link href='/products/jewelery'  
    className={`${pathname=='/products/jewelery' ? 'text-orange-800  border-b-2 border-orange-700':''} 
    font-bold hover:text-orange-800 hover:border-orange-700 hover:border-b-2`}
    onClick={()=>handleCategoryClick('jewelery')}

    >Jewelery</Link>



</div>
    )
}
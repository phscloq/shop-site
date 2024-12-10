'use client'
import Link from "next/link"
import { useShoppingCart } from "../../lib/context";
import { usePathname } from "next/navigation";
export default function SubBar(){
const {/* handleCategoryClick,  */selectedCategory} = useShoppingCart();
const pathname = usePathname();
const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"];


return (
<div className=" px-4 bg-orange-500 flex gap-4  h-[26px]">
   {categories.map((category:string, index:number)=>{
         return (
              <Link key={index} href={`/category/${category}`} >
                <div /* onClick={()=>handleCategoryClick(category)} */ className={`cursor-pointer ${selectedCategory === category } ? ' uppercase' : 'text-black'}`}>{category}</div>
              </Link>
         )
})
   }
    


</div>
    )
}
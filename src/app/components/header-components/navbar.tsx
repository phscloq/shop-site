'use client'
import Link from "next/link"
import { useShoppingCart } from "../../lib/context";
import { usePathname } from "next/navigation";
export default function Navbar(){
const {/* handleCategoryClick,  */selectedCategory} = useShoppingCart();
const pathname = usePathname();
const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"];


return (
<nav className=" flex  gap-4 ">
   {categories.map((category:string, index:number)=>{
         return (
              <Link key={index} href={`/category/${category.toLowerCase().replace(/ /g, '-')}`} 
              className={` uppercase cursor-pointer  text-gray-600 hover:text-gray-800
              ${selectedCategory === category } ? ' text-sky-600' : 'text-black'}`}>
                {category}
              </Link>
         )
})
   }
    


</nav>
    )
}
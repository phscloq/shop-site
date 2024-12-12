'use client'
import { useShoppingCart } from "@/app/lib/context";
import Link from "next/link"
export default function Navbar(){
const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"];
const {resetSearch} = useShoppingCart();

return (
<nav className=" flex flex-wrap gap-4 ">
   {categories.map((category:string, index:number)=>{
         return (
              <Link key={index} href={`/category/${category.toLowerCase().replace(/ /g, '-')}`} 
              className={` uppercase cursor-pointer  text-gray-600 hover:text-gray-800`}
              onClick={resetSearch}>
                {category}
              </Link>
         )
})
   }
    


</nav>
    )
}
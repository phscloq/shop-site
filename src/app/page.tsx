'use client'
import { useShoppingCart } from "./lib/context"
import ItemsGrid from "./components/items-grid"
export default function Home() {
  const {allItems} = useShoppingCart();
const menItems=allItems.filter((item)=>item.category==="men's clothing");
const womenItems=allItems.filter((item)=>item.category==="women's clothing");
const jewelery=allItems.filter((item)=>item.category==="jewelery");
const electronics=allItems.filter((item)=>item.category==="electronics");

  return (    <main className="mt-8 ">
     <ItemsGrid />

       
      
    </main>
  )
}

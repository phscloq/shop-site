'use client'
import LeftNavBar from "../../components/left-nav"
import { useShoppingCart } from "@/app/lib/context"
import ItemsGrid from "@/app/components/items-grid"
import { useState } from "react";
/* export default function Products(){
    return (
        <main className="items-center justify-between mx-auto mt-8 max-w-screen-2xl">
           <main className="flex min-h-screen flex-col items-center justify-between px-24 mt-8">

     
        </main>
      ) 
} */
export default  function Men(){
 
const { handleCategoryClick, category} = useShoppingCart();


  return(
    <main className="flex  min-h-80  mx-auto gap-12 mt-8 ">
      <LeftNavBar
                tab={'men'}
      activeCategory={category}
      onClick={handleCategoryClick}
      />
      
  <ItemsGrid />
     
        </main>
  )
}
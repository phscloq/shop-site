'use client'
import LeftNavBar from "@/app/components/left-nav"
import ItemsGrid from "@/app/components/items-grid"
import { useShoppingCart } from "@/app/lib/shopppingCartContext"

export default function Women(){
const {category, handleCategoryClick} = useShoppingCart();

    return(
        <main className="flex max-w-screen-2xl  mx-auto gap-12 mt-8 ">
          <LeftNavBar
          tab={"women"}
          activeCategory={category}
          onClick={handleCategoryClick}
          />
      <ItemsGrid />
         
            </main>
      )
}
'use client'
import { useShoppingCart } from "./lib/context"
import ItemsGrid from "./components/items-grid"
import ProductSlider from "./components/product-slider";
export default function Home() {
  const {mobileSearchBarActive} = useShoppingCart();

  return (    
  <main className={`mt-8 ${mobileSearchBarActive ? ' pointer-events-none': ' '}
  `}>
    <ProductSlider />
    <ItemsGrid />      
      
    </main>
  )
}

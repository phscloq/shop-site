'use client'
import { useShoppingCart } from "./lib/context"
import ItemsGrid from "./components/items-grid"
export default function Home() {
  const {mobileSearchBarActive} = useShoppingCart();

  return (    <main className={`mt-8 ${mobileSearchBarActive ? ' pointer-events-none': ' '}
  `}>
     <ItemsGrid />

       
      
    </main>
  )
}

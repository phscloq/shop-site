
import ItemsGrid from "./components/items-grid"
import ProductSlider from "./components/product-slider";
export default function Home() {

  return (    
  <main className="container mx-auto px-4 py-8 text-black">
    <ProductSlider />
    <ItemsGrid />      
      
    </main>
  )
}

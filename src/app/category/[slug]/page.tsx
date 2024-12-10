
import { useShoppingCart } from "@/app/lib/context"
import ItemsGrid from "@/app/components/items-grid"
export default  function CategoryPage({ params }: { params: { slug: string } }) {
const {slug} = params;
 


  return(
    <main className="flex  min-h-80  mx-auto gap-12 mt-8 "> 
        <ItemsGrid category={slug} />

        </main>
  )
}

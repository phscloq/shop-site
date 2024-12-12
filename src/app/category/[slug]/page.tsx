import ItemsGrid from "@/app/components/items-grid"
export default  function CategoryPage({ params }: { params: { slug: string } }) {
const {slug} = params;
 
const decodedSlug = slug.replace(/-/g, ' ');


  return(
   <div> 
        <h1 className="text-3xl font-bold mb-8 capitalize text-black">{decodedSlug}</h1>

        <ItemsGrid category={decodedSlug} />

        </div>
  )
}

import { useShoppingCart } from "@/app/lib/context";
import Link from "next/link";

export default function SearchDropDown(){
const {filteredItems, handleSearchBarActive} = useShoppingCart();
    


return ( 
    <div className={` min-h-[240px] max-h-80 w-full z-10 
    overflow-auto absolute bg-slate-100  shadow-2xl sm:border border-orange-500`}>
        <div className={`px-4 py-2`}>
            {filteredItems.map((item:any)=>{
                return(
                <Link key={item.title} 
                onClick={()=>handleSearchBarActive(false)}
                href={`/products/${item.id}`}
                target="_blank" >
                    
                        {item.title}
                </Link>

                    
                )
            })}
               
        </div>
    </div>
)
}

/* {searchResults.length > 0 && (
    <div className="absolute top-full left-0 right-0 bg-white border rounded-md shadow-lg mt-1">
      {searchResults.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={() => setSearchResults([])}
        >
          {product.title}
        </Link>
      ))}
    </div>
  )} */
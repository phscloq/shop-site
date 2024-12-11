import { useShoppingCart } from "@/app/lib/context";
import Link from "next/link";

export default function SearchDropDown(){
const {filteredItems, handleSearchBarActive} = useShoppingCart();
    


return ( 
    <div className={` absolute w-full z-10 bg-white rounded-md top-12
    shadow-lg border `}>
            {filteredItems.map((item:any)=>
                (
                <Link key={item.title} 
                onClick={()=>handleSearchBarActive(false)}
                href={`/products/${item.id}`}
                target="_blank" 
                className="block px-4 py-2 hover:bg-gray-100">
                    
                        {item.title}
                </Link>

                    
                )
            )}
               
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
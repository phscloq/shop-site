import Link from "next/link";
import { Product } from "../lib/interfaces";


export default function ItemCard({items}:{items:Product[]}){
    
    
      return(<>
        {items.map((product:any, index:number)=>{
            return (
                <Link href={`/products/${product.id}`} >
                <div key={index}
                className=" bg-white hover:shadow-md
                  border rounded-lg overflow-hidden">
                    {/*img div */}
                    <div className=" relative h-48 mt-2 p-2">
                          <img src={product.image } alt={product.title} className=" w-full h-full object-contain   "></img>
                    </div>
                    
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2 truncate">{product.title}</h3>
                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    </div>
                </div>
                </Link>
            )
        })}
      </>
 
      )
     
    
}
function ItemDescription(){
  
}
import Link from "next/link";
import { useShoppingCart } from "../lib/context"

export default function ItemCard(){
    const {  addToCart,  handleBasketState, items, category, handleItemClick} = useShoppingCart();
    const handleAddToCart = (product: any) => {
        addToCart(product);
        handleBasketState();
      };
    
      return(<>
        {items.map((product:any)=>{
            return (
                <Link onClick={()=>handleItemClick(product.id)} key={product.title}  href={`/products/${product.id}`}>
                <div 
                className=" bg-slate-50 flex flex-col 
                h-[340px] border-2 rounded-lg">
                    {/*img div */}
                    <div className="mx-auto p-2 h-46">
                          <img src={product.image } className=" h-44"></img>
                    </div>
                    
                    <div className="h-full 
                    border-0 border-t-2 
                     p-2
                    flex flex-col justify-between">
                        <div className="">
                             <h3 className="text-xs line-clamp-2">{product.title}</h3>
                        </div>
                        <div className="">                          
                            <p className=" text-base font-bold">Price: ${product.price}</p>
                        </div>
                        
                       
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
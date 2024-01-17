'use client'
import { useShoppingCart } from "@/app/lib/context";

export default function Page({params}:{
    params:{id:number}
}){
    const {pickedItem,  handleBasketState, addToCart} = useShoppingCart();
    const handleAddToCart = (product: any) => {
        addToCart(product);
        handleBasketState();
      };
    return (
 
              <div 
                className=" py-8  flex flex-col items-center
                 ">
                    {/*img div */}
                    <div className="mx-auto p-2 mb-4  h-72">
                          <img src={pickedItem.image } className=" h-full "></img>
                    </div>
                    
                    <div className="h-full 
                    border-0 border-t-2 
                     p-2
                    flex flex-col justify-between">
                        <div className="mb-4">
                             <h3 className="text-lg uppercase text-orange-600 font-bold line-clamp-2">{pickedItem.title}</h3>
                             <p className=" text-base font-bold">Price: ${pickedItem.price}</p>

                        </div>
                        <div className="mb-4">
                             <p className=" text-base ">{pickedItem.description}</p>
                        </div>
                        
                        <div>
                              <button onClick={() => handleAddToCart(pickedItem)} 
                              className=" w-full p-2  bg-orange-500
                          active:transition  active:scale-95  
                          duration-500 hover:bg-orange-600
                           rounded-lg  text-white">
                            Add to cart
                            </button>
                        </div>
                       
                    </div>
                </div>
    );
}
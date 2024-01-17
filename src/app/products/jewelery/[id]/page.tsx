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
        <div className="flex flex-col gap-4">
              <div 
                className=" bg-slate-50 flex flex-col 
                h-[340px] border-2 rounded-lg">
                    {/*img div */}
                    <div className="mx-auto p-2 h-46">
                          <img src={pickedItem.image } className=" h-44"></img>
                    </div>
                    
                    <div className="h-full 
                    border-0 border-t-2 
                     p-2
                    flex flex-col justify-between">
                        <div className="">
                             <h3 className="text-xs line-clamp-2">{pickedItem.title}</h3>
                        </div>
                        <div className="">                          
                            <p className=" text-base font-bold">Price: ${pickedItem.price}</p>
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
        </div>
    );
}
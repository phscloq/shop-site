'use client'
import { useShoppingCart } from "@/app/lib/context";
import { useState } from "react";

export default function Page({params}:{
    params:{id:number}
}){
    const {allItems, handleBasketState, addToCart} = useShoppingCart();
    const [quantity, setQuantity] = useState<number>(1);
    const pickedItem = allItems[params.id-1];
   
    const handleQuantityChange = (e: any) => {
        const value = Number(e.target.value);
        setQuantity(value);
    
      };

    const handleAddToCart = (product: any) => {
        addToCart({...product, quantity: quantity});
        handleBasketState();
      };


    return (
        <div 
        className="  py-8 min-h-[82vh] sm:gap-2 flex flex-col sm:flex-row items-center text-black
         ">
            {/*img div */}
            <div 
            className="bg-white mx-auto w-full flex justify-center p-2 mb-4 sm:mb-0  
            h-[30rem] sm:h-[35rem] sm:w-1/2 ">
                  <img src={pickedItem?.image } className="  h-full "></img>
            </div>
            
            {/*Item details div */}
            <div className=" sm:max-h-[44rem]  sm:w-1/2 
            border-0 border-t-2 sm:border-0
             px-2 
            flex flex-col justify-between">
                {/*TITLE AND PRICE */}
                <div className="mb-4">
                     <h3 className=" text-lg lg:text-2xl uppercase text-black tracking-wide font-bold line-clamp-2">
                        {pickedItem?.title}
                    </h3>
                     <p className=" text-base font-bold">Price: ${pickedItem?.price}</p>
                </div>
                    {/*DESCRIPTION */}
                <div className="mb-2 h-[h/2]">
                     <p className=" text-sm leading-6">{pickedItem?.description}</p>
                </div>
                {/*QUANTITY*/}
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity
                    </label>
                    <input
                        type="number" 
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        min={1}
                        onChange={handleQuantityChange} 
                        className=" px-3 py-2 border border-gray-300 rounded-md shadow-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-20"
                        
                    />
                </div>
                    {/*ADD TO CART BUTTON */}
                <div>
                      <button onClick={() => handleAddToCart(pickedItem)} 
                      className=" w-full p-2  py-3  text-white tracking-wide
                  active:transition  active:scale-95   bg-blue-500
                  duration-500 hover:bg-blue-600
                   rounded-lg     shadow-md ">
                    Add to Cart
                    </button>
                </div>
               
            </div>
        </div>
              
    );
}

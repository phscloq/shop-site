'use client'
import { useShoppingCart } from "@/app/lib/context";
import { useState } from "react";

export default function Page({params}:{
    params:{id:number}
}){
    const {allItems, handleBasketState, addToCart, handleItemQuantity} = useShoppingCart();
    const [quantityInput, setQuantityInput] = useState(1);
    const pickedItem = allItems[params.id-1];

   
    const handleQuantityChange = (e: any) => {
        setQuantityInput(e.target.value);
        handleItemQuantity(e.target.value);
      };

    const handleAddToCart = (product: any) => {
        addToCart({...product, quantity: quantityInput});
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
                     <h3 className=" text-lg lg:text-2xl uppercase text-orange-600 font-bold line-clamp-2">
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
                    <p className="">QUANTITY:</p>
                    <input 
                    className=" p-2 border
                     border-orange-500  focus:border-none focus:border-orange-700  w-20"
                    type="number" 
                     value={quantityInput}
                     onChange={handleQuantityChange}
                     ></input>
                </div>
                    {/*ADD TO CART BUTTON */}
                <div>
                      <button onClick={() => handleAddToCart(pickedItem)} 
                      className=" w-full p-2  py-3  text-orange-500
                  active:transition  active:scale-95  
                  duration-500 hover:bg-orange-600
                   rounded-lg   border  shadow-md border-orange-500">
                    Add to cart
                    </button>
                </div>
               
            </div>
        </div>
              
    );
}

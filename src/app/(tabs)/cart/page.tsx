'use client'
import { useShoppingCart } from "@/app/lib/shopppingCartContext"
import Link from "next/link";

export default function Cart(){
const {cartItems, addToCart, deleteItem} = useShoppingCart();
const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
const cost = cartItems.reduce((total, item)=> total + (item.price * item.quantity), 0);
return (
    <main className="flex mx-auto gap-12 mt-8 min-h-80">
                 <div className={ `text-black  ${totalItems >= 1 ? ' flex-6' : 'grow-3'}`}>
         <h1 className=" text-2xl mb-8">My basket   ({totalItems} Items)</h1>   

            {cartItems.map((item)=>(
            <div key={item.id} className="flex items-center justify-between shadow-newco rounded-xl p-6 mb-8">
                <div className="flex gap-4">
                    <img src={item.image} className="h-32 max-w-[116px]"></img>
                    <div className=" max-w-md  pl-2">
                        <h2 className="font-bold text-base">{item.title}</h2>
                        <p className=" text-xs leading-6  truncate">{item.description}</p>
                    </div>
                </div>
                <div className="flex  gap-10 ">
                    <div className="flex h-9 border-2 items-center">
                            <button className=" text-orange-500 text-lg px-2  border-0" 
                                    onClick={()=>addToCart(item)}>+</button>
                                    <p className=" border-2 px-2 border-y-0  text-sm w-9 text-center">{item.quantity}</p>
                                    <button className={`text-lg px-2 
                                    border-0 ${item.quantity==1 ? ' text-gray-400 pointer-events-none' : 'text-orange-500'}`} 
                                    onClick={()=>deleteItem(item)}>-</button>
                    
                    </div>
                    <h3 className="text-orange-500 text-xl  px-2 w-max">${item.price}</h3>

                            <button className={` text-red-600 font-bold`}
                                onClick={()=>deleteItem(item)}
                                >X</button>
            
                </div>
           
        </div>

        ))}
                  </div>
                <div className={`${totalItems>=1 ? 'flex-2' : 'grow'}`}>
                    <div className={`text-black ${totalItems>=1 ? 'sticky' : ''}  top-8 border-2`}>
                        <div className="">
                            <h1 className=" p-2 bg-orange-500 text-white font-bold">Summary</h1>
                            <div className="p-2 mb-4 leading-8">
                                <p>Total cost:</p>
                                <p className=" text-orange-500 font-bold">${cost}</p>
                            </div>
                        </div>
                        <div className="p-2">
                            <button 
                                className=" w-full p-2  bg-orange-500
                            active:transition  active:scale-95  
                            duration-500 hover:bg-orange-600
                            rounded-lg  text-white">
                                Purchase
                                </button>
                        </div>
                      
                    </div>
                </div>
         
</main>
   
)

}
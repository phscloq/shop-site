import { useShoppingCart } from "@/app/lib/context";

export default function CheckOutItemCard() {
    const {cartItems, addToCart, deleteItem} = useShoppingCart();
    return (<>
    
        {cartItems.map((item)=>(
            <div key={item.id} 
            className="flex justify-between  shadow-newco rounded-xl p-6 mb-8 w-full">
                
                <div className="">
                    <img src={item.image} alt={item.title} className="h-32 max-w-[110px]"></img>
                </div>

                <div className="flex flex-col justify-between sm:items-center max-w-[200px] ">
                    <div> {/* Item description */}
                        <div className=" max-w-md  pl-2">
                            <h2 className="font-bold text-sm truncate sm:text-base">{item.title}</h2>
                            <p className=" text-xs leading-6  truncate">{item.description}</p>
                        </div>
                    </div>

                    <div className="flex  justify-between">{/* Item's numbers */}
                        <div className="flex h-9 border-2 items-center"> {/* Item quantity div */}
                                <button className=" text-orange-500 text-lg px-2  border-0" 
                                        onClick={()=>addToCart(item)}>+</button>
                                        <p className=" border-2 px-2 border-y-0  text-sm w-9 text-center">{item.quantity}</p>
                                        <button className={`text-lg px-2 
                                        border-0 ${item.quantity==1 ? ' text-gray-400 pointer-events-none' : 'text-orange-500'}`} 
                                        onClick={()=>deleteItem(item)}>-</button>
                        
                        </div>

                        <div className="flex gap-2 items-center lg:items-center"> {/* Item price and delete div */}
                            <h3 
                            className="text-orange-500 text-xl  px-2 w-max">
                                ${item.price}
                            </h3>
                            <button 
                            className={` text-red-600 font-bold`}
                            onClick={()=>deleteItem(item)}>
                                    X
                            </button>
                        </div>
                    </div>
                </div>
           
        </div>

        ))}
    
    </>)
   
}
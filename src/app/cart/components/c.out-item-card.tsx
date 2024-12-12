import { useShoppingCart } from "@/app/lib/context";

export default function CheckOutItemCard() {
    const {cartItems, addToCart, deleteItem} = useShoppingCart();
    return (<div className="w-full lg:w-3/4">
    
    {cartItems.map((item)=>(
        <div key={item.id} 
            className="flex  lg:flex-row border-b p-4 mb-4 w-full ">
                <div className="w-1/4 mb-4 lg:mb-0">
                    <img src={item.image} alt={item.title} className="h-32  "></img>
                </div>

                <div className="flex flex-col justify-between w-3/4 pl-4">
                        
                    <div className="mb-2 lg:mb-0">
                        <h2 className="font-bold text-sm lg:text-base mb-1">{item.title}</h2>
                        {/* <p className=" text-xs leading-5 line-clamp-2">{item.description}</p> */}
                    </div>

                    <div className="flex  justify-between items-center mt-2 lg:mt-0">{/* Item's numbers */}
                        
                        <div className="flex h-9 border-2 items-center"> {/* Item quantity div */}
                                <button className=" text-gray-500 text-lg px-2  border-0" 
                                        onClick={()=>addToCart(item)}
                                    >
                                        +
                                </button>
                                <p className=" border-2 px-2 border-y-0  text-sm w-9 text-center">
                                    {item.quantity}
                                </p>
                                <button className={`text-lg px-2 border-0 text-gray-500`} 
                                onClick={()=>deleteItem(item)}
                                >
                                    -
                                </button>
                        </div>

                        <h3 className="text-blue-500 text-xl  px-2">
                                ${item.price}
                        </h3>
                        
                    </div>

                </div>
           
        </div>

        ))}
    
    </div>)
   
}
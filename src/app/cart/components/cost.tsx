import { useShoppingCart } from "@/app/lib/context";

export default function Cost(){
    const {cartItems} = useShoppingCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cost = cartItems.reduce((total, item)=> total + (item.price * item.quantity), 0);
    return(
        <div className={` lg:w-1/4 lg:pl-4  `}>
            <div className={`text-black lg:sticky  lg:top-8 border-2`}>
                <div className="">
                    <h1 className=" p-2 bg-blue-500 text-white font-bold">Summary</h1>
                    <div className="p-2 mb-4 leading-8">
                        <p>Total cost:</p>
                        <p className=" text-blue-500 font-bold">${cost}</p>
                    </div>
                </div>
                <div className="p-2">
                    <button 
                    className=" w-full p-2  bg-blue-500
                    active:transition  active:scale-95  
                    duration-500 hover:bg-blue-600
                    rounded-lg  text-white">
                        Purchase
                    </button>
                </div>
                      
            </div>
        </div>
    )
}
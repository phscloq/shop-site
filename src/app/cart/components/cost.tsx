import { useShoppingCart } from "@/app/lib/context";

export default function Cost(){
    const {cartItems} = useShoppingCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cost = cartItems.reduce((total, item)=> total + (item.price * item.quantity), 0);
    return(
        <div className={` sm:col-start-2 `}>
            <div className={`text-black sm:sticky  sm:top-8 border-2`}>
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
    )
}
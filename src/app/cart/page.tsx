'use client'
import { useShoppingCart } from "@/app/lib/context"
import Cost from "./components/cost";
import CheckOutItemCard from "./components/c.out-item-card";

export default function Cart(){
const {cartItems} = useShoppingCart();
const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
return (
    <div className="text-black ">
        
        <h1 className=" text-2xl mb-8">My basket   ({totalItems} Items)</h1>   
        <div className="flex flex-col lg:flex-row">
            <CheckOutItemCard />
            <Cost />
        </div>
        
        
         
    </div>
   
)

}
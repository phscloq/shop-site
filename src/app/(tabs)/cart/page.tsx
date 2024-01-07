'use client'
import { useShoppingCart } from "@/app/lib/shopppingCartContext"
import Cost from "./components/cost";
import CheckOutItemCard from "./components/c.out-item-card";

export default function Cart(){
const {cartItems} = useShoppingCart();
const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
return (
    <main className="flex flex-col gap-12 mt-8 
    sm:min-h-[calc(100vh-160px)]  sm:grid sm:grid-cols-[600px_160px] lg:grid-cols-[1fr_240px]  lg:mx-auto ">
        <div className={ `text-black col-start-1  col-end-2`}>
            <h1 className=" text-2xl mb-8">My basket   ({totalItems} Items)</h1>   
            <CheckOutItemCard />
        </div>
        <Cost />
        
         
</main>
   
)

}
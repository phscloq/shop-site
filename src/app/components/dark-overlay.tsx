import { useEffect } from "react";
import { useShoppingCart } from "../lib/context"
export default function DarkOverlay(){
    const {mobileSearchBarActive, extended} = useShoppingCart();
    useEffect(()=>{
        if(mobileSearchBarActive || extended){
            document.body.style.overflowY = 'hidden';
        }else{
            document.body.style.overflowY = 'auto';
        }
    })


    return(
            <div className={`${mobileSearchBarActive || extended ? 'fixed top-0 left-0 overflow-y-hidden  w-full h-screen bg-black bg-opacity-50  z-30':' hidden'}
                    
                    `}>
                    </div>
        
    )
}
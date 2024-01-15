import { useShoppingCart } from "../lib/context"
export default function DarkOverlay(){
    const {mobileSearchBarActive} = useShoppingCart();
    return(
            <div className={`${mobileSearchBarActive ? 'fixed top-0 left-0 overflow-y-hidden  w-full h-screen bg-black bg-opacity-50  z-40':' hidden'}
                    
                    `}>
                    </div>
        
    )
}
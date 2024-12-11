'use client'
import { useEffect } from "react";
import { useShoppingCart } from "@/app/lib/context";
import Link from "next/link";
export default function OrderPreview() {
  const { cartItems, hideBasket, basket } = useShoppingCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  if(totalItems===0){
    hideBasket();
  }

  useEffect(()=>{
    if(basket){
      const timer = setTimeout(()=>{
        hideBasket();
      }, 5000)
      return ()=>clearTimeout(timer);
    }
  },[basket])


  return (
    <div className={`absolute  right-0 mt-2  text-black bg-white border
     rounded-md shadow-lg z-10 p-4  w-80
    
    `}>
      <h3>Cart ({totalItems})</h3>
      <ItemCard />
      <Buttons />

    </div>
  );
}


function ItemCard(){
  const { cartItems, deleteItem, addToCart } = useShoppingCart();
return (<ul className="max-h-60 overflow-y-auto">
  {cartItems.map((item) => (
    <li key={item.id} className=" flex items-center justify-between py-2 border-b">
      <div className="flex-1">
        <p className="text-sm font-medium  " >{item.title}</p>
        <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center ">
          {/* Item quantity div */}
          <button className={`text-gray-500 text-xl  `} 
            onClick={()=>deleteItem(item)}
            aria-label={`Decrease ${item.title} quantity`}
          >
            -
          </button>
          <span className="mx-2 text-sm">
            {item.quantity}
          </span>
          <button 
            className=" text-gray-500 text-xl  " 
            onClick={()=>addToCart(item)}
            aria-label={`Increase ${item.title} quantity`}
          >
            +
          </button>
         {item.quantity === 1 && (
            <button className={`ml-2 text-red-500 hover:text-red-700`}
                onClick={()=>deleteItem(item)}
                aria-label={`Remove ${item.title} from cart`}
            >
              x
            </button>
          )}
          {/* Remove item from basket button */}
          
          
      </div>



    </li>
  ))}
  </ul>
)
}

function Buttons(){
  const { hideBasket } = useShoppingCart();
  return (
    <div className="flex mt-4 justify-between">
      <Link  className="bg-blue-500 text-white  rounded px-4 py-2 hover:bg-blue-600 text-sm"
      href='/cart' onClick={()=>hideBasket()}>
        Order
      </Link> 
      <button onClick={()=>hideBasket()} 
      className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 text-sm">
        Keep Shopping
      </button>
    </div>
  )
}
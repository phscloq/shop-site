import { useShoppingCart } from "@/app/lib/context";
import Link from "next/link";
export default function OrderPreview() {
  const { cartItems, hideBasket } = useShoppingCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  if(totalItems===0){
    hideBasket();
  }
  return (
    <div className={`hidden lg:block lg:absolute text-black bg-slate-50 border-2 
    border-paynes-gray rounded-sm right-24 top-20 px-4 py-2
    max-w-[325px] z-50
    `}>
      <h3>My basket({totalItems})</h3>
      <ItemCard />
      <Buttons />

    </div>
  );
}


function ItemCard(){
  const { cartItems, deleteItem, addToCart } = useShoppingCart();
return (<>
  {cartItems.map((item) => (
    <div key={item.id} className=" mb-2">
      <div className="flex gap-2 items-center justify-between"> 
          <p className=" truncate" >{item.title}</p>

          <div className="flex items-center gap-6">
              {/* Item quantity div */}
              <div className={`flex items-center border-2  ${item.quantity==1 ? '': ' '}`}>
                    
                    <button 
                    className=" text-orange-500 text-lg px-2  border-0" 
                    onClick={()=>addToCart(item)}>
                      +
                    </button>

                    <p className=" border-2 px-2 border-y-0  text-sm w-9 text-center">
                      {item.quantity}
                    </p>

                    <button className={`${item.quantity==1 ? ' text-gray-400 pointer-events-none' : 'text-orange-500'} 
                    text-lg px-2 border-0 `} 
                    onClick={()=>deleteItem(item)}>
                        -
                    </button>

              </div>
              {/* Remove item from basket button */}
              <div className="min-w-[10px]">
                    <button className={`${item.quantity==1 ? 'block' : 'hidden'} text-red-600`}
                    onClick={()=>deleteItem(item)}
                    >X</button>
              </div>
              
          </div>

      </div>  


    </div>
  ))}
  </>
)
}

function Buttons(){
  const { hideBasket } = useShoppingCart();
  return (
    <div className="flex gap-4 text-white mt-2">
      <Link  className="bg-orange-600 rounded-sm px-4 py-1"
      href='/cart' onClick={()=>hideBasket()}>
        Order
      </Link> 
      <button onClick={()=>hideBasket()} 
      className="px-4 py-1 bg-slate-700">
        Keep Shopping
      </button>
    </div>
  )
}
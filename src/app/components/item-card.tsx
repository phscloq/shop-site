import { useShoppingCart } from "../lib/shopppingCartContext"

export default function ItemCard(){
    const {  addToCart,  handleBasketState, items, filterText} = useShoppingCart();
    const handleAddToCart = (product: any) => {
        addToCart(product);
        handleBasketState();
      };
      const filteredItemsArr:any=[];

      items.forEach((item)=>{
        if(item.title.toLowerCase().indexOf(filterText.toLowerCase())=== -1 ){
          return;
        }
        filteredItemsArr.push(item);
      })
      console.log(filteredItemsArr);
      return(<>
        {filteredItemsArr.map((product:any)=>{
            return (
                <div key={product.title} 
                className=" bg-slate-50 flex flex-col 
                h-[340px] border-2 rounded-lg">
                    {/*img div */}
                    <div className="mx-auto p-2 h-46">
                          <img src={product.image } className=" h-44"></img>
                    </div>
                    
                    <div className="h-full 
                    border-0 border-t-2 
                     p-2
                    flex flex-col justify-between">
                        <div className="">
                             <h3 className="text-xs line-clamp-2">{product.title}</h3>
                        </div>
                        <div className="">                          
                            <p className=" text-base font-bold">Price: ${product.price}</p>
                        </div>
                        <div>
                              <button onClick={() => handleAddToCart(product)} 
                              className=" w-full p-2  bg-orange-500
                          active:transition  active:scale-95  
                          duration-500 hover:bg-orange-600
                           rounded-lg  text-white">
                            Add to cart
                            </button>
                        </div>
                       
                    </div>
                </div>
            )
        })}
      </>
 
      )
     
    
}
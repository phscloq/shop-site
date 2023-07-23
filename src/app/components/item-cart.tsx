import { useShoppingCart } from "../lib/shopppingCartContext"

export default function ItemCart(){
    const {  addToCart,  handleBasketState, items, filterText} = useShoppingCart();
    const handleAddToCart = (product: any) => {
        addToCart(product);
        handleBasketState();
      };
      const filteredItemsArr:any=[];

      items.forEach((item)=>{
        if(
          item.title.toLowerCase().indexOf(
            filterText.toLowerCase()
          )=== -1
        ){
          return;
        }
        filteredItemsArr.push(item);
      })
      console.log(filteredItemsArr);
      return(<>
        {filteredItemsArr.map((product:any)=>{
            return (
                <div key={product.title} className=" bg-slate-50 flex flex-col h-[340px] border-2 rounded-lg">
                    <div className="mx-auto p-2 h-44">
                          <img src={product.image } className="h-full"></img>
                    </div>
                    <div className="px-8 pb-4 h-full border-0 border-t-2 flex flex-col justify-between">
                        <div className="flex flex-col justify-between">
                            <h3 className=" font-bold">{product.title}</h3>
                            <p>Price: {product.price}</p>
                        </div>
                       <button onClick={() => handleAddToCart(product)} className=" w-full p-2  bg-orange-500
                    active:transition  active:scale-95  duration-500 hover:bg-orange-600  text-white">Add to cart</button>
                </div>
                </div>
            )
        })}
      </>
 
      )
     
    
}
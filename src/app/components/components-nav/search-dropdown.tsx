import { useShoppingCart } from "@/app/lib/context";

export default function SearchDropDown(){
const {filteredItems, searchBarActive, mobileSearchBarActive} = useShoppingCart();
    return(
        <div className={`${searchBarActive || mobileSearchBarActive ? 'block': 'hidden'} min-h-[240px] max-h-80 
        w-full z-10 
        overflow-auto absolute bg-slate-100  shadow-2xl sm:border border-orange-500`}>
           <div className="px-4 py-2">
           <ul className="">
                {filteredItems.map((item:any)=>{
                    return(
                        <li key={item.title} 
                        className=" border-b border-slate-400 truncate p-2 hover:bg-slate-200 hover:text-black">
                            {item.title}
                        </li>   
                      
                      
                    )
                })}
               
            </ul>
           </div>
        </div>
    )
}
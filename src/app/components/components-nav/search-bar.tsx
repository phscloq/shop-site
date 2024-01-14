import { useShoppingCart } from "../../lib/context";
import SearchDropDown from "./search-dropdown";

export default function SearchBar(){
    const { filterText, handleFilterTextChange, handleSearchBarActive, searchBarActive} = useShoppingCart();
    return (
        
       
            <div className={`hidden sm:block w-96 h-full relative
              text-black   flex-initial
            `}>
                
                <input className="w-full text-xl p-2 
                sm:active:rounded-t-lg
                sm:rounded-md sm:active:border sm:active:border-orange-500"
                value={filterText}
                onChange={(e)=>handleFilterTextChange(e)}
                onFocus={()=>handleSearchBarActive(true)}
                onBlur={()=>handleSearchBarActive(false)}
                placeholder="Search for the product"
                ></input>
                <SearchDropDown />
            </div>
       
    
       
    )
}

export function SearchBarMobile(){
    const { filterText, handleFilterTextChange, mobileSearchBarActive, handleMobileSearchBarActive} = useShoppingCart();

return (
    <div className={`${mobileSearchBarActive  ? 'h-full fixed overflow-y-hidden w-screen top-0 z-50': 'hidden'}
        w-3/5 lg:hidden`}>
            <div className={`${mobileSearchBarActive ? 'absolute left-0 top-0 w-screen z-50 block':'hidden'}
             text-black
            `}>
                
                <input id="searchbarmobile" className="w-full text-xl py-6 px-4
                sm:active:rounded-t-lg
                sm:rounded-md sm:p-2 sm:w-3/4 sm:active:border sm:active:border-orange-500"
                value={filterText}
                onChange={(e)=>handleFilterTextChange(e)}
                onFocus={()=>handleMobileSearchBarActive(true)}
                onBlur={()=>handleMobileSearchBarActive(false)}
                placeholder="Search for the product"
                ></input>
                <SearchDropDown />
            </div>
        </div>
)
}
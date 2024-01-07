import { useShoppingCart } from "../../lib/context";
import SearchDropDown from "./search-dropdown";

export default function SearchBar(){
    const { filterText, handleFilterTextChange, handleSearchBarActive, searchBarActive} = useShoppingCart();
    return (
        <button onClick={()=>console.log("clicked")}>
        <div className={`${searchBarActive  ? 'h-full fixed overflow-y-hidden w-screen top-0 left-0 backdrop-blur z-50': ''}
        `}>
            <div className={`${searchBarActive ? 'absolute left-0 top-0 w-screen z-50 block':'hidden sm:block'}
            sm:block sm:relative sm:grow sm:shrink sm:basis-auto sm:w-auto text-black
            `}>
                
                <input className="w-full text-xl py-6 px-4
                sm:active:rounded-t-lg
                sm:rounded-md sm:p-2 sm:w-3/4 sm:active:border sm:active:border-orange-500"
                value={filterText}
                onChange={(e)=>handleFilterTextChange(e)}
                onFocus={()=>handleSearchBarActive(true)}
                onBlur={()=>handleSearchBarActive(false)}
                placeholder="Search for the product"
                ></input>
                <SearchDropDown />
            </div>
        </div>
        </button>
    )
}
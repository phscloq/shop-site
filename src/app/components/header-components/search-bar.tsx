'use client'
import { useEffect, useRef } from "react";
import { useShoppingCart } from "../../lib/context";
import SearchDropDown from "./search-dropdown";

export default function SearchBar(){
    const { filterText, handleFilterTextChange, handleSearchBarActive, searchBarActive, filteredItems, setFilteredItems} = useShoppingCart();
    const searchRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        console.log(searchRef.current)
        const handleClickOutside = (event:any) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                handleSearchBarActive(false)}
        }
    
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      }, [])
    
    
    return (
        
       
            <div className={`flex-1 mx-4 relative text-black`} ref={searchRef}> 
                <input 
                  className="w-full px-4 py-2 border rounded-md"
                  value={filterText}
                  type="text"
                  onChange={(e)=>handleFilterTextChange(e)}
                  onFocus={()=>handleSearchBarActive(true)}
                  placeholder="Search products..."
                  aria-label="Search products" 
                />
                <button>
                  <img 
                    className=" absolute right-1 top-1 opacity-40"
                    src="/svgs/search-icon.svg" 
                    width={36} height={36} 
                    alt="Search icon" 
                  />
                </button>
                 
                {searchBarActive && filteredItems.length > 0  && <SearchDropDown /> }
            </div>
       
    
       
    )
}

/* export function SearchBarMobile(){
    const { filterText, handleFilterTextChange,  mobileSearchBarActive, filteredItems, handleMobileSearchBarActive} = useShoppingCart();
    const mobileSearchRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        console.log(mobileSearchRef.current)
        const handleClickOutside = (event:any) => {
            if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target)) {
                handleMobileSearchBarActive(false)}
        }
    
        document.addEventListener('touchstart', handleClickOutside); 
        return () => {
          document.removeEventListener('touchstart', handleClickOutside)
        }
      }, [])
return (
    <div className={`${mobileSearchBarActive  ? 'h-full fixed overflow-y-hidden w-screen top-0 z-50': 'hidden'}
        w-3/5 lg:hidden`} ref={mobileSearchRef}>
            <div className={`${mobileSearchBarActive ? 'absolute left-0 top-0 w-screen z-50 block':'hidden'}
             text-black
            `}>
                
                <input id="searchbarmobile" className="w-full text-xl py-6 px-4
                sm:active:rounded-t-lg
                sm:rounded-md sm:p-2 sm:w-3/4 sm:active:border sm:active:border-orange-500"
                value={filterText}
                onChange={(e)=>handleFilterTextChange(e)}
                onFocus={()=>handleMobileSearchBarActive(true)}
                placeholder="Search for the product"
                ></input>
                 {mobileSearchBarActive && filteredItems.length > 0  && <SearchDropDown />}
            </div>
        </div>
)
} */
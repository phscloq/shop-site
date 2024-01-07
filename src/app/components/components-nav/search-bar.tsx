import { useShoppingCart } from "../../lib/shopppingCartContext";

export default function SearchBar(){
    const { filterText, handleFilterTextChange} = useShoppingCart();
    return (
        <div className="hidden sm:block grow shrink basis-auto w-auto text-black">
            
            <input className=" rounded-md p-2 w-3/4"
            value={filterText}
            onChange={(e)=>handleFilterTextChange(e)}
            placeholder="Search for the product"
            ></input>
        </div>
    )
}
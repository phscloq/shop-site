import Link from "next/link"
import OrderPreview from "./order-preview"
import { useShoppingCart } from "../lib/shopppingCartContext";
interface NavbarProps{
    activeLink:string;
}

export default function Navbar (){
    const { cartItems, basket, handleCategoryClick, filterText, handleFilterTextChange} = useShoppingCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
<nav className="w-full  pt-4  border-0 border-b-2 border-paynes-gray bg-orange-600     text-white">
<div className="px-4 flex items-center justify-between gap-16">
<Link href="./" onClick={()=>handleCategoryClick("home")}>
     <div className="flex flex-col items-center">
    <span className="text-4xl">Shop Allure</span>
    </div></Link>

{/*Search Bar */}
<div className="grow shrink basis-auto w-auto text-black">
    <input className=" rounded-md p-2 w-3/4"
    value={filterText}
    onChange={(e)=>handleFilterTextChange(e)}
    placeholder="Search for the product"
    ></input>
</div>

<div className="flex">
{/*     <button className="rounded-md bg-orange-500 px-8">Sign-in</button>
 */}    <Link href="./cart">
    <img src="/svgs/shop-icon.svg"></img>
    <div className="absolute top-12 bg-g-red rounded-full w-6 items-center flex justify-center">
    <span className="  text-white">{totalItems}</span>
    </div>
   
    </Link>


</div>

</div>
<div className=" px-4 bg-orange-500 flex gap-4">
    <Link href='./men' onClick={()=>handleCategoryClick("men's clothing")} className={`font-bold hover:underline `}>Men</Link>
    <Link href='./women' onClick={()=>handleCategoryClick("women's clothing")} className="font-bold hover:underline">Women</Link>
    <Link href='./electronics' onClick={()=>handleCategoryClick("electronics")} className="font-bold hover:underline">Electronics</Link>
    <Link href='./jewelery' onClick={()=>handleCategoryClick("jewelery")} className="font-bold hover:underline">Jewelery</Link>



</div>
{basket ? <OrderPreview /> : null }


</nav> 

    )


}
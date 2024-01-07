import Link from "next/link"
import { useShoppingCart } from "../../lib/context";
export default function SubBar(){
    const { handleCategoryClick} = useShoppingCart();
    return (
        <div className=" px-4 bg-orange-500 flex gap-4">
    <Link href='./men' onClick={()=>handleCategoryClick("men's clothing")} className={`font-bold hover:underline `}>Men</Link>
    <Link href='./women' onClick={()=>handleCategoryClick("women's clothing")} className="font-bold hover:underline">Women</Link>
    <Link href='./electronics' onClick={()=>handleCategoryClick("electronics")} className="font-bold hover:underline">Electronics</Link>
    <Link href='./jewelery' onClick={()=>handleCategoryClick("jewelery")} className="font-bold hover:underline">Jewelery</Link>



</div>
    )
}
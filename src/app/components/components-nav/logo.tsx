import Link from "next/link"
import { useShoppingCart } from "../../lib/shopppingCartContext";
export default function Logo(){
    const { handleCategoryClick} = useShoppingCart();
    return (
        <Link href="./" onClick={()=>handleCategoryClick("home")}>
                <div className="flex flex-col items-center">
                    <span className="text-4xl">
                        Shop Allure                       
                    </span>
                </div>
        </Link>
    )
}
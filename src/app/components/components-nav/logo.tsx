import Link from "next/link"
import { useShoppingCart } from "../../lib/context";
export default function Logo(){
    const { handleCategoryClick} = useShoppingCart();
    return (
        <Link className="h-full" href="./" onClick={()=>handleCategoryClick("home")}>
                <div className="flex flex-col items-center w-44  h-full  lg:w-54 xl:w-auto">
                    <span className="text-3xl lg:text-3xl xl:text-4xl">
                        Shop Allure                       
                    </span>
                </div>
        </Link>
    )
}
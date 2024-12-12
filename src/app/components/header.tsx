import SearchBar from "./header-components/search-bar";
import Cart from "./header-components/cart";
import Logo from "./header-components/logo";
import Navbar from "./header-components/navbar";

export default function Header (){
    return (
            <header className=" 
                bg-white shadow-md">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4 ">
                            <Logo />
                            <SearchBar />
                            <Cart />
                        </div>
                        <Navbar />
                        
                    </div>
                
            </header> 

    )


}
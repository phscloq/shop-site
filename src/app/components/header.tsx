'use client'

import OrderPreview from "./order-preview"
import { useShoppingCart } from "../lib/context";
import SearchBar from "./header-components/search-bar";
import Basket from "./header-components/basket";
import Logo from "./header-components/logo";
import Navbar from "./header-components/navbar";
interface NavbarProps{
    activeLink:string;
}

export default function Header (){
    const {basket, cartItems} = useShoppingCart();
    return (
            <header className=" 
                bg-white shadow-md">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between mb-4 ">
                            <Logo />
                            <SearchBar />
                            <Basket />
                        </div>
                        <Navbar />
                        
                    </div>
                
            </header> 

    )


}
{/* 
<header className="bg-white shadow-md">
<div className="container mx-auto px-4 py-4">
  <div className="flex items-center justify-between mb-4">
    <Link href="/" className="text-2xl font-bold text-gray-800">
      FakeStore
    </Link>
    <div className="flex-1 mx-4 relative" ref={searchRef}>
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search products"
          />
          <button type="submit" className="absolute right-2 top-2" aria-label="Submit search">
            <Search className="h-6 w-6 text-gray-400" />
          </button>
        </div>
      </form>
      {showSuggestions && searchSuggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
          {searchSuggestions.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setShowSuggestions(false)}
            >
              {product.title}
            </Link>
          ))}
        </div>
      )}
    </div>
    <Link href="/cart" className="text-gray-600 hover:text-gray-800">
      <ShoppingCart className="h-6 w-6" />
    </Link>
  </div>
  <nav className="flex space-x-4">
    {categories.map((category) => (
      <Link
        key={category}
        href={`/category/${category}`}
        className="text-gray-600 hover:text-gray-800 capitalize"
      >
        {category}
      </Link>
    ))}
  </nav>
</div>
</header> */}
'use client'
import { useState } from "react";
import { useShoppingCart } from "../lib/context";


interface NavbarProps{
    activeCategory:string;
    onClick:any;
    tab: string;
}
export default function LeftNavBar({activeCategory, onClick, tab}:NavbarProps){
   
    
    return (
        <nav className={`hidden  text-black transition-all duration-300 overflow-x-hidden lg:flex max-h-max relative`}>
          
            <div className={`
            sticky top-0 h-fit  `}>
                
                <div className={``}>
                    <p className=" p-2 rounded-md">Related categories</p>

                    <div className={`flex flex-col border-2 rounded-md mt-2 p-2 gap-2`}>
                    {tab==='electronics' &&  <button  onClick={()=>onClick("electronics")} 
                    className={`font-bold hover:underline 
                    ${activeCategory==='electronics' ? 'bg-orange-300' : ''}`}>Electronics</button>
                    }       
            {tab==='jewelery' &&  <button  onClick={()=>onClick("jewelery")} className={`font-bold hover:underline ${activeCategory==='jewelery' ? 'bg-orange-300' : ''}`}>Jewelery</button>
            }       
                    {tab==='men' &&
                    <> <button 
                    onClick={()=>onClick('all-men')}
                    className={`font-bold hover:underline `}>All</button>
                    <button   onClick={()=>onClick("men's clothing")}
                    className={`font-bold hover:underline ${activeCategory==="men's clothing" ? 'bg-orange-300' : ''}`}>Men&apos;s Clothing</button>
                    <button  onClick={()=>onClick("jewelery")} 
                    className={`font-bold hover:underline ${activeCategory==='jewelery' ? 'bg-orange-300' : ''}`}>Jewelery</button>
                    </> }
                
                    {tab==='women' &&
                    <> <button 
                    onClick={()=>onClick('all-women')}
                    className={`font-bold hover:underline `}>All</button>
                    <button   onClick={()=>onClick("women's clothing")}
                    className={`font-bold hover:underline ${activeCategory==="women's clothing" ? 'bg-orange-300' : ''}`}>Women&apos;s Clothing</button>
                    <button  onClick={()=>onClick("jewelery")} 
                    className={`font-bold hover:underline ${activeCategory==='jewelery' ? 'bg-orange-300' : ''}`}>Jewelery</button>
                    </> }
                   
                    </div>
                    
                </div>
                
                
            </div>
            
           
        </nav>
        
    )
}

export function LeftNavBarMobile(){
    const {category, handleCategoryClick, extended,tab} = useShoppingCart();
    return (
        <nav className={` lg:hidden text-black z-40 ${
            extended ? "w-44 visible " : "w-0 invisible"
          } bg-orange-500 fixed left-0 top-0 transition-all duration-300 overflow-x-hidden lg:flex max-h-max h-full`}>
          
            <div className={`
            sticky top-0 h-fit  `}>
                
                <div className={``}>
                    <p className=" p-2 rounded-md">Related categories</p>

                    <div className={`flex flex-col border-2 rounded-md mt-2 p-2 gap-2`}>
                        {tab==='electronics' &&  <button  onClick={()=>handleCategoryClick("electronics")} 
                        className={`font-bold hover:underline 
                        ${category==='electronics' ? 'bg-orange-300' : ''}`}>Electronics</button>
                        }   

                        {tab==='jewelery' &&  <button  onClick={()=>handleCategoryClick("jewelery")} 
                        className={`font-bold hover:underline ${category==='jewelery' ? 'bg-orange-300' : ''}`}>
                        Jewelery
                        </button>
            }       
                        {tab==='men' &&
                        <> <button 
                        onClick={()=>handleCategoryClick('all-men')}
                        className={`font-bold hover:underline `}>All</button>
                        <button   onClick={()=>handleCategoryClick("men's clothing")}
                        className={`font-bold hover:underline ${category==="men's clothing" ? 'bg-orange-300' : ''}`}>Men&apos;s Clothing</button>
                        <button  onClick={()=>handleCategoryClick("jewelery")} 
                        className={`font-bold hover:underline ${category==='jewelery' ? 'bg-orange-300' : ''}`}>Jewelery</button>
                        </> }
                
                        {tab==='women' &&
                        <> <button 
                        onClick={()=>handleCategoryClick('all-women')}
                        className={`font-bold hover:underline `}>All</button>
                        <button   onClick={()=>handleCategoryClick("women's clothing")}
                        className={`font-bold hover:underline ${category==="women's clothing" ? 'bg-orange-300' : ''}`}>Women&apos;s Clothing</button>
                        <button  onClick={()=>handleCategoryClick("jewelery")} 
                        className={`font-bold hover:underline ${category==='jewelery' ? 'bg-orange-300' : ''}`}>Jewelery</button>
                        </> }
                   
                    </div>
                    
                </div>
                
                
            </div>
            
           
        </nav>
    )

}
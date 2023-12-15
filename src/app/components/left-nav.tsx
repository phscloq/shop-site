import Link from "next/link"


interface NavbarProps{
    activeCategory:string;
    onClick:any;
    tab: string;
}
export default function LeftNavBar({activeCategory, onClick, tab}:NavbarProps){
    return (
        <nav className="text-black flex max-h-max ">
        <div className="sticky top-0 h-fit">
        <button className=" p-2 rounded-md">Related categories</button>
        <div className="flex flex-col border-2 rounded-md mt-2 p-2 gap-2">
        {tab==='electronics' &&  <button  onClick={()=>onClick("electronics")} className={`font-bold hover:underline ${activeCategory==='electronics' ? 'bg-orange-300' : ''}`}>Electronics</button>
}       
{tab==='jewelery' &&  <button  onClick={()=>onClick("jewelery")} className={`font-bold hover:underline ${activeCategory==='jewelery' ? 'bg-orange-300' : ''}`}>Jewelery</button>
}       
        {tab==='men' &&
        <> <button 
        onClick={()=>onClick('all-men')}
        className={`font-bold hover:underline `}>All</button>
        <button   onClick={()=>onClick("men's clothing")}
        className={`font-bold hover:underline ${activeCategory==="men's clothing" ? 'bg-orange-300' : ''}`}>Men's Clothing</button>
        <button  onClick={()=>onClick("jewelery")} 
        className={`font-bold hover:underline ${activeCategory==='jewelery' ? 'bg-orange-300' : ''}`}>Jewelery</button>
        </> }
       
        {tab==='women' &&
        <> <button 
        onClick={()=>onClick('all-women')}
        className={`font-bold hover:underline `}>All</button>
        <button   onClick={()=>onClick("women's clothing")}
        className={`font-bold hover:underline ${activeCategory==="women's clothing" ? 'bg-orange-300' : ''}`}>Women's Clothing</button>
        <button  onClick={()=>onClick("jewelery")} 
        className={`font-bold hover:underline ${activeCategory==='jewelery' ? 'bg-orange-300' : ''}`}>Jewelery</button>
        </> }
        </div>
        </div>

        </nav>
    )
}
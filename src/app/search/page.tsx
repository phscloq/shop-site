'use client'
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "../lib/interfaces";
import { GetProducts } from "../data/GetProducts";
import Link from "next/link";

export default function SearchResults(){
const [searchResults, setSearchResults] = useState<Product[]>([]);
const [isLoading, setIsLoading] = useState(true);
const searchParams = useSearchParams();
const query = searchParams.get('q');

useEffect(()=>{
    const fetchData = async () =>{
    if(query){
        setIsLoading(true);
        try{
        const data = await GetProducts();
        setSearchResults(data.filter((product:Product) => 
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
            )
        );
        setIsLoading(false);
    }catch(error){
        console.error('Error fetching search results', error);
        setIsLoading(false);
        }
    }

    }
    fetchData();
},[query]);


if(isLoading){
    return <div className="text-center py-10 text-black">Loading...</div>
}
return (
    <div className="container mx-auto px-4 py-8 text-black">
        <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
        {searchResults.length === 0 ? (
            <p>No results found for "{query}"</p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-black">
                {searchResults.map((product:Product)=>(
                    <Link href={`/product/${product.id}`} key={product.id} className="block">
                        <div className=" bg-white hover:shadow-md border rounded-lg overflow-hidden">
                            <div className=" relative h-48 mt-2 p-2">
                                <img src={product.image } alt={product.title} className=" w-full h-full object-contain   "></img>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2 truncate ">{product.title}</h3>
                                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        )
        }

    </div>
)

}
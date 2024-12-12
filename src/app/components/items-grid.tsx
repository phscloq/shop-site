'use client'
import { useEffect, useState } from "react";
import ItemCard from "./item-card"
import { Product } from "../lib/interfaces";
import { GetSpecificCategory } from "../data/GetSpecificCategory";

export default function ItemsGrid({category}:{category?:string}){
    const [items, setItems] = useState<Product[]>([]);
    useEffect(() => {
        const fetchItems = async () => {
            const items = await GetSpecificCategory({category});
            setItems(items);
            /* setItems(allItems.filter((item:Product)=>item.category.toLowerCase().replace(/ /g, '-') === category)); */
        };
        fetchItems();
    }, [category]);

    return (
        <div className="mt-4 flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-black">
            <ItemCard items={items}/>
        </div>
    )
}
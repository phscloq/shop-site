'use client'

import { useEffect } from "react";
import { useShoppingCart } from "../lib/context";

export default function Extent(){
    const {extended, setExtended} = useShoppingCart();


    return (
        <div className={`${extended ? ' left-44':'left-0'}
        lg:hidden fixed   top-1/2 z-40`}>
            <button
            onClick={() => setExtended(!extended)}
            className=" font-bold  bg-orange-500 text-white p-1  mt-2 rounded-r-md"
          >
            {extended ? "<" : ">"}
          </button>
            </div>
    )
}
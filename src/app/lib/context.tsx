'use client'
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { GetProducts } from "../data/GetProducts";
import { Product } from "./interfaces";
interface ShoppingCartContextProps {
  cartItems: Product[];
  basket: Boolean;
  allItems: Product[];
  filterText: string;
  filteredItems: Product[];
  searchBarActive: Boolean;
  addToCart: (product: Product) => void;
  handleBasketState: () => void;
  hideBasket: ()=>void;
  handleFilterTextChange:(e:any)=>void;
  handleSearchBarActive:(value:boolean)=>void;
  updateItemQuantity:(product:Product, quantity:number)=>void;
  setFilteredItems:(value:Product[])=>void;
  resetSearch:()=>void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextProps>({
  cartItems: [],
  basket: false,
  allItems:[],
  filterText:'',
  filteredItems:[],
  searchBarActive: false,
  addToCart: () => {},
  handleBasketState: ()=>{},
  hideBasket: ()=>{},
  handleFilterTextChange: ()=>{},
  handleSearchBarActive: ()=>{},
  setFilteredItems: ()=>{},
  updateItemQuantity: ()=>{},
  resetSearch: ()=>{}
});

export const useShoppingCart = () => useContext(ShoppingCartContext);

export function ShoppingCartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [basket, setBasket] = useState(false);
  const [allItems, setAllItems] = useState<Product[]>([]);
  const [filterText, setFilterText] = useState('');
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);
  const [searchBarActive, setSearchBarActive] = useState(false);

  useEffect(() => {    
    async function fetchData(){
      const data = await GetProducts();
      setAllItems(data);
      console.log('data', data);
      
  }
      
fetchData();
  }, []);



  const addToCart = (product: Product) => {
    setCartItems((prevCart)=>{
      const existingItem = cartItems.find((item)=>item.id===product.id);
    if(existingItem){
      // Update the quantity of the existing item
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
     }else{
      // Add the new item to the cart
      return [...prevCart, product];
    }
  });


  };
 

  const updateItemQuantity = (product: Product, quantity: number )=>{
    setCartItems(prevCartItems => prevCartItems.map(item=>
      item.id === product.id ? {...item, quantity: item.quantity + quantity } : item
    )
    .filter((item)=>item.quantity>0) 
  )
  } 

  /*Show Basket */
  const handleBasketState=()=>{
    if(!basket){
      setBasket(true);
    }
  };
  const hideBasket=()=>{
    setBasket(false);
  }

  const handleFilterTextChange = (e: any) => {
      const searchText = e.target.value.toLowerCase();
      // Check if the search bar is empty
      if (searchText === "") {
          setFilteredItems([]); // Clear the filteredItems array
      } else {
          // Filter items based on the search text
          const filterItems = allItems.filter((item) =>
              item.title.toLowerCase().includes(searchText)
          );
          setFilteredItems(filterItems);
      }
  
      setFilterText(e.target.value);
  };
  
  const handleSearchBarActive = (value:boolean) => {
      setSearchBarActive(value);
  }
  const resetSearch = () => {
    setFilterText("");
    setFilteredItems([]);
    setSearchBarActive(false);
  }
 




  return (
    <ShoppingCartContext.Provider 
    value={{ 
      cartItems, basket, allItems, filterText, filteredItems, searchBarActive,
      addToCart,
      handleBasketState,
      hideBasket,
      handleFilterTextChange,
      setFilteredItems,
      handleSearchBarActive, 
      updateItemQuantity,
      resetSearch
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

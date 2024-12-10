'use client'
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { GetProducts } from "../data/GetProducts";
import { usePathname } from "next/navigation";
import { Product } from "./interfaces";
import { Cart } from "./interfaces";
interface ShoppingCartContextProps {
  cartItems: Product[];
  basket: Boolean;
  category: string;
  items: Product[];
  allItems: Product[];
  filterText: string;
  filteredItems: Product[];
  searchBarActive: Boolean;
  mobileSearchBarActive: Boolean;
  extended: Boolean;
  tab: string;
  selectedCategory: string;
  pickedItem: any;
  addToCart: (product: Cart) => void;
  deleteItem: (product: Product) => void;
  handleBasketState: () => void;
  hideBasket: ()=>void;
  handleFilterTextChange:(e:any)=>void;
  handleSearchBarActive:(value:boolean)=>void;
  handleMobileSearchBarActive:(value:boolean)=>void;
  setExtended:(value:boolean)=>void;
  setTab:(value:string)=>void;
  /* handleItemClick:(id:number)=>void; */
  handleItemQuantity:(amount:number)=>void;
/*   handleCategoryClick:(category:string)=>void;
 */  setFilteredItems:(value:Product[])=>void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextProps>({
  cartItems: [],
  basket: false,
  category: '',
  items:[],
  allItems:[],
  filterText:'',
  filteredItems:[],
  searchBarActive: false,
  mobileSearchBarActive: false,
  extended:false,
  tab:'home',
  selectedCategory:'',
  pickedItem:{id:0, title:'', price:0, category:'', description:'', image:'', quantity:0},
  addToCart: () => {},
  deleteItem: ()=>{},
  handleBasketState: ()=>{},
  hideBasket: ()=>{},
  handleFilterTextChange: ()=>{},
  handleSearchBarActive: ()=>{},
  handleMobileSearchBarActive: ()=>{},
  setExtended: ()=>{},
  setTab: ()=>{},
  /* handleItemClick: ()=>{}, */
  handleItemQuantity: ()=>{},
/*   handleCategoryClick: ()=>{},
 */  setFilteredItems: ()=>{}
});

export const useShoppingCart = () => useContext(ShoppingCartContext);

export function ShoppingCartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const [basket, setBasket] = useState(false);
  const [category, setCategory] = useState('');
  const [items, setItems] = useState<Product[]>([]);
  const [allItems, setAllItems] = useState<Product[]>([]);
  const [filterText, setFilterText] = useState('');
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [mobileSearchBarActive, setMobileSearchBarActive] = useState(false);
  const [extended, setExtended] = useState(false)
  const [tab, setTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [pickedItem, setPickedItem] = useState({id:0, title:'', price:0, category:'', description:'', image:'', quantity:0});

  const path = usePathname();
  useEffect(() => {    
    async function fetchData(){
      const data = await GetProducts();
      setAllItems(data);
      console.log('data', data);
      
  }
      
fetchData();
  }, []);
/* 
const handleCategoryClick = (category:string)=>{
  let filteredData;
  switch (category) {
    case 'men':
      filteredData = allItems.filter((item:Product) => item.category === "men's clothing");
      setSelectedCategory('m')
      console.log('filteredData 1', filteredData);
      break;
    case 'women':
      filteredData = allItems.filter((item:Product) => item.category === "women's clothing");
      console.log('filteredData 2', filteredData);

      break;
    case 'jewelery':
      filteredData = allItems.filter((item:Product) => item.category === "jewelery");
      console.log('filteredData 3', filteredData);

      break;
    case 'electronics':
      filteredData = allItems.filter((item:Product) => item.category === "electronics");
      break;
    default:
      filteredData = allItems;
  }
  
  setItems(filteredData);
} */



  const addToCart = (product: Cart) => {
    const existingItem = cartItems.find((item)=>item.id===product.id);
    if(existingItem){
      setCartItems((prevItems)=>
      prevItems.map((item)=>
      item.id===product.id ? {...item, quantity:item.quantity+1} : item
      )
      );
    }else{
      setCartItems((prevItems) => [...prevItems, {...product}]);

    }


  };
  const deleteItem = (product: Product) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === product.id
          ? {...item, quantity: item.quantity -1}
          : item
      )
      .filter((item)=>item.quantity>0)
          );
  };
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
  const handleMobileSearchBarActive = (value:boolean) => {
    setMobileSearchBarActive(value);
}
/* const handleItemClick = (id:number) => {
  const clickedItem = allItems.find((item)=>item.id===id);
  setPickedItem(clickedItem!);
  console.log(clickedItem)
} */
const handleItemQuantity = (amount:number)=>{
  pickedItem.quantity = amount;
}



  return (
    <ShoppingCartContext.Provider 
    value={{handleItemQuantity, /* handleCategoryClick, */ setFilteredItems,
      pickedItem, /* handleItemClick, */ selectedCategory, tab, setTab,
      extended, setExtended, handleMobileSearchBarActive,mobileSearchBarActive,
      searchBarActive, handleSearchBarActive, filteredItems, cartItems,
       basket, items, filterText,
     addToCart, deleteItem, handleBasketState, hideBasket,
       category, allItems, handleFilterTextChange }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

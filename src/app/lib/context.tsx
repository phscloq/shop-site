import { createContext, useContext, useState, useEffect, useRef } from "react";
import { GetData } from "../data/data";
import { usePathname } from "next/navigation";
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image:any;
  quantity:number;
}

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
  addToCart: (product: Product) => void;
  deleteItem: (product: Product) => void;
  handleBasketState: () => void;
  hideBasket: ()=>void;
  handleFilterTextChange:(e:any)=>void;
  handleSearchBarActive:(value:boolean)=>void;
  handleMobileSearchBarActive:(value:boolean)=>void;
  setExtended:(value:boolean)=>void;
  setTab:(value:string)=>void;
  handleItemClick:(id:number)=>void;
  handleItemQuantity:(amount:number)=>void;
  handleCategoryClick:(category:string)=>void;
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
  handleItemClick: ()=>{},
  handleItemQuantity: ()=>{},
  handleCategoryClick: ()=>{},
});

export const useShoppingCart = () => useContext(ShoppingCartContext);

export function ShoppingCartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
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
      const data = await GetData();
      setAllItems(data);


      let filteredData;
    switch (path) {
      case '/products/men':
        filteredData = data.filter((item:Product) => item.category === "men's clothing" || item.category === 'jewelery');
        break;
      case '/products/women':
        let filteredData1 = data.filter((item:Product) => item.category === "women's clothing");
        let filteredData2 = data.filter((item:Product) => item.category === 'jewelery');
        filteredData = [...filteredData1, ...filteredData2];
        break;
      case '/products/jewelery':
        filteredData = data.filter((item:Product) => item.category === 'jewelery');
        break;
      case '/products/electronics':
        filteredData = data.filter((item:Product) => item.category === 'electronics');
        break;
      default:
        filteredData = data;
    }
    
    setItems(filteredData);
  }
      
fetchData();
  }, []);

const handleCategoryClick = (category:string)=>{
  let filteredData;
  switch (category) {
    case 'men':
      filteredData = allItems.filter((item:Product) => item.category === "men's clothing" || item.category === 'jewelery');
      break;
    case 'women':
      let filteredData1 = allItems.filter((item:Product) => item.category === "women's clothing");
      let filteredData2 = allItems.filter((item:Product) => item.category === 'jewelery');
      filteredData = [...filteredData1, ...filteredData2];
      break;
    case 'jewelery':
      filteredData = allItems.filter((item:Product) => item.category === 'jewelery');
      break;
    case 'electronics':
      filteredData = allItems.filter((item:Product) => item.category === 'electronics');
      break;
    default:
      filteredData = allItems;
  }
  
  setItems(filteredData);
}



  const addToCart = (product: Product) => {
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
const handleItemClick = (id:number) => {
  const clickedItem = allItems.find((item)=>item.id===id);
  setPickedItem(clickedItem!);
  console.log(clickedItem)
}
const handleItemQuantity = (amount:number)=>{
  pickedItem.quantity = amount;
}



  return (
    <ShoppingCartContext.Provider 
    value={{handleItemQuantity, handleCategoryClick,
      pickedItem, handleItemClick, selectedCategory, tab, setTab,
      extended, setExtended, handleMobileSearchBarActive,mobileSearchBarActive,
      searchBarActive, handleSearchBarActive, filteredItems, cartItems,
       basket, items, filterText,
     addToCart, deleteItem, handleBasketState, hideBasket,
       category, allItems, handleFilterTextChange }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

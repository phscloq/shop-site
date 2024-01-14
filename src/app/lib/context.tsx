import { createContext, useContext, useState, useEffect, useRef } from "react";

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
  addToCart: (product: Product) => void;
  deleteItem: (product: Product) => void;
  handleBasketState: () => void;
  hideBasket: ()=>void;
  handleCategoryClick:(category:string)=>void;
  handleFilterTextChange:(e:any)=>void;
  handleSearchBarActive:(value:boolean)=>void;
  handleMobileSearchBarActive:(value:boolean)=>void;
}

const ShoppingCartContext = createContext<ShoppingCartContextProps>({
  cartItems: [],
  basket: false,
  category: '',
  items:[],
  allItems:[],
  filterText:'',
  filteredItems:[],
  searchBarActive: false,
  mobileSearchBarActive: false,
  addToCart: () => {},
  deleteItem: ()=>{},
  handleBasketState: ()=>{},
  hideBasket: ()=>{},
  handleCategoryClick: ()=>{},
  handleFilterTextChange: ()=>{},
  handleSearchBarActive: ()=>{},
  handleMobileSearchBarActive: ()=>{},
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
  useEffect(()=>{
  const fetchItems = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      const data = await response.json();
        setItems(data);
          setAllItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  fetchItems();
}, []);



  const addToCart = (product: Product) => {
    const existingItem = cartItems.find((item)=>item.id===product.id);
    if(existingItem){
      setCartItems((prevItems)=>
      prevItems.map((item)=>
      item.id===product.id ? {...item, quantity:item.quantity+1} : item
      )
      );
    }else{
      setCartItems((prevItems) => [...prevItems, {...product, quantity:1}]);

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
        /* if category home, so homepage, then all items will be on items*/

  const handleCategoryClick=(category:string)=>{
      setCategory(category);
      if(category==='all-men'){
        const filteredItems = allItems.filter((item) => item.category === "men's clothing" ||item.category === 'jewelery');
        setItems(filteredItems);
      }else if(category==='all-women'){
        const filteredItems = allItems.filter((item) => item.category === "women's clothing");
        const filteredItemsII = allItems.filter((item) => item.category === 'jewelery');
        const mergedFilteredItems = [...filteredItems, ...filteredItemsII];
        setItems(mergedFilteredItems);
      }else if(category==='home'){
        setItems(allItems)
      }else{
        console.log('last else called');
        console.log(category);
        const filteredItems = allItems.filter((item) => item.category === category);
        setItems(filteredItems);
      }
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


  return (
    <ShoppingCartContext.Provider 
    value={{handleMobileSearchBarActive,mobileSearchBarActive,searchBarActive, handleSearchBarActive, filteredItems, cartItems,
       basket, items, filterText,
     addToCart, deleteItem, handleBasketState, hideBasket,
      handleCategoryClick, category, allItems, handleFilterTextChange }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

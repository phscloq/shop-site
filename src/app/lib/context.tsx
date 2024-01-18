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
  extended: Boolean;
  tab: string;
  selectedCategory: string;
  pickedItem: any;
  addToCart: (product: Product) => void;
  deleteItem: (product: Product) => void;
  handleBasketState: () => void;
  hideBasket: ()=>void;
  handleCategoryClick:(category:string)=>void;
  handleFilterTextChange:(e:any)=>void;
  handleSearchBarActive:(value:boolean)=>void;
  handleMobileSearchBarActive:(value:boolean)=>void;
  setExtended:(value:boolean)=>void;
  setTab:(value:string)=>void;
  handleItemClick:(id:number)=>void;
  handleItemQuantity:(amount:number)=>void;
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
  handleCategoryClick: ()=>{},
  handleFilterTextChange: ()=>{},
  handleSearchBarActive: ()=>{},
  handleMobileSearchBarActive: ()=>{},
  setExtended: ()=>{},
  setTab: ()=>{},
  handleItemClick: ()=>{},
  handleItemQuantity: ()=>{},
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

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      const data = await response.json();
      console.log("data", data)
        setAllItems(data);
        setItems(data)
        
   
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  



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
        /* if category home, so homepage, then all items will be on items*/

  const handleCategoryClick=(category:string)=>{
      setCategory(category);
      if(category==='men'){ /* Items to list on men page: man clothing and jewelery */
        const filteredItems = allItems.filter((item) => item.category === "men's clothing" ||item.category === 'jewelery');
        setItems(filteredItems);
        localStorage.setItem('selectedCategory', category);
      }else if(category==='women'){/* Items to list on women page: woman clothing and jewelery */
        const filteredItems = allItems.filter((item) => item.category === "women's clothing");
        const filteredItemsII = allItems.filter((item) => item.category === 'jewelery');
        const mergedFilteredItems = [...filteredItems, ...filteredItemsII];
        setItems(mergedFilteredItems);
        localStorage.setItem('selectedCategory', category);

      }else if(category==='home'){/* Items to list on homepage page: everything */
        setItems(allItems)
        localStorage.setItem('selectedCategory', category);

      }else{ /* Items to list on electronics and jewelery pages*/
        console.log('last else called');
        console.log(category);
        console.log(allItems);
        console.log(items);
        const filteredItems = allItems.filter((item) => item.category === category);
        setItems(filteredItems);
        console.log(filteredItems)
        localStorage.setItem('selectedCategory', category);

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
    value={{handleItemQuantity,
      pickedItem, handleItemClick, selectedCategory, tab, setTab,
      extended, setExtended, handleMobileSearchBarActive,mobileSearchBarActive,
      searchBarActive, handleSearchBarActive, filteredItems, cartItems,
       basket, items, filterText,
     addToCart, deleteItem, handleBasketState, hideBasket,
      handleCategoryClick, category, allItems, handleFilterTextChange }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

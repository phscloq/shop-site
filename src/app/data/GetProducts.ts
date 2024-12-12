export async function GetProducts(){
        
          const response = await fetch('https://fakestoreapi.com/products/');
          const data = await response.json();
          return data;
}
// https://fakestoreapi.com/products/ 
// https://api.escuelajs.co/api/v1/products


export async function GetLimitedProducts(limit: number){
        
  const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
  const data = await response.json();
  return data;
}
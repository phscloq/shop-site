//https://api.escuelajs.co/api/v1/categories

export async function GetSpecificCategory({category}:{category?:string}){
    
    const url = category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products';

    const response = await fetch(url);
    const data = await response.json();
    return data;
}
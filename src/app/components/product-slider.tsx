'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Product } from '../lib/interfaces'
import { GetLimitedProducts } from '../data/GetProducts'

export default function ProductSlider(){
const [products, setProducts] = useState<Product[]>([])
const [currentIndex, setCurrentIndex] = useState(0)

useEffect(()=>{
    const fetchProducts = async ()=>{
        const data = await GetLimitedProducts(5);
        setProducts(data);
    }
    fetchProducts();
},[])

const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
}

const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
}

return (
    <div className='relative w-full h-96 overflow-hidden rounded-lg shadow-lg mb-8'>
        {products.map((product, index) => (
            <div
                key={product.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h2 className="text-xl font-bold">{product.title}</h2>
                </div>
            </div>
        ))}
        <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 text-black" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 text-black" />
      </button>
    </div>
)
}



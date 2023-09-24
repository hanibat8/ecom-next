'use client'
import ProductCard from '@/components/ProductCard'
import { useState, useEffect } from 'react'
import { productsData } from '@/data/products';
import { useCart } from '@/context/cartContext';
import Cart from '@/components/Cart';
import {ProductItem} from '@/types/types'

async function getData() {
  const res = await fetch('https://api.example.com/...')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default function Home() {
  const [products,setProducts]=useState<ProductItem[]>([]);
  const { isCartOpen } = useCart();

  useEffect(()=>{
    setProducts(productsData)
  },[])

  return (
    <main className="min-h-screen px-6 grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-16 mt-32 mb-10">
      {isCartOpen && <Cart />}
      {products.map((product)=>
                <ProductCard product={product} id={product.id} key={product.id} 
                            productName={product.productName} img={product.imgSrc} 
                            price={product.price} categoryName={product.category}/>)}
      
    </main>
  )
}

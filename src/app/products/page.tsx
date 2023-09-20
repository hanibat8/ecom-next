'use client'
import ProductCard from '@/components/ProductCard'
import { useState, useEffect } from 'react'
import { productsData } from '@/data/products';
import { useCart } from '@/context/cartContext';
import Cart from '@/components/Cart';
import {ProductItem} from '@/types/types'

export default function Home() {
  const [products,setProducts]=useState<ProductItem[]>([]);
  const { isCartOpen } = useCart();

  useEffect(()=>{
    setProducts(productsData)
  },[])

  return (
    <main className="min-h-screen px-6 grid grid-cols-4 gap-16 mt-32">
      {isCartOpen && <Cart />}
      {products.map((product)=>
                <ProductCard product={product} id={product.id} key={product.id} productName={product.productName} img={product.imgSrc} 
                            price={product.price} categoryName={product.category}/>)}
      
    </main>
  )
}

'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/cartContext'

const ProductCard = ({img,productName,price,categoryName,product,id}) => {

    const { addToCart } = useCart();

    const handleAddToCart = (event,product) => {
        event.preventDefault();
        addToCart(product);
      };

  return (
    <Link href={`/product/${id}`}>
        <div className="w-full h-full rounded-md overflow-hidden bg-white cursor-pointer">
        <Image layout='responsive' height={300} width={300} alt='product' src={img}/>
        <div className='flex justify-between mt-4 px-2'>
            <h4>{productName}</h4>
            <button onClick={(event)=>handleAddToCart(event,product)} className='rounded-md bg-cyan-500 p-2'>Add to Cart</button>
        </div>
        <div className='flex justify-between mt-2 p-2'>
            <p>${price}</p>
            <p>{categoryName}</p>
        </div>
    </div>
    </Link>
    
  )
}

export default ProductCard

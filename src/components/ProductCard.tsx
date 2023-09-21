'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/cartContext'
import {BsCartDash} from 'react-icons/bs'

const ProductCard = ({img,productName,price,categoryName,product,id}) => {

    const { addToCart } = useCart();

    const handleAddToCart = (event,product) => {
        event.preventDefault();
        addToCart(product);
      };

  return (
    <Link href={`/product/${id}`}>
        <div className="w-full h-full rounded-md overflow-hidden bg-slate-50 cursor-pointer">
        <Image layout='responsive' height={300} width={300} alt='product' src={img}/>
        <div className='flex justify-between mt-4 px-4'>
            <h4 className='font-bold'>{productName}</h4>
            <button onClick={(event)=>handleAddToCart(event,product)} className='flex items-center rounded-md bg-cyan-500 hover:bg-cyan-600 p-3 py-1 text-white'>
                <BsCartDash/>
                <span className='ml-2 font-semibold'>Add to Cart</span>
            </button>
        </div>
        <div className='flex justify-between mt-2 p-2 px-4 text-slate-700'>
            <p>$ {price}</p>
            <p>{categoryName}</p>
        </div>
    </div>
    </Link>
    
  )
}

export default ProductCard

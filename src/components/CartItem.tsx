'use client'

import Image from 'next/image'
import {AiFillDelete} from 'react-icons/ai'
import { useCart } from '@/context/cartContext'
import { ProductItem } from '@/types/types'

const CartItem = ({imgSrc,productName,price,id}:ProductItem) => {
  const { deleteFromCart } = useCart();

    const handleDeleteCartItem=(id:number,price:string)=>{
        deleteFromCart(id,price)
    }

    console.log(productName,price)
  return (
    <div className="w-full rounded-md bg-white h-auto bg-slate-100 mb-4">
        <div className='flex flex-col'>
    <div className='flex items-center'>
      <div className="w-32 h-20 relative">
        <Image layout='fill' objectFit='cover' alt='product' src={imgSrc}/>
      </div>    
      <div className='mt-4 px-2 ml-4'>
        <h4 className='text-black'>{productName}</h4>
        <p className='text-black'>${price}</p>
      </div>
    </div>
    <button onClick={()=>handleDeleteCartItem(id,price)} className='self-end cursor-pointer'>
      <AiFillDelete />
    </button>
  </div>
    </div>
  )
}

export default CartItem

'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useCart } from '@/context/cartContext';
import Cart from '@/components/Cart';
import { useRouter } from 'next/navigation';
import { ProductItem } from '@/types/types';
import {BsCartDash} from 'react-icons/bs'

const product = {
  productName: 'Product 2',
  imgSrc: '/product.jpg',
  price: '2800',
  category: 'Electronics',
  id: 2
}

export default function Product({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { isCartOpen, addToCart } = useCart();

  console.log(params.id)

  const handleAddToCart = () => {
    if (product)
      addToCart(product);
  };

  return (
    <main className="w-full px-6 mt-32">
      {isCartOpen && <Cart />}
      {product &&
        <div className='flex md:flex-row flex-col'>
          <Image
            width={400}
            height={400}
            className='md:w-1/2 w-full rounded-lg'
            alt='product'
            src={product.imgSrc}
          />
        <div
          className='md:text-3xl md:px-4 px-0 sm:text-2xl md:w-1/2 w-full flex flex-col md:ml-4'
        >

          <h4 className='text-slate-700 font-bold my-2'>{product.productName}</h4>

          <p className='text-black mb-2 md:mb-6'>${product.price}</p>

            <p className='text-base text-slate-700 mb-4 md:mb-10 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus dolor ut leo sagittis faucibus. Cras ornare felis turpis, at rutrum urna malesuada et. Vestibulum tempus erat nisi, vitae fermentum tellus aliquet aliquam. Aliquam nec feugiat felis. Fusce vel gravida metus, a pulvinar massa. Nunc feugiat risus nibh, varius venenatis.</p>
            
            <button
              onClick={() => handleAddToCart()}
              className='text-base flex items-center rounded-md bg-cyan-500 hover:bg-cyan-600 p-2 text-white'
            >
              <BsCartDash/>
              <span className='ml-2 font-semibold'>Add to Cart</span>
            </button>
        </div>
      </div>}

    </main>
  )
}

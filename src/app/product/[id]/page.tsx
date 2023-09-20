'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useCart } from '@/context/cartContext';
import Cart from '@/components/Cart';
import { useRouter } from 'next/navigation';
import { productsData } from '@/data/products';
import { ProductItem } from '@/types/types';

export default function Product() {
    const router = useRouter();
    //const { id } = router.query as { id?: string };
    const [product,setProduct]=useState<ProductItem>()
    const { isCartOpen,addToCart } = useCart();

    const handleAddToCart = () => {
      if(product)
        addToCart(product);
      };

    useEffect(()=>{
      //const product=productsData.find((product)=>product.id===id)
      //console.log(product)
        setProduct({
          productName:'Product 2',
          imgSrc:'/product.jpg',
          price:'2800',
          category:'Electronics',
          id:2
      })
    },[])

    console.log(product)

  return (
    <main className="min-h-screen px-6 mt-32">
      {isCartOpen && <Cart/>}
      {product && <div className='flex md:flex-row sm:flex-col h-96'>
        <div className="w-1/2 relative">
          <Image layout='fill' objectFit='cover' alt='product' src={product.imgSrc}/>
        </div>    
        <div className='mt-4 px-2 ml-4 text-3xl w-1/2 flex flex-col justify-evenly relative'>
          <div className='flex'>
            <h4 className='text-black'>Product Name -</h4>
            <h4 className='text-slate-500 ml-4'>{product.productName}</h4>
          </div>
          <div className='flex'>
          <h4 className='text-black'>Price -</h4>
            <p className='text-slate-500 ml-4'>${product.price}</p>
            </div>
            <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus dolor ut leo sagittis faucibus. Cras ornare felis turpis, at rutrum urna malesuada et. Vestibulum tempus erat nisi, vitae fermentum tellus aliquet aliquam. Aliquam nec feugiat felis. Fusce vel gravida metus, a pulvinar massa. Nunc feugiat risus nibh, varius venenatis.</p>
            <button onClick={()=>handleAddToCart()} className='text-base self-end rounded-md bg-cyan-500 p-2 text-white'>Add to Cart</button>
        </div>
      </div>}
      
    </main>
  )
}

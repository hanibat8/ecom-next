'use client'

import {AiOutlineClose} from 'react-icons/ai'
import { useCart } from '@/context/cartContext'
import CartItem from './CartItem'

const Cart = () => {
    const { toggleCart, cartItems,total } = useCart();
    
  return (
    <div className="z-50 fixed md:w-1/4 w-full h-full top-0 right-0 block bg-white pt-6 px-2">
        <div className='flex justify-between mb-6'>
            <button onClick={toggleCart}>
                <AiOutlineClose/>
            </button>
            <p className='font-semibold'>Cart</p>
        </div>
        <div>
        {cartItems.map((product) =>
          <CartItem
            key={product.id}
            category={product.category} id={product.id}
            productName={product.productName}
            imgSrc={product.imgSrc} 
            price={product.price}
          />
        )}
        </div>
        <div className='flex justify-between'>
        <h4>Total:</h4>
        <p>{total}</p>
        </div>
    </div>
  )
}

export default Cart

'use client'

import { useCart } from '@/context/cartContext';
import { useAuth } from '@/context/authContext';
import {BsFillCartDashFill} from 'react-icons/bs'
import Link from 'next/link';

const Header = () => {
    const { toggleCart, cartItems } = useCart();
    const {logout}=useAuth();

    const handleLogout=()=>{
      logout()
    }

  return (
    <div className="bg-cyan-50 flex justify-between items-center py-3 px-4">
      <Link href='/products'><h2 className='cursor-pointer font-bold text-xl'>ECOM STORE</h2></Link>
      <div className="flex gap-6 md:gap-4">
        <button onClick={toggleCart} className='relative'>
          <span className='absolute top-0 right-7 font-bold text-cyan-600'>{cartItems.length}</span>
        <BsFillCartDashFill className="text-2xl hover:text-cyan-600"/>
        </button>
        <button onClick={handleLogout} className='rounded-md bg-cyan-500 hover:bg-cyan-600 px-6 py-2 text-white font-semibold'>
            Sign out
        </button>
      </div>
    </div>
  )
}

export default Header

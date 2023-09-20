'use client'

import { useCart } from '@/context/cartContext';
import { useAuth } from '@/context/authContext';
import {BsFillCartDashFill} from 'react-icons/bs'
import Link from 'next/link';

const Header = () => {
    const { toggleCart } = useCart();
    const {logout}=useAuth();

    const handleLogout=()=>{
      logout()
    }

  return (
    <div className="bg-cyan-50 flex justify-between items-center py-3 px-4">
      <Link href='/products'><h2 className='cursor-pointer'>ECOM STORE</h2></Link>
      <div className="flex gap-6 md:gap-4">
        <button onClick={toggleCart} className=''>
        <BsFillCartDashFill/>
        </button>
        <button onClick={handleLogout} className='rounded-md bg-cyan-500 px-6 py-2'>
            Sign out
        </button>
      </div>
    </div>
  )
}

export default Header

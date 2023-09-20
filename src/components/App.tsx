'use client'

import { CartProvider } from '@/context/cartContext'; 
import { AuthProvider } from '@/context/authContext'; 

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
      
  )
}

export default App

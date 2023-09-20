import React, { createContext, useContext, useState } from 'react';
import { ProductItem} from '@/types/types'

const CartContext  = createContext({
    isCartOpen: false,
    total:0,
    cartItems: [] as ProductItem[],
    toggleCart: () => {},
    addToCart: (item: ProductItem) => {},
    deleteFromCart: (id: number, price:string) => {},
  });

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);
  const [total,setTotal]=useState(0);

  const toggleCart = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  const addToCart = (item:ProductItem) => {
    const isPresent = cartItems.some((cartItem:ProductItem) => cartItem.id === item.id);
    if (!isPresent) {
      setCartItems((prevItems) => [...prevItems, item]);
      setTotal((prevTotal:number)=>prevTotal+(+item.price))
    }
  };

  const deleteFromCart = (id:number,price:string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setTotal((prevTotal:number)=>prevTotal-(+price))
  };

  return (
    <CartContext.Provider value={{ isCartOpen, cartItems,total, toggleCart, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

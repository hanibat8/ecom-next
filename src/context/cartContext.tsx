import React, { createContext, useContext, useState } from 'react';
import { ProductItem} from '@/types/types'

const CartContext  = createContext({
    isCartOpen: false,
    cartItems: [] as ProductItem[],
    toggleCart: () => {},
    addToCart: (item: ProductItem) => {},
    deleteFromCart: (id: number) => {},
  });

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);

  const toggleCart = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  const addToCart = (item:ProductItem) => {
    const isPresent = cartItems.some((cartItem:ProductItem) => cartItem.id === item.id);
    if (!isPresent) {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const deleteFromCart = (id:number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ isCartOpen, cartItems, toggleCart, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

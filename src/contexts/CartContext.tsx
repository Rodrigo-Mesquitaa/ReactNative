import React, { createContext, useContext, useState } from 'react';

interface CartContextType {
  cartItems: string[];
  addToCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
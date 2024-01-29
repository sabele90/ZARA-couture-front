import React, { createContext, useContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  useEffect(() => {
    const newTotal = cartItems.reduce((total, item) => {
      //El precio esta almacenado en una cadena y lo convierto a numero
      const price = parseFloat(item.price);
      return total + price;
    }, 0);
    setTotal(newTotal);
  }, [cartItems]);
  const count = cartItems.length;

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, total, addToCart, count, removeFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

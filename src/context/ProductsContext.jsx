import { createContext, useContext, useState } from "react";

// creates context
const ProductsContext = createContext();

// custom hook for products state
export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  // cart items
  const [cartItems, setCartItems] = useState([]);

  // add items to card
  const addItemToCart = itemToAdd => {
    setCartItems(cartItems.concat(itemToAdd));
    console.log(cartItems);
  };

  // removes item from cart
  const deleteItemFromCart = itemToDelete => {
    const remainingItems = cartItems.filter(item => item.id !== itemToDelete);
    setCartItems(remainingItems);
  };

  // clear items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ProductsContext.Provider
      value={{
        cartItems,
        addItemToCart,
        deleteItemFromCart,
        clearCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

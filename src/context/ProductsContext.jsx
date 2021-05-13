import { createContext, useContext, useReducer, useState } from "react";
import { commerce } from "../lib/Commerce.js";
import { useQuery } from "react-query";
import { GiInfo } from "react-icons/gi";

// creates context
const ProductsContext = createContext();

// custom hook for products state
export const useProducts = () => {
  return useContext(ProductsContext);
};

// fetch products
const fetchProducts = async () => {
  const response = await commerce.products.list();

  return response;
};

export const ProductsProvider = ({ children }) => {
  // store product
  const { status, data } = useQuery("products", fetchProducts);

  // product id
  const [productId, setProductId] = useState("");

  // fetch product details
  const fetchProductId = id => {
    setProductId(id);
  };

  // cart items
  const [cartItems, setCartItems] = useState([]);

  // checks for item duplicate
  const duplicateItem = prodId => {
    return cartItems.some(item => item.id === prodId);
  };

  // add items to card
  const addItemToCart = prodId => {
    const item = data.data.filter(item => item.id === prodId);

    // runs duplicate check function
    const duplicate = duplicateItem(prodId);

    // if duplicate exist, increments number of items
    if (duplicate) {
      return;
    }

    // if duplicate does not exist, add items to item
    if (!duplicate) {
      setCartItems(cartItems.concat(item));
      return;
    }
  };

  // removes item from cart
  const deleteItemFromCart = prodId => {
    const remainingItems = cartItems.filter(item => item.id !== prodId);
    // setCartItems(item);
    setCartItems(remainingItems);
  };

  // clear items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ProductsContext.Provider
      value={{
        data,
        status,
        fetchProductId,
        productId,
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

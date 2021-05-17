import { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { commerce } from "../lib/Commerce";

// creates context
const ProductsContext = createContext();

// custom hook for products state
export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  // fetch cart
  const fetchCart = async () => {
    return await commerce.cart.retrieve();
  };
  const {
    data: cart,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useQuery("cart", fetchCart, {
    refetchOnWindowFocus: false,
  });

  // add items to cart
  const addItemToCart = async (itemToAdd, quatity = 1) => {
    await commerce.cart.add(itemToAdd, quatity);
    refetch();
  };

  // removes item from cart
  const deleteItemFromCart = async itemToDelete => {
    await commerce.cart.remove(itemToDelete);
    refetch();
  };

  // clear items from cart
  const clearCart = async () => {
    await commerce.cart.empty();
    refetch();
  };

  return (
    <ProductsContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
        clearCart,
        fetchCart,
        isLoading,
        isFetching,
        isError,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

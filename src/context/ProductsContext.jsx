import { createContext, useContext, useReducer } from "react";
import { commerce } from "../lib/Commerce.js";
import { useQuery } from "react-query";

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
  // products
  const { status, data } = useQuery("products", fetchProducts);

  return (
    <ProductsContext.Provider value={{ data, status }}>
      {children}
    </ProductsContext.Provider>
  );
};

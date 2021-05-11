import { createContext, useContext } from "react";
import { commerce } from "../lib/Commerce.js";
import { useEffect, useState } from "react";

// creates context
const ProductsContext = createContext();

// custom hook for products state
export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  // products
  const [products, setProducts] = useState([]);

  // fetch products
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

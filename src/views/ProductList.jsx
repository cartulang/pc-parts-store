// components
import Loader from "../components/Loader";
import Error from "../components/Error";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";

// hooks
import { useQuery } from "react-query";

// functions
import { fetchProducts } from "../api/productsApi";
import { useEffect, useLayoutEffect, useState } from "react";

const ProductList = () => {
  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    document.title = "Products";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["products", page], () => fetchProducts(page), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) return <Loader />;

  if (isError) return <Error />;

  // product list
  const renderProductCards = () => {
    return products.data.map(product => {
      return (
        // products card
        <ProductCard product={product} key={product.id} />
      );
    });
  };

  return (
    <section className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="row w-75 mx-auto justify-content-evenly">
        <h1 className="h1 border-bottom border-dark py-5 mt-5">Shop</h1>
        {renderProductCards()}
      </div>
      <Pagination page={page} products={products} setPage={setPage} />
    </section>
  );
};

export default ProductList;

// context
import { useProducts } from "../context/ProductsContext";

// components
import Loader from "./Loader";
import Error from "./Error";
import Pagination from "./Pagination";
// hooks
import { useQuery } from "react-query";

// functions
import { fetchProducts } from "../api/productsApi";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductList = () => {
  const { addItemToCart } = useProducts();
  const [page, setPage] = useState(1);

  useEffect(() => {
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
  });

  if (isLoading) return <Loader />;

  if (isError) return <Error />;

  // product list
  const renderProductCard = () => {
    return products.data.map(product => {
      return (
        // products card
        <div
          className="col-3 p-4 mx-1 my-3 bg-white"
          key={product.id}
          style={{ height: "max-content" }}
        >
          <img
            className="w-100 product-image"
            src={product.media.source}
            alt={product.name}
          />
          <p className="text-center h5 mb-4">{product.name}</p>
          <p className="text-center h5">
            {product.price.formatted_with_symbol}
          </p>
          <div className="d-flex justify-content-evenly mt-5">
            <Link
              to={`/products/${product.id}`}
              className="btn btn-outline-secondary"
            >
              Details
            </Link>
            <button
              className="btn btn-primary"
              onClick={() => addItemToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="row w-75 mx-auto justify-content-evenly">
        <h1 className="h1 border-bottom border-dark pb-2">Shop</h1>
        {renderProductCard()}
      </div>
      <Pagination page={page} products={products} setPage={setPage} />
    </section>
  );
};

export default ProductList;

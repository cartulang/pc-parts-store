import { useProducts } from "../context/ProductsContext";
import ProductDetails from "./ProductDetails";

import { Link } from "react-router-dom";

const sectionStyles = {
  paddingTop: "60px",
  border: "2px red solid",
};

const spinnerStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
};

const errorStyles = {
  transform: "translate(-50%,-50%)",
  position: "absolute",
  top: "50%",
  left: "50%",
};

const ProductList = () => {
  const {
    data: products,
    status,
    fetchProductId,
    addItemToCart,
  } = useProducts();
  const content = "all";

  if (status === "error") {
    return <h1 style={errorStyles}>Error fetching data</h1>;
  }

  // loader

  if (status === "loading") {
    return (
      <div
        className="spinner-border text-dark"
        role="status"
        style={spinnerStyles}
      ></div>
    );
  }

  // product list

  return (
    <section className="container-fluid" style={sectionStyles}>
      <div className="row w-75 mx-auto justify-content-evenly">
        <h1 className="h1 border-bottom border-dark py-2">Shop</h1>
        {products.data.map(product => {
          return (
            // products card
            <div className="col-3 p-4 mx-1 my-3 bg-white" key={product.id}>
              <img
                className="w-100 product-image"
                src={product.media.source}
                alt={product.name}
              />
              <p className="text-center h3 mb-4">{product.name}</p>
              <p className="text-center h5">
                {product.price.formatted_with_symbol}
              </p>
              <div className="d-flex justify-content-evenly mt-5">
                <Link
                  to="/details"
                  className="btn btn-outline-secondary"
                  id={product.id}
                  onClick={e => fetchProductId(e.target.id)}
                >
                  Details
                </Link>
                <button
                  className="btn btn-primary"
                  id={product.id}
                  onClick={e => addItemToCart(e.target.id)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;

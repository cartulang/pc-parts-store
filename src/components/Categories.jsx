import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import { fetchCategory } from "../api/productsApi";

import Loader from "./Loader";
import Error from "./Error";

const Categories = ({ match }) => {
  const { addItemToCart } = useProducts();

  const {
    data: productsByCategory,
    isLoading,
    isError,
    isFetching,
  } = useQuery(
    ["category", match.params.categoryName],
    () => fetchCategory(match.params.categoryName),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  if (isLoading || isFetching) return <Loader />;

  if (isError) return <Error />;

  const renderItems = () => {
    if (!productsByCategory.data || !productsByCategory) {
      return (
        <h1
          className="position-absolute top-50 start-50"
          style={{ transform: "translateX(-7%)" }}
        >
          Item not found
        </h1>
      );
    }
    document.title = productsByCategory.data[0].categories[0].name;
    // renders item cards
    return (
      <>
        <h1 className="h1 border-bottom border-dark py-2">
          {productsByCategory.data[0].categories[0].name}
        </h1>
        {productsByCategory.data.map(product => {
          // products card
          return (
            <div
              className="col-xl-3 col-lg-5 col-md-5 p-4 mx-1 my-3 bg-white"
              key={product.id}
              style={{ height: "max-content" }}
            >
              <img
                className="w-100 product-image"
                src={product.media.source}
                alt={product.name}
              />
              <p className="text-center h3">{product.name}</p>
              <p className="text-center h5">
                {product.price.formatted_with_symbol}
              </p>
              <div className="row justify-content-evenly mt-5">
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-outline-secondary mt-2 col-lg-auto col-md-auto col-xs-12"
                >
                  Details
                </Link>
                <button
                  className="btn btn-primary mt-2 col-lg-auto col-md-auto"
                  onClick={() => addItemToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <section className="container-fluid">
      <div className="row w-75 mx-auto justify-content-evenly">
        {renderItems()}
      </div>
    </section>
  );
};

export default Categories;

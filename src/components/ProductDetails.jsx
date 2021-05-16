import Loader from "./Loader";
import Error from "./Error";

import { useProducts } from "../context/ProductsContext";
import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from "react-query";

import { fetchDetails } from "../api/productsApi";

const backButtonStyle = {
  position: "relative",
  top: "5rem",
};

const descriptionStyle = {
  position: "relative",
  top: "1rem",
};

const ProductDetails = ({ match }) => {
  const history = useHistory();
  console.log(history.push);
  const location = useLocation();
  console.log(location);

  // fetch products by category
  const {
    data: itemDetails,
    isLoading,
    isError,
    isFetching,
  } = useQuery("item", () => fetchDetails(match.params.productId), {
    refetchOnWindowFocus: false,
  });

  // imports add cart function
  const { addItemToCart } = useProducts();

  // loading
  if (isLoading || isFetching) return <Loader />;

  // error message
  if (isError) return <Error />;

  const renderItemDetails = () => {
    document.title = itemDetails.name;
    return (
      <>
        <section className="container w-50 mx-auto my-4 bg-white">
          <div className="d-flex flex-row justify-content-evenly align-items-stretch p-4">
            <div className="w-50">
              <img
                className="w-100 thumb-nail"
                src={itemDetails.media.source}
                alt={itemDetails.name}
              />
            </div>
            <div
              className="row flex-column justify-content-evenly"
              style={{ maxWidth: "400px", minWidth: "300px" }}
            >
              <div className="col-12">
                <h1 className="h2">{itemDetails.name}</h1>
              </div>
              <div className="col-12">
                <h2>{itemDetails.price.formatted_with_symbol}</h2>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={itemDetails.checkout_url.display}
                  className="btn btn-danger w-50"
                >
                  Buy Now
                </a>
                <button
                  className="btn btn-warning w-50 ms-2"
                  onClick={() => addItemToCart(itemDetails)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <button
            className="btn btn-outline-secondary position-absolute"
            style={backButtonStyle}
            onClick={history.goBack}
          >
            Back
          </button>
        </section>
        <section
          style={descriptionStyle}
          className="container w-50 mx-auto bg-white p-5"
        >
          <p
            dangerouslySetInnerHTML={{
              __html: itemDetails.description,
            }}
          />
        </section>
      </>
    );
  };

  return <>{renderItemDetails()}</>;
};

export default ProductDetails;

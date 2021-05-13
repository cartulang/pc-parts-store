import { useQuery } from "react-query";
import { useProducts } from "../context/ProductsContext";
import { commerce } from "../lib/Commerce";

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

const ProductDetails = () => {
  const {
    data: productDetails,
    status,
    productId,
    addItemToCart,
  } = useProducts();

  if (status === "error") {
    return <h1 style={errorStyles}>Error fetching data</h1>;
  }

  if (status === "loading") {
    return (
      <div
        className="spinner-border text-dark"
        role="status"
        style={spinnerStyles}
      ></div>
    );
  }

  const filteredProduct = productDetails.data.filter(product => {
    return product.id === productId;
  });

  console.log(filteredProduct);

  if (filteredProduct <= 0) return <h1 style={errorStyles}>Item not found</h1>;

  return (
    <>
      <section
        style={sectionStyles}
        className="container w-50 border border-danger mx-auto my-4 bg-white"
      >
        <div className="d-flex flex-row justify-content-evenly align-items-stretch p-4">
          <div className="w-50">
            <img
              className="w-100 thumb-nail"
              src={filteredProduct[0].media.source}
              alt={filteredProduct[0].name}
            />
          </div>
          <div
            className="row flex-column justify-content-evenly"
            style={{ maxWidth: "400px", minWidth: "300px" }}
          >
            <div className="col-12">
              <h1 className="h1">{filteredProduct[0].name}</h1>
            </div>
            <div className="col-12">
              <h2>{filteredProduct[0].price.formatted_with_symbol}</h2>
            </div>

            <div className="col-12 d-flex justify-content-center">
              <button className="btn btn-danger w-50">Buy Now</button>
              <button
                className="btn btn-warning w-50 ms-2"
                onClick={() => addItemToCart(filteredProduct[0].id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container w-50 mx-auto bg-white p-4">
        <p
          dangerouslySetInnerHTML={{
            __html: filteredProduct[0].description,
          }}
        />
      </section>
    </>
  );
};

export default ProductDetails;

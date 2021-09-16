import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useProducts();
  return (
    <div
      className="col-xl-3 col-lg-5 col-md-5  p-4 mx-1 my-3 bg-white"
      key={product.id}
      style={{ height: "max-content" }}
    >
      <img
        className="w-100 product-image"
        src={product.media.source}
        alt={product.name}
      />
      <p className="text-center h5 mb-4">{product.name}</p>
      <p className="text-center h5">{product.price.formatted_with_symbol}</p>
      <div className="row justify-content-evenly mt-5">
        <Link
          to={`/products/${product.id}`}
          className="btn btn-outline-secondary mt-2 col-lg-auto col-md-auto col-xs-12"
        >
          Details
        </Link>
        <button
          className="btn btn-primary  mt-2 col-lg-auto col-md-auto"
          onClick={() => addItemToCart(product.id, 1)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

import Loader from "../components/Loader";
import Error from "../components/Error";

import { useProducts } from "../context/ProductsContext";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { fetchDetails } from "../api/productsApi";

const descriptionStyle = {
	position: "relative",
	top: "2rem",
	minWidth: "300px",
};

const ProductDetails = () => {
	const { productId } = useParams();
	const { addItemToCart } = useProducts();
	// fetch products by category
	const {
		data: itemDetails,
		isLoading,
		isError,
		isFetching,
	} = useQuery("item", () => fetchDetails(productId), {
		refetchOnWindowFocus: false,
		retry: false,
	});

	// loading
	if (isLoading || isFetching) return <Loader />;

	// error message
	if (isError) return <Error />;

	const renderItemDetails = () => {
		document.title = itemDetails.name;
		return (
			<>
				<section
					className="container w-50 mx-auto pt-4 bg-white"
					style={{ minWidth: "300px", position: "relative", top: "4rem" }}
				>
					<div className="row justify-content-evenly align-items-stretch">
						<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-sm-12 col-xs-12">
							<img
								className="w-100 h-100 thumb-nail"
								src={itemDetails.media.source}
								alt={itemDetails.name}
							/>
						</div>
						<div className="row col-xl-8 col-lg-7 col-md-12 col-sm-12 col-xs-12 flex-column justify-content-evenly">
							<div className="col-12">
								<h1 className="h2 mt-4 text-center">{itemDetails.name}</h1>
							</div>
							<div className="col-xs-12">
								<h2 className="text-center">
									{itemDetails.price.formatted_with_symbol}
								</h2>
							</div>
							<div className="row col-lg-12 col-md-12 col-xs-12 justify-content-center align-items-center mx-auto w-100">
								<a
									target="_blank"
									rel="noreferrer"
									href={itemDetails.checkout_url.display}
									className="btn btn-danger mt-2 col-xl-4 col-lg-5 col-md-12 col-sm-12 col-xs-12 mx-1"
								>
									Buy Now
								</a>
								<button
									className="btn btn-warning mt-2 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mx-1"
									onClick={() => addItemToCart(itemDetails)}
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				</section>
				<section
					style={descriptionStyle}
					className="container w-50 mx-auto mt-5 bg-white p-5"
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

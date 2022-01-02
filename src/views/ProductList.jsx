// components
import Loader from "../components/Loader";
import Error from "../components/Error";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";

// hooks
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

// functions
import { fetchProducts } from "../api/productsApi";
import { useLayoutEffect, useState } from "react";
import NotFound from "./Not Found";

const ProductList = () => {
	const params = useParams();
	const [page, setPage] = useState(params["page"] || 1);

	const {
		data: products,
		isLoading,
		isError,
	} = useQuery(["products", page], () => fetchProducts(page), {
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		retry: false,
	});

	useLayoutEffect(() => {
		document.title = "Products";
	}, []);

	if (isLoading) return <Loader />;

	if (isError) return <Error />;

	return (
		<section className="container-fluid d-flex flex-column justify-content-center align-items-center">
			<div className="row w-75 mx-auto justify-content-evenly">
				{!products.data ? (
					<NotFound />
				) : (
					<>
						<h1 className="h1 border-bottom border-dark py-5 mt-5">Shop</h1>
						{products.data.map((product) => {
							return (
								// products card
								<ProductCard product={product} key={product.id} />
							);
						})}
					</>
				)}
			</div>
			<Pagination page={page} products={products} setPage={setPage} />
		</section>
	);
};

export default ProductList;

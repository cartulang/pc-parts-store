import "./css/app.css";
import Home from "./views/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./views/ProductList";
import ProductDetails from "./views/ProductDetails";
import Categories from "./views/Categories";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./views/Not Found";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App bg-light">
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path="/" exact={true} element={<Home />} />
				<Route path="/products" element={<ProductList />}>
					<Route path=":page" element={<ProductList />} />
				</Route>
				<Route path="/details/:productId" element={<ProductDetails />} />
				<Route path="/category" element={<Categories />}>
					<Route path=":categoryName" element={<Categories />} />
					<Route path=":categoryName/:page" element={<Categories />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;

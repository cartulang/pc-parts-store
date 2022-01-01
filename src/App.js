import "./css/app.css";
import Home from "./views/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./views/ProductList";
import ProductDetails from "./views/ProductDetails";
import Categories from "./views/Categories";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import NotFound from "./views/Not Found";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App bg-light">
				<ScrollToTop />
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />

					<Route path="/products" exact component={ProductList} />

					<Route path="/products/:productId" component={ProductDetails} />

					<Route path="/category/:categoryName" component={Categories} />

					<Route path="*" component={NotFound} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

import "bootstrap/dist/css/bootstrap.css";
import "./css/app.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Categories from "./components/Categories";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./components/Cart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App y-4">
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <ProductList />
          </Route>
          <Route path="/categories" exact>
            <Categories />
          </Route>
          <Route path="/details" exact>
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

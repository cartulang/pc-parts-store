import "bootstrap/dist/css/bootstrap.css";
import "./css/app.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Categories from "./components/Categories";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/Not Found";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/products" exact component={ProductList} />

          <Route path="/products/:productId" component={ProductDetails} />

          <Route path="/category/:categoryName" component={Categories} />

          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

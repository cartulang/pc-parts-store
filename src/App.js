import "bootstrap/dist/css/bootstrap.css";
import "./css/app.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App bg-light y-4">
      <Navbar />
      <Categories />
      {/* <ProductDetails /> */}
      {/* <ProductList /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;

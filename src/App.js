import "bootstrap/dist/css/bootstrap.css";
import "./css/app.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { useProducts } from "./context/ProductsContext";

function App() {
  const { products } = useProducts();
  console.log(products);
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

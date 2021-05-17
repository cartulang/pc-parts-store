import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { useState } from "react";
import Cart from "./Cart";

const cartStyles = {
  position: "absolute",
  top: "-0.5rem",
  right: "-0.75rem",
  fontWeight: "600",
  color: "#fff",
  backgroundColor: "#dc3545",
  width: "20px",
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  userSelect: "none",
};

const Navbar = () => {
  const [isCartOpen, setCartIsOpen] = useState(false);
  const { cart } = useProducts();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-collapse">
      <div className="container-fluid d-flex justify-content-between align-items-center w-75">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="cart position-relative order-lg-1">
          <GiShoppingCart
            size={"30px"}
            color={"#fff"}
            style={{ cursor: "pointer" }}
            onClick={() => setCartIsOpen(!isCartOpen)}
          ></GiShoppingCart>

          <span style={cartStyles}>
            {!cart ? "0" : cart.total_items.toString()}
          </span>
        </div>

        <div className="collapse navbar-collapse w-100" id="navbarScroll">
          <p className="navbar-brand m-0">PC Parts</p>
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link
                to="/pc-parts-store"
                className="nav-link active"
                aria-current="page"
              >
                HOME
              </Link>
            </li>

            {/* categories */}

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle active btn"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CATEGORIES
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/category/processors" className="dropdown-item">
                    PROCESSORS
                  </Link>
                </li>
                <li>
                  <Link to="/category/graphics-card" className="dropdown-item">
                    GRAPHICS CARD
                  </Link>
                </li>
                <li>
                  <Link to="/category/motherboard" className="dropdown-item">
                    MOTHERBOARD
                  </Link>
                </li>
                <li>
                  <Link to="/category/ram" className="dropdown-item">
                    RAM
                  </Link>
                </li>
                <li>
                  <Link to="/category/storage" className="dropdown-item">
                    STORAGE
                  </Link>
                </li>
                <li>
                  <Link to="/category/monitor" className="dropdown-item">
                    MONITOR
                  </Link>
                </li>
              </ul>
            </li>

            {/* browse products */}
            <li className="nav-item">
              <Link to="/products" className="nav-link active">
                PRODUCTS
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Cart isCartOpen={isCartOpen} setCartIsOpen={setCartIsOpen} />
    </nav>
  );
};

export default Navbar;

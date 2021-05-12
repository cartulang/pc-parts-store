import { GiShoppingCart } from "react-icons/gi";

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
};

const Navbar = () => {
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
            role="button"
          ></GiShoppingCart>

          <span style={cartStyles}>0</span>
        </div>

        <div className="collapse navbar-collapse w-100" id="navbarScroll">
          <p className="navbar-brand m-0">PC Parts</p>
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link active"
                role="button"
                aria-current="page"
              >
                HOME
              </a>
            </li>

            {/* categories */}

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle active btn"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CATEGORIES
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    PROCESSORS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    GRAPHICS CARD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    MOTHERBOARD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    RAM
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    STORAGE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    MONITOR
                  </a>
                </li>
              </ul>
            </li>

            {/* browse products */}
            <li className="nav-item">
              <a href="#" className="nav-link active" role="button">
                Products
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

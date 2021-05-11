import ram from "../img/ram.jpg";
import cpu from "../img/cpu.jpg";
import gpu from "../img/gpu.jpg";
import storage from "../img/storage.jpg";
import motherboard from "../img/motherboard.jpg";
import monitor from "../img/monitor.jpg";

const ProductCatergories = () => {
  return (
    <>
      <div className="row w-75 mx-auto">
        <h1 className="h1 border-bottom border-danger pb-2 my-4 text-center">
          BROWSE CATERGORIES
        </h1>
        <div className="col-xl col-sm-6 position-relative catergory-card">
          <a href="#">
            <span className="bg-danger text-light px-3 py-1">
              GRAPHICS CARD
            </span>
            <img
              src={gpu}
              alt="graphics-card"
              className="img-thumbnail w-100"
            />
          </a>
        </div>

        <div className="col-xl col-sm-6 position-relative catergory-card">
          <a href="#">
            <span className="bg-danger text-light px-3 py-1">PROCESSORS</span>
            <img src={cpu} alt="processor" className="img-thumbnail  w-100" />
          </a>
        </div>

        <div className="col-xl col-sm-6 position-relative catergory-card">
          <a href="#">
            <span className="bg-danger text-light px-3 py-1">RAM</span>
            <img src={ram} alt="ram" className="img-thumbnail  w-100" />
          </a>
        </div>

        <div className="col-xl col-sm-6 position-relative catergory-card">
          <a href="#">
            <span className="bg-danger text-light px-3 py-1">MOTHERBOARD</span>
            <img
              src={motherboard}
              alt="motherboard"
              className="img-thumbnail  w-100"
            />
          </a>
        </div>
      </div>
      <div className="row w-75 mx-auto mt-4">
        <div className="col-xl-3 col-sm-6 position-relative catergory-card">
          <a href="#">
            <span className="bg-danger text-light px-3 py-1">STORAGE</span>
            <img src={storage} alt="storage" className="img-thumbnail  w-100" />
          </a>
        </div>

        <div className="col-xl-3 col-sm-6 position-relative catergory-card">
          <a href="#">
            <span className="bg-danger text-light px-3 py-1">MONITOR</span>
            <img src={monitor} alt="storage" className="img-thumbnail  w-100" />
          </a>
        </div>

        <div className="col-xl-6 col-sm-6 d-flex justify-content-center align-items-center flex-column mt-4 text-center">
          <h2 className="h2">HAVING A HARD TIME?</h2>
          <h4 className="h4 mt-4 text-secondary">SEE ALL PROCDUCTS</h4>
          <a
            href="#"
            className="text-light bg-danger px-2 py-1 text-decoration-none mt-4"
          >
            SEE ALL PRODUCTS
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCatergories;

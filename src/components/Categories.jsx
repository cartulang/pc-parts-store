import { useProducts } from "../context/ProductsContext";

const sectionStyles = {
  paddingTop: "60px",
  border: "2px red solid",
};

const spinnerStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
};

const errorStyles = {
  transform: "translate(-50%,-50%)",
  position: "absolute",
  top: "50%",
  left: "50%",
};

const Categories = () => {
  const { data: products, status } = useProducts();

  if (status === "error") {
    return <h1 style={errorStyles}>Error fetching data</h1>;
  }

  if (status === "loading") {
    return (
      <div
        className="spinner-border text-dark"
        role="status"
        style={spinnerStyles}
      ></div>
    );
  }

  const filteredProducts = products.data.filter(product => {
    return product.categories[0].slug === "graphics-card";
  });

  return (
    <section className="container-fluid" style={sectionStyles}>
      <div className="row w-75 mx-auto justify-content-evenly">
        <h1 className="h1 border-bottom border-dark py-2">Shop</h1>
        {filteredProducts.map(product => {
          return (
            // products card
            <div className="col-3 p-4 mx-1 my-3 bg-white" key={product.id}>
              <img
                className="w-100 product-image"
                src={product.media.source}
                alt={product.name}
              />
              <p className="text-center h3">{product.name}</p>
              <div className="d-flex justify-content-evenly mt-5">
                <button
                  className="btn btn-outline-secondary"
                  id={product.id}
                  onClick={e => console.log(e.target.id)}
                >
                  Details
                </button>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;

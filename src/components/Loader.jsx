const spinnerStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
};

const Loader = () => {
  return (
    <div
      className="spinner-border text-dark"
      role="status"
      style={spinnerStyles}
    ></div>
  );
};

export default Loader;

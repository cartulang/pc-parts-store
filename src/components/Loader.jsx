const spinnerStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
};

const backgroundStyles = {
  backgroundColor: "#fff",
  position: "absolute",
  top: "0",
  bottom: "0",
  right: "0",
  left: "0",
};

const Loader = () => {
  return (
    <>
      <div style={backgroundStyles}>
        <div
          className="spinner-border text-dark"
          role="status"
          style={spinnerStyles}
        ></div>
      </div>
    </>
  );
};

export default Loader;

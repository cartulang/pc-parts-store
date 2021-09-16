import CarouselSlides from "./CarouselSlides";

const Carousel = () => {
  return (
    <section
      id="carouselExampleIndicators"
      className="carousel slide h-100 d-lg-block d-none vh-100"
      data-bs-ride="carousel"
    >
      <CarouselSlides />
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
};

export default Carousel;

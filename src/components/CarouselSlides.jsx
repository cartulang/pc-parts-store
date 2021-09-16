const CarouselSlides = () => {
  return (
    <>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>

      <div className="carousel-inner h-100">
        <div className="carousel-item active h-100">
          <img
            src="https://www.pugetsystems.com/pic_disp.php?id=61276"
            className="d-block w-100 h-100"
            alt=""
          />
        </div>

        <div className="carousel-item h-100">
          <img
            src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1493/innergigabyteimages/banner.jpg"
            className="d-block w-100 h-100"
            alt=""
          />
        </div>

        <div className="carousel-item h-100">
          <img
            src="https://cdn.shopify.com/s/files/1/1780/7915/files/AMD_Ryzen_5_5600X_CPU_-_From_TPS_Technologies_-_Main_Banner.jpg?v=1604513959"
            className="d-block w-100 h-100"
            alt=""
          />
        </div>

        <div className="carousel-item h-100">
          <img
            src="https://www.asus.com/us/site/motherboards/amd-ryzen-5000/websites/img/banner.jpg"
            className="d-block w-100 h-100"
            alt="ryzen"
          />
        </div>

        <div className="carousel-item h-100">
          <img
            src="https://dfestore.com/wp-content/uploads/2021/03/DEALER-DFE-2000-x-1000.jpeg"
            className="d-block w-100 h-100"
            alt=""
          />
        </div>

        <div className="carousel-item h-100">
          <img
            src="https://www.bermorzone.com.ph/wp-content/uploads/2020/09/nvidia-rtx-30-banner-l.jpg"
            className="d-block w-100 h-100"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CarouselSlides;

import ProductCategories from "../components/ProductCatergories";
import { useLayoutEffect } from "react";
import Carousel from "../components/Carousel";

const Home = () => {
  // changes html page title
  useLayoutEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <main>
        <Carousel />
        <ProductCategories />
      </main>
    </>
  );
};

export default Home;

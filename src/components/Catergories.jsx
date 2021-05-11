import ProductCategories from "./ProductCatergories";
import Brands from "./Brands";

const Categories = () => {
  return (
    <section className="container-fluid pb-4 mt-4">
      <Brands />
      <ProductCategories />
    </section>
  );
};

export default Categories;

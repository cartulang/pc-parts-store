import { useQuery } from "react-query";

import { fetchCategory } from "../api/productsApi";

import Loader from "../components/Loader";
import Error from "../components/Error";
import ProductCard from "../components/ProductCard";

const Categories = ({ match }) => {
  const {
    data: productsByCategory,
    isLoading,
    isError,
    isFetching,
  } = useQuery(
    ["category", match.params.categoryName],
    () => fetchCategory(match.params.categoryName),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  if (isLoading || isFetching) return <Loader />;

  if (isError) return <Error />;

  const renderItems = () => {
    if (!productsByCategory.data || !productsByCategory) {
      return (
        <h1
          className="position-absolute top-50 start-50"
          style={{ transform: "translateX(-7%)" }}
        >
          Item not found
        </h1>
      );
    }
    document.title = productsByCategory.data[0].categories[0].name;
    // renders item cards
    return (
      <>
        <h1 className="h1 border-bottom border-dark py-5 mt-5">
          {productsByCategory.data[0].categories[0].name}
        </h1>
        {productsByCategory.data.map(product => {
          // products card
          return <ProductCard product={product} key={product.id} />;
        })}
      </>
    );
  };

  return (
    <section className="container-fluid">
      <div className="row w-75 mx-auto justify-content-evenly">
        {renderItems()}
      </div>
    </section>
  );
};

export default Categories;

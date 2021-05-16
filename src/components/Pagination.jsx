import { Link } from "react-router-dom";

const Pagination = ({ products, setPage, page }) => {
  const totalPages = products.meta.pagination.total_pages;
  let currentPage = products.meta.pagination.current_page;

  const prevButton = () => {
    setPage(prev => prev - 1);
  };

  const nextButton = () => {
    setPage(prev => prev + 1);
  };

  return (
    <nav aria-label="Page navigation example" className="mx-auto my-4">
      <ul className="pagination">
        <li className={currentPage <= 1 ? "page-item disabled" : "page-item"}>
          <button className="page-link" onClick={prevButton}>
            Previous
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" href="#">
            {currentPage}
          </button>
        </li>
        <li
          className={
            currentPage >= totalPages ? "page-item disabled" : "page-item"
          }
        >
          <Link className="page-link" onClick={nextButton}>
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

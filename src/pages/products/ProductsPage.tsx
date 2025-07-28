import classes from "./ProductsPage.module.css";
import FullItem from "../home/Item";
import DropdownField from "./DropDownSelect";
import { Link, useSearchParams } from "react-router-dom";

const PRODUCTS_PER_PAGE = 25;

const allProducts = Array.from({ length: 6969 }, (_, i) => ({
  id: (i + 1).toString(),
  name: `Product #${i + 1}`, // <-- Added name here
  price: parseFloat((Math.random() * 100).toFixed(2)),
  description: `Description for product #${i + 1}`,
  imageUrl: undefined,
  category: ["Men", "Women", "Child", "Undefined"][i % 4], // mock category cycling
}));

const getPageNumbers = (currentPage: number, totalPages: number, maxButtons = 5) => {
  let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  let end = start + maxButtons - 1;
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - maxButtons + 1);
  }
  const pages = [];
  for (let i = start; i <= end; i++) pages.push(i);
  return pages;
};

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const category = searchParams.get("category") || "All";

  // Filter products by category (if not "All")
  const filteredProducts =
    category === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === category);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
  const currentItems = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const handleCategoryChange = (value: string) => {
    setSearchParams({ category: value, page: "1" });
  };

  const handlePriceChange = (range: { min: string; max: string }) => {
    // Price filter logic can be added here later
    console.log("Price filter:", range);
  };

  const handleSubmit = () => {
    console.log("Submitting filters...");
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setSearchParams({ category, page: pageNumber.toString() });
  };

  const pageNumbers = getPageNumbers(page, totalPages);

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <div className={classes.categoryList}>
        <h2>{category === "All" ? "All Categories" : `Category: ${category}`}</h2>

          {["All", "Men", "Women", "Child", "Undefined"].map((cat) => (
            <h3
              key={cat}
              className={classes.category}
              style={{
                fontWeight: category === cat ? "bold" : "normal",
                cursor: "pointer",
              }}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </h3>
          ))}
        </div>
        <div style={{ paddingTop: "40px" }}>
          <DropdownField
            label={category === "All" ? "Select Gender" : `Category: ${category}`}
            type="select"
            options={["Men", "Women", "Child", "Undefined"]}
            onChange={handleCategoryChange}
          />
          <DropdownField label="Price Range" type="inputRange" onChange={handlePriceChange} />
          <button onClick={handleSubmit} style={{ marginTop: "20px", padding: "10px 20px" }}>
            Submit
          </button>
        </div>
      </div>

      <div>
        <h2 style={{ padding: "1rem 1rem" }}>
          Total Items: {filteredProducts.length} | Page {page} of {totalPages}
        </h2>
        <div className={classes.items}>
          {currentItems.map((item) => (
            <Link
              key={item.id}
              to={`/productsPage/${item.category}/${item.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FullItem item={item} /> {/* Pass item here */}
            </Link>
          ))}
        </div>

        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <button onClick={() => goToPage(page - 1)} disabled={page <= 1} className={classes.arrow}>
            ←
          </button>

          {pageNumbers[0] > 1 && (
            <>
              <button onClick={() => goToPage(1)}>1</button>
              {pageNumbers[0] > 2 && <span style={{ padding: "0 5px" }}>...</span>}
            </>
          )}

          {pageNumbers.map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => goToPage(pageNum)}
              style={{
                fontWeight: page === pageNum ? "bold" : "normal",
                backgroundColor: page === pageNum ? "#007bff" : "transparent",
                color: page === pageNum ? "white" : "black",
                borderRadius: 4,
                padding: "5px 10px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              {pageNum}
            </button>
          ))}

          {pageNumbers[pageNumbers.length - 1] < totalPages && (
            <>
              {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                <span style={{ padding: "0 5px" }}>...</span>
              )}
              <button onClick={() => goToPage(totalPages)}>{totalPages}</button>
            </>
          )}

          <button onClick={() => goToPage(page + 1)} disabled={page >= totalPages} className={classes.arrow}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

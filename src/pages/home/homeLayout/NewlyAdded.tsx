import FullItem from "../Item";
import ProductLine from "../../../components/products/ProductLine";
import { Link } from "react-router-dom";

const products = [
  { id: "1", category: "men", name: "Red Shirt", price: 19.99},
  { id: "2", category: "women", name: "Blue Jeans", price: 29.99 },
  // ...more products
];

const NewlyAdded = () => {
  return (
    <ProductLine title="🆕 New Added" action={<a href="/productsPage">See all</a>}>
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/category/${product.category}/item/${product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <FullItem item={product} />
        </Link>
      ))}
    </ProductLine>
  );
};

export default NewlyAdded;
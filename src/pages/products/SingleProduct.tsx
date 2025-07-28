import classes from "./SingleProduct.module.css";

import ProductGallery from "./ProductGallery";
import ProductLine from "../../components/products/ProductLine";
import FullItem from "../home/Item";
import Selector from "../../components/Selector";
import QuantityInput from "../../components/QuantityInput";

import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

const SingleProduct = () => {
  const dummyItem = {
    id: 0,
    name: "gigi",
    price: 15.99,
    description: "Loading...",
    imageUrl: "https://img.freepik.com/premium-vector/www-vector-icon-design-illustration_1174953-28452.jpg",
  };
  

  const { category, itemId } = useParams<{ category?: string; itemId?: string }>();

  const [selectedSize, setSelectedSize] = useState("m");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(14.99);

  // Mocked product data for demo — you can replace with real fetching by itemId
  const mockItem = {
    id: itemId || "123",
    name: "UZARMAZARI DILDO",
    price: 14.99,
    image:
      "https://img.freepik.com/premium-vector/www-vector-icon-design-illustration_1174953-28452.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid eos magnam...",
    gallery: [
      "https://img.freepik.com/premium-vector/www-vector-icon-design-illustration_1174953-28452.jpg",
      "https://img.freepik.com/free-vector/space-login-landing-page-template_23-2148260289.jpg",
      "https://img.freepik.com/free-psd/3d-rendering-interface-icon_23-2151553990.jpg",
      "https://img.freepik.com/free-psd/3d-rendering-interface-icon_23-2151553990.jpg",
      "https://img.freepik.com/free-psd/3d-rendering-interface-icon_23-2151553990.jpg",
      "https://img.freepik.com/premium-photo/businessman-using-blank-search-navigation-bar-virtual-computer-interface-screen-pressing-it-with-his-finger-copyspace-your-keywords-website-address-within-bar_254268-3453.jpg",
    ],
  };

  /*
  // Future: fetch product info by itemId
  useEffect(() => {
    if (!itemId) return;

    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/items/${itemId}`);
        if (!res.ok) throw new Error("Failed to fetch item");
        const data = await res.json();
        setPrice(data.price);
        // set other states if needed
      } catch (err) {
        console.error("Error fetching item:", err);
      }
    };
    fetchItem();
  }, [itemId]);
  */

  const sizes = [
    { label: "S", value: "s" },
    { label: "M", value: "m" },
    { label: "L", value: "l" },
    { label: "XL", value: "xl" },
  ];

  const addToCart = () => {
    console.log("Added to cart:", {
      quantity,
      selectedSize,
      itemId,
    });
  };

  const addToFavorites = () => {
    console.log('kutuu')
  }

  return (
    <div>
      <div className={classes.container}>
        <div>
          <div style={{ marginBottom: "1rem" }}>
            {/* Breadcrumb navigation */}
            <Link to="/productsPage" style={{ marginRight: 8 }}>
              Products
            </Link>
            {category && (
              <>
                / <Link to={`/productsPage?category=${category}`} style={{ margin: "0 8px" }}>
                  {category}
                </Link>
              </>
            )}
            {itemId && <> / <span>{itemId}</span></>}
          </div>

          <ProductGallery images={mockItem.gallery} />
        </div>

        <div className={classes.rightSide}>
          <div style={{ display: "flex", gap: "20px" }}>
            <div>69/69/2025, 24:24</div>
            <div>123 naxva</div>
          </div>

          <div className={classes.info}>
            <div style={{display: "flex", gap: "1rem"}}>
              <h2>{mockItem.name}</h2>
              <h2>{mockItem.price}$</h2>
            </div>
            <p className={classes.description}>{mockItem.description}</p>
          </div>

          <div className={classes.cartLogic}>
            <div>
              <Selector
                options={sizes}
                selected={selectedSize}
                onChange={setSelectedSize}
                label="Choose Size"
              />
              <QuantityInput
                label="Quantity:"
                value={quantity}
                onChange={setQuantity}
                min={1}
                max={10}
              />
            </div>

            <div
              style={{ display: "flex", gap: "20px", justifyContent: "space-around" }}
            >
              <h2>Total: ${(mockItem.price * quantity).toFixed(2)}</h2>
              <button className={classes.orderButton}>Order</button>
            </div>
          </div>
        </div>

        <div className={classes.box}>
          <h2>{mockItem.price}$</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <button className={classes.favoritesButton} onClick={addToFavorites}>Add to Favorites</button>
            <button className={classes.cartButton} onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className={classes.specifications}>
        <div className={classes.singleSpecificationShadow}>
          <div className={classes.singleSpecification}>
            <h2 style={{ color: "gray" }}>Made with</h2>
            <h2>Cotton</h2>
          </div>
        </div>
        <div className={classes.singleSpecificationShadow}>
          <div className={classes.singleSpecification}>
            <h2 style={{ color: "gray" }}>Gender</h2>
            <h2>Men</h2>
          </div>
        </div>
        <div className={classes.singleSpecificationShadow}>
          <div className={classes.singleSpecification}>
            <h2 style={{ color: "gray" }}>Made with</h2>
            <h2>Cotton</h2>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "5rem 0",
          padding: "0 15%",
          backgroundColor: "#dddddd",
        }}
      >
    <ProductLine title="Similar Products" action={<Link to="/productsPage">See all</Link>}>
      <FullItem item={dummyItem} />
      <FullItem item={dummyItem} />
      <FullItem item={dummyItem} />
      <FullItem item={dummyItem} />
      <FullItem item={dummyItem} />
      <FullItem item={dummyItem} />
    </ProductLine>
      </div>
    </div>
  );
};

export default SingleProduct;

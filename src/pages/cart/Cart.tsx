import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import type { Carti } from "../../types/types";

const Cart = () => {
  const [favorites, setFavorites] = useState<Carti[]>([
    {
      id: "1",
      name: "Red Shirt",
      size: 'M',
      price: 19.99,
      image: "https://img.freepik.com/premium-vector/www-vector-icon-design-illustration_1174953-28452.jpg",
      description: "A comfortable red shirt made with 100% cotton.",
      selected: false,
    },
    {
      id: "2",
      name: "Blue Jeans",
      size: 'M',
      price: 39.99,
      image: "https://img.freepik.com/free-psd/3d-rendering-interface-icon_23-2151553990.jpg",
      description: "Stylish blue jeans with a modern fit.",
      selected: false,
    },
    {
      id: "3",
      name: "Leather Wallet",
      size: 'M',
      price: 29.99,
      image: "https://img.freepik.com/premium-photo/businessman-using-blank-search-navigation-bar-virtual-computer-interface-screen-pressing-it-with-his-finger-copyspace-your-keywords-website-address-within-bar_254268-3453.jpg",
      description: "Classic black leather wallet with multiple compartments.",
      selected: false,
    },
  ]);

    // -- Prepare this useEffect for backend fetching --
  // Uncomment and adapt when backend ready
  /*
  useEffect(() => {
    async function fetchFavorites() {
      try {
        const response = await fetch("/api/favorites");
        if (!response.ok) throw new Error("Failed to fetch favorites");
        const data = await response.json();
        setFavorites(data); // assumes backend returns Favorite[]
      } catch (err) {
        console.error(err);
      }
    }
    fetchFavorites();
  }, []);
  */

  const allSelected = favorites.every(item => item.selected);
  const total = favorites
    .filter(item => item.selected)
    .reduce((sum, item) => sum + item.price, 0);

  const handleAddToCart = (id: string) => {
    console.log("Add to cart:", id);
  };

  const handleRemove = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSelectChange = (id: string) => {
    setFavorites((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleSelectAll = () => {
    const newValue = !allSelected;
    setFavorites((prev) =>
      prev.map((item) => ({ ...item, selected: newValue }))
    );
  };

  return (
    <div className={classes.mtavari}>
      <div className={classes.container}>
        <label className={classes.selectAll}>
          <input type="checkbox" className={classes.checkboxInput} checked={allSelected} onChange={handleSelectAll} />
          <h2>Select All</h2>
        </label>
        <div className={classes.line}></div>

        {favorites.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onAddToCart={handleAddToCart}
            onRemove={handleRemove}
            onSelectChange={handleSelectChange}
          />
        ))}
      </div>

      <div className={classes.border}></div>
  <div className={classes.details}>
    <h2>Order Summary</h2>
    <div className={classes.line}></div>
    <div className={classes.list}>
      {favorites
        .filter((item) => item.selected)
        .map((item) => (
          <h3 key={item.id} className={classes.item}>
            {item.name} — ${item.price.toFixed(2)}
          </h3>
        ))}
    </div>
    <div className={classes.line}></div>
    <h2 style={{ marginBottom: "0.5rem" }}>
      Total: ${total.toFixed(2)}
    </h2>
    <button className={classes.checkoutButton}>Checkout</button>
  </div>
      </div>
  );
};

export default Cart;

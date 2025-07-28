import { useState, useEffect } from "react";
import FavoriteItem from "./FavoriteItem";
import classes from "./Favorites.module.css";
import type { Favorite } from "../../types/types";

const Favorites = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([
    {
      id: "1",
      name: "Red Shirt",
      price: 19.99,
      image:
        "https://img.freepik.com/premium-vector/www-vector-icon-design-illustration_1174953-28452.jpg",
      description: "A comfortable red shirt made with 100% cotton.",
    },
    {
      id: "2",
      name: "Blue Jeans",
      price: 39.99,
      image: "https://img.freepik.com/free-psd/3d-rendering-interface-icon_23-2151553990.jpg",
      description: "Stylish blue jeans with a modern fit.",
    },
    {
      id: "3",
      name: "Leather Wallet",
      price: 29.99,
      image:
        "https://img.freepik.com/premium-photo/businessman-using-blank-search-navigation-bar-virtual-computer-interface-screen-pressing-it-with-his-finger-copyspace-your-keywords-website-address-within-bar_254268-3453.jpg",
      description: "Classic black leather wallet with multiple compartments.",
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

  // Handle add to cart click (connect to your cart logic later)
  const handleAddToCart = (id: string) => {
    console.log("Add to cart:", id);
  };

  // Handle remove favorite — local state for now
  const handleRemove = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total price
  const total = favorites.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={classes.mtavari}>
      <div className={classes.container}>
        {favorites.map((item) => (
          <FavoriteItem
            key={item.id}
            item={item}
            onAddToCart={handleAddToCart}
            onRemove={handleRemove}
          />
        ))}
      </div>

      <div className={classes.border}></div>

      <div className={classes.details}>
        <h2>Favorites</h2>
        {favorites.map((item) => (
          <h3 key={item.id}>
            {item.name} — ${item.price.toFixed(2)}
          </h3>
        ))}
        <div className={classes.lastLine}></div>
        <h2 style={{ paddingTop: "1rem" }}>Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Favorites;


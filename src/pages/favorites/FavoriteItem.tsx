import type { FavoriteItemProps } from "../../types/types";
import classes from "./FavoriteItem.module.css";



const FavoriteItem: React.FC<FavoriteItemProps> = ({ item, onAddToCart, onRemove }) => {
  return (
    <div className={classes.favoriteContainer}>
      <div style={{ display: "flex" }}>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src={item.image} alt={item.name} />
        </div>
        <div className={classes.texts}>
          <h2>
            {item.name} — ${item.price.toFixed(2)}
          </h2>
          <p>{item.description}</p>
        </div>
      </div>

      <div className={classes.buttons}>
        <button
          className={classes.cartButton}
          onClick={() => onAddToCart?.(item.id)}
        >
          Add To Cart
        </button>
        <button
          className={classes.removeButton}
          onClick={() => onRemove?.(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FavoriteItem;

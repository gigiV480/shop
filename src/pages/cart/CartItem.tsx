import type { CartItemProps } from "../../types/types";
import classes from "./CartItem.module.css";



// const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
//   return (
//     <div className={classes.favoriteContainer}>
//       <div style={{ display: "flex" }}>
//         <div className={classes.imageWrapper}>
//           <img className={classes.image} src={item.image} alt={item.name} />
//         </div>
//         <div className={classes.texts}>
//           <h2>
//             {item.name} — ${item.price.toFixed(2)}
//           </h2>
//           <p>{item.description}</p>
//         </div>
//       </div>

//         <button
//           className={classes.removeButton}
//           onClick={() => onRemove?.(item.id)}
//         >
//           🗑️
//         </button>
//     </div>
//   );
// };

// export default CartItem;

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onSelectChange }) => {
  return (
    <div className={classes.cartContainer}>
      <div style={{ display: "flex", alignItems: "center" }}>
      <div className={classes.checkboxWrapper}>
      <input
        type="checkbox"
        checked={item.selected || false}
        onChange={() => onSelectChange?.(item.id)}
        className={classes.checkboxInput}
      />
    </div>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src={item.image} alt={item.name} />
        </div>
        <div className={classes.texts}>
          <h2>
            {item.name} — ${item.price.toFixed(2)}
          </h2>
          <p>{item.description}</p>
          <h4>Size: {item.size}</h4>
        </div>
      </div>

      <button
        className={classes.removeButton}
        onClick={() => onRemove?.(item.id)}
      >
        🗑️
      </button>
    </div>
  );
};


export default CartItem
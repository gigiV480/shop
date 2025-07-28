// import classes from "./Item.module.css"

// const FullItem = () => {
//   return (
//     <div className={classes.fullItem}>
//       <div className={classes.imageWrapper}>
//         <img
//           src="https://img.freepik.com/premium-vector/www-vector-icon-design-illustration_1174953-28452.jpg?ga=GA1.1.37993709.1736340019&semt=ais_hybrid&w=740"
//           alt="example"
//           className={classes.image}
//         />
//         <span className={classes.textOverlay}>♡</span>
//       </div>
//       <p className={classes.description}>magari veshia geficebiii dsamkm</p>
//       <h3 className={classes.price}>15.99$</h3>
//     </div>
//   )
// }

// export default FullItem

import classes from "./Item.module.css";

type ItemData = {
  id: string | number;
  name: string;
  price: number | string;
  imageUrl?: string;
};

type ItemProps = {
  item: ItemData; // Required now, because FullItem only displays an item summary
};

const FullItem = ({ item }: ItemProps) => {
  const fallbackImage =
    "https://img.freepik.com/premium-vector/www-vector-icon-design-illustration_1174953-28452.jpg";

  return (
    <div className={classes.fullItem}>
      <div className={classes.imageWrapper}>
        <img
          src={item.imageUrl || fallbackImage}
          alt={item.name}
          className={classes.image}
        />
        <span className={classes.textOverlay}>♡</span>
      </div>
      <h3 className={classes.name}>{item.name}</h3>
      <h3 className={classes.price}>{item.price}$</h3>
    </div>
  );
};

export default FullItem;



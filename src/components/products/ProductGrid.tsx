import type { ReactNode } from "react";
import classes from "./ProductGrid.module.css";

type ProductGridProps = {
  title?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
};

const ProductGrid = ({ title, action, children }: ProductGridProps) => {
  return (
    <div className={classes.container}>
      {(title || action) && (
        <div className={classes.text}>
          <h1>{title}</h1>
          <h2>{action}</h2>
        </div>
      )}

      <div className={classes.itemsWrapper}>
        {children}
      </div>
    </div>
  );
};

export default ProductGrid;

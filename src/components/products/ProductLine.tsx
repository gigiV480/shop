import { type ReactNode, useState, Children} from "react";
import classes from "./ProductLine.module.css";

type ProductLineProps = {
  title?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
};

const MAX_VISIBLE = 6;

const ProductLine = ({ title, action, children }: ProductLineProps) => {
  const childArray = Children.toArray(children);
  const totalPages = Math.ceil(childArray.length / MAX_VISIBLE);
  const [pageIndex, setPageIndex] = useState(0);

  const handleNext = () => {
    if (pageIndex < totalPages - 1) {
      setPageIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={classes.container}>
      {(title || action) && (
        <div className={classes.text}>
          <h1 >{title}</h1>
          <h2 >{action}</h2>
        </div>
      )}

      <div className={classes.itemCont}>
        {pageIndex > 0 && (
          <button onClick={handlePrev} className={classes.arrow}>
            ←
          </button>
        )}

        <div className={classes.viewport}>
          <div
            className={classes.itemsWrapper}
            style={{
              transform: `translateX(-${pageIndex * 100}%)`,
            }}
          >
            {childArray.map((child, i) => (
              <div key={i} className={classes.item}>
                {child}
              </div>
            ))}
          </div>
        </div>

        {pageIndex < totalPages - 1 && (
          <button onClick={handleNext} className={classes.arrow}>
            →
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductLine;

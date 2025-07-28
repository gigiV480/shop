import { useState } from "react";
import classes from "./DetailedSearch.module.css";

type DetailedSearchProps = {
  onClose: () => void;
};

const DetailedSearch = ({ onClose }: DetailedSearchProps) => {
  const [selectedCondition, setSelectedCondition] = useState("new");
  const [originState, setOriginState] = useState("italy");
  const [range, setRange] = useState({ min: "", max: "" });

  const options = [
    { label: "New", value: "new" },
    { label: "Second Hand", value: "secondhand" },
  ];
  const origin = [
    { label: "Italy", value: "italy" },
    { label: "Spain", value: "spain" },
    { label: "China", value: "china" },
    { label: "Georgia", value: "georgia" },
  ];

  const handleRangeChange = (key: "min" | "max", value: string) => {
    const updated = { ...range, [key]: value };
    setRange(updated);
  };

  const clear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelectedCondition("new");
    setOriginState("italy");
    setRange({ min: "", max: "" });
    console.log("Filters cleared");
  };

  const search = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Searching with:", { selectedCondition, originState, range });
    onClose(); // Optionally close modal on search
  };

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h2>Detailed Filters</h2>
        <button className={classes.xButton} onClick={onClose}>
          ×
        </button>
      </div>

      <form className={classes.form} onSubmit={search}>
        <div className={classes.gap}>
          <h2>Branch</h2>
          <select className={classes.select}>
            <option value="">Select An Option</option>
            <option value="saburtalo">Saburtalo - kandelaki 5</option>
            <option value="gldani">Gldani - kerchi 16</option>
          </select>
        </div>

        <div className={classes.gap}>
          <h2>Price</h2>
          <div className={classes.prices}>
            <input
              type="number"
              placeholder="Min"
              value={range.min}
              onChange={(e) => handleRangeChange("min", e.target.value)}
              className={classes.input}
            />
            <p>─</p>
            <input
              type="number"
              placeholder="Max"
              value={range.max}
              onChange={(e) => handleRangeChange("max", e.target.value)}
              className={classes.input}
            />
          </div>
        </div>

        <div className={classes.gap}>
          <h2>Condition</h2>
          <div className={classes.options}>
            {options.map((opt) => (
              <button
                key={opt.value}
                className={`${classes.optionButton} ${
                  selectedCondition === opt.value ? classes.selected : ""
                }`}
                onClick={() => setSelectedCondition(opt.value)}
                type="button"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className={classes.gap}>
          <h2>Item's Origin</h2>
          <div className={classes.options}>
            {origin.map((opt) => (
              <button
                key={opt.value}
                className={`${classes.optionButton} ${
                  originState === opt.value ? classes.selected : ""
                }`}
                onClick={() => setOriginState(opt.value)}
                type="button"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className={classes.endButtons}>
          <button className={classes.clearButton} onClick={clear}>
            Clear Filters
          </button>
          <button className={classes.searchButton} type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default DetailedSearch;

import type { ReactNode } from "react";
import classes from "./Selector.module.css";

type Option = {
  label: string;
  value: string;
};

type SingleSelectorProps = {
  options: Option[];
  selected: string;
  onChange: (value: string) => void;
  label?: ReactNode;
};

const Selector = ({ options, selected, onChange, label }: SingleSelectorProps) => {
  return (
    <div className={classes.selector}>
      {label && <div className={classes.label}>{label}</div>}
      <div className={classes.options}>
        {options.map((opt) => (
          <button
            key={opt.value}
            className={`${classes.optionButton} ${selected === opt.value ? classes.selected : ""}`}
            onClick={() => onChange(opt.value)}
            type="button"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selector;

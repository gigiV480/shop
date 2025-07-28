import classes from "./QuantityInput.module.css";

type QuantityInputProps = {
  label?: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

const QuantityInput = ({
  label,
  value,
  onChange,
  min = 0,
  max = 99,
}: QuantityInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(min, Math.min(max, Number(e.target.value)));
    onChange(newValue);
  };

  const increment = () => {
    if (value < max) onChange(value + 1);
  };

  const decrement = () => {
    if (value > min) onChange(value - 1);
  };

  return (
    <div className={classes.selector}>
      {label && <div className={classes.label}>{label}</div>}
      <div className={classes.quantity}>
        <button
          type="button"
          onClick={decrement}
          disabled={value <= min}
          className={classes.button}
        >
          –
        </button>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          className={classes.input}
        />
        <button
          type="button"
          onClick={increment}
          disabled={value >= max}
          className={classes.button}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityInput;

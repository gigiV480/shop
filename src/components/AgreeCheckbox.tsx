import React from 'react';
import styles from './AgreeCheckbox.module.css';

interface AgreeCheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: React.ReactNode;
}

const AgreeCheckbox: React.FC<AgreeCheckboxProps> = ({
  checked,
  onChange,
  label = 'I agree to the Terms and Conditions',
}) => {
  return (
    <label className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={styles.checkbox}
      />
      <span className={styles.labelText}>{label}</span>
    </label>
  );
};

export default AgreeCheckbox;

// DropdownField.tsx
import React, { useState } from 'react';

import classes from "./DropDownSelect.module.css"

type FieldType = 'select' | 'inputRange';

interface DropdownFieldProps {
  label: string;
  type: FieldType;
  options?: string[]; // for select
  onChange: (value: any) => void;
}

const DropdownField: React.FC<DropdownFieldProps> = ({ label, type, options = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [range, setRange] = useState({ min: '', max: '' });
  const [arrow, setArrow] = useState(true)

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  };

  const dropDown = () =>{
    setIsOpen(!isOpen)
    setArrow(!arrow)
  }

  const handleRangeChange = (key: 'min' | 'max', value: string) => {
    const updated = { ...range, [key]: value };
    setRange(updated);
    onChange(updated);
  };

  return (
    <div style={{ width: '250px', marginBottom: '20px' }}>
      <div
        onClick={dropDown}
        style={{
          cursor: 'pointer',
          fontWeight: 600,
        }}
      >
        {label} {arrow ? "⬆" : "⬇" }
      </div>

      {isOpen && (
        <div style={{ padding: '10px'}}>
          {type === 'select' && options.map((opt) => (
            <div key={opt} onClick={() => handleSelect(opt)} style={{ cursor: 'pointer', padding: '5px 0' }}>
              {opt}
            </div>
          ))}

          {type === 'inputRange' && (
            <div style={{ display: 'flex', justifyContent: "center", gap: "2px"}}>
              <input
                type="number"
                placeholder="Min"
                value={range.min}
                onChange={(e) => handleRangeChange('min', e.target.value)}
                className={classes.input}
              />
              <input
                type="number"
                placeholder="Max"
                value={range.max}
                onChange={(e) => handleRangeChange('max', e.target.value)}
                className={classes.input}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownField;

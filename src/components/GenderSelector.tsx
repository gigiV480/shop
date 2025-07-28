import React from 'react';

interface GenderSelectorProps {
  value: string;
  onChange: (gender: string) => void;
  className?: string;
  selectedClassName?: string;
}

const GenderSelector: React.FC<GenderSelectorProps> = ({
  value,
  onChange,
  className = '',
  selectedClassName = '',
}) => {
  const options = ['Male', 'Female', 'Other'];

  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {options.map((gender) => {
        const isSelected = value === gender;
        const buttonClasses = `${className} ${isSelected ? selectedClassName : ''}`.trim();

        return (
          <button
            key={gender}
            type="button"
            onClick={() => onChange(gender)}
            className={buttonClasses}
          >
            {gender}
          </button>
        );
      })}
    </div>
  );
};

export default GenderSelector;

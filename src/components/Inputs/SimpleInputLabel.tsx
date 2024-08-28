import React from 'react';

interface LabelProps {
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}

const SimpleInputLabel: React.FC<LabelProps> = ({ htmlFor, className, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-xl leading-6 text-white ${className}`}
    >
      {children}
    </label>
  );
};

export default SimpleInputLabel;

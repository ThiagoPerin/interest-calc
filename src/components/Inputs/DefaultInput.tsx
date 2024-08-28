import React from 'react';

interface InputProps {
  children: React.ReactNode;
}

const DefaultInput: React.FC<InputProps> = ({ children }) => {
  return (
    <div className="w-full max-w-sm m-4">
      {children}
    </div>
  );
};

export default DefaultInput;

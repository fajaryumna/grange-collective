import React from 'react';

export const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = 'border-2 flex flex-row items-center justify-center transition-colors duration-200';
  const variants = {
    primary: 'bg-primary text-black hover:bg-gray-200',  //button white
    secondary: 'bg-gray-custom text-tertiary hover:bg-gray-200',  //button gray
    tertiary: 'bg-tertiary text-primary', //button brown
};

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
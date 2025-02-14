import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = "" }) => {
  const baseStyle = 'px-6 py-2 flex flex-row items-center justify-center font-cormoran-garamond';
  const variants = {
    primary: 'border-2 bg-primary text-black transition duration-300 hover:bg-red-500 cursor-pointer', 
    secondary: 'bg-gray-custom text-tertiary transition duration-300 hover:bg-gray-300 cursor-pointer',
    tertiary: 'bg-tertiary text-primary transition duration-300 hover:bg-yellow-500 cursor-pointer',
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

export default Button;

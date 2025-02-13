import React from 'react';
const Button = ({ children, onClick, variant = 'primary', className = "" }) => {
  const baseStyle = 'border-2 px-6 py-2 flex flex-row items-center justify-center transition-colors duration-200 cursor-pointer font-cormoran-garamond';
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

export default Button;
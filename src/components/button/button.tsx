import React from 'react';

interface ButtonProps {
  children: React.ReactNode;  
  onClick?: () => void;       
}

const Button: React.FC<ButtonProps> = ({ children, onClick, }) => {
  return (
    <button
      onClick={onClick} 
      className={"px-5 py-2 text-white rounded font-primaryBold w-48 bg-gradient-to-r from-primary to-secondary "}
      >
      {children}
    </button>
  );
};

export default Button;

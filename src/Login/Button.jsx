import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`flex justify-center items-center text-white cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );


  
};

export default Button;

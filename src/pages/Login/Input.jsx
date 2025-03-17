import React from "react";

const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`px-4 py-2 w-[80%] max-w-[300px] text-xl text-white rounded-full 
                  border border-fuchsia-700 border-solid bg-stone-950 h-[50px] 
                  max-sm:text-lg max-sm:h-[40px] mx-auto block ${className}`}
      {...props}
    />
  );
};

export default Input;

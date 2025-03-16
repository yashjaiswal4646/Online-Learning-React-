import React from "react";

const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`px-4 py-0 w-full text-xl text-white rounded-full border border-fuchsia-700 border-solid bg-stone-950 h-[60px] max-sm:text-lg max-sm:h-[45px] ${className}`}
      {...props}
    />
  );
};

export default Input;

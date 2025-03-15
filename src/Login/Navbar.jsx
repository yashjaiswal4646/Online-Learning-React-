import React from "react";
import Button from "./Button";

const Navbar = () => {
  const navItems = ["Home", "Course", "About", "Admin"];

  return (
    <header className="flex justify-between items-center px-10 py-5 border-b border-solid bg-stone-950 border-b-fuchsia-900 shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-sm:p-4">
      <h1 className="text-4xl text-fuchsia-700 max-sm:text-3xl">CodeHub</h1>
      {/* Centered the navigation items */}
      <nav className="flex items-center justify-center flex-1 gap-16 max-md:gap-5 max-sm:hidden">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-3xl text-white transition-colors duration-300 cursor-pointer max-md:text-3xl hover:text-fuchsia-500"
          >
            {item}
          </a>
        ))}
      </nav>
      <Button className="px-3 py-1.5 text-xl bg-fuchsia-700 rounded-[32px] max-sm:px-2.5 max-sm:py-1 max-sm:text-base transition-colors duration-300 hover:bg-fuchsia-500">
        SignUp
      </Button>
    </header>
  );
};

export default Navbar;
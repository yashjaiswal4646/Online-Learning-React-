import React from "react";
const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-7 py-6 w-full text-4xl border border-fuchsia-900 border-solid bg-stone-950 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
      <h1 className="text-black w-[143px]">
        <span className="text-white">Code</span><span className="text-purple-900">Hub</span>
      </h1>
      <nav className="flex justify-center flex-grow gap-10 whitespace-nowrap">
        <a href="#" className="text-white hover:text-fuchsia-500">
          Home
        </a>
        <a href="#" className="text-white hover:text-fuchsia-500">
          Course
        </a>
        <a href="#" className="text-white hover:text-fuchsia-500">
          About
        </a>
      </nav>
      <div className="flex gap-5 text-xl whitespace-nowrap">
        <button className="px-5 pt-1.5 pb-3.5 bg-fuchsia-700 rounded-[32px] text-white hover:bg-fuchsia-600">
          Login
        </button>
        <button className="px-3 pt-1.5 pb-3 bg-fuchsia-700 rounded-[32px] text-white hover:bg-fuchsia-600">
          SignUp
        </button>
      </div>
    </header>
  );
};

export default Navbar;

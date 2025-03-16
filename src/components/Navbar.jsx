import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b shadow-lg bg-stone-950 border-fuchsia-900">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto lg:px-12">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white">
          <span>Code</span>
          <span className="text-purple-900">Hub</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-10 text-lg lg:flex">
          <Link to="/" className="text-white transition hover:text-fuchsia-500">
            Home
          </Link>
          <Link to="/course" className="text-white transition hover:text-fuchsia-500">
            Course
          </Link>
          <Link to="/about" className="text-white transition hover:text-fuchsia-500">
            About
          </Link>
        </nav>

        {/* Authentication Buttons - Hidden on Mobile */}
        <div className="hidden gap-4 lg:flex">
          <button className="px-5 py-2 text-white transition rounded-full bg-fuchsia-700 hover:bg-fuchsia-600">
            Login
          </button>
          <button className="px-5 py-2 text-white transition rounded-full bg-fuchsia-700 hover:bg-fuchsia-600">
            SignUp
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-white lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="flex flex-col items-center gap-6 py-6 lg:hidden bg-stone-950">
          <Link to="/" className="text-white transition hover:text-fuchsia-500" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/course" className="text-white transition hover:text-fuchsia-500" onClick={() => setIsOpen(false)}>
            Course
          </Link>
          <Link to="/about" className="text-white transition hover:text-fuchsia-500" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <div className="flex flex-col gap-4 mt-4">
            <button className="px-5 py-2 text-white transition rounded-full bg-fuchsia-700 hover:bg-fuchsia-600">
              Login
            </button>
            <button className="px-5 py-2 text-white transition rounded-full bg-fuchsia-700 hover:bg-fuchsia-600">
              SignUp
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

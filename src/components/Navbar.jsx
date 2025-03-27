import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-stone-950 shadow-lg border-b border-fuchsia-900">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white">
          <span>Code</span>
          <span className="text-fuchsia-500 ">Hub</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-10 text-lg">
          <Link to="/" className="text-white hover:text-fuchsia-500 transition">
            Home
          </Link>
          <Link to="/course" className="text-white hover:text-fuchsia-500 transition">
            Course
          </Link>
          <Link to="/about" className="text-white hover:text-fuchsia-500 transition">
            About
          </Link>
        </nav>

        {/* Authentication Buttons - Hidden on Mobile */}
        <div className="hidden lg:flex gap-4">
          <button className="px-5 py-2 bg-fuchsia-700 rounded-full text-white hover:bg-fuchsia-600 transition">
            Login
          </button>
          <button className="px-5 py-2 bg-fuchsia-700 rounded-full text-white hover:bg-fuchsia-600 transition">
            SignUp
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Fixed Position) */}
      <nav
        className={`absolute top-full left-0 w-full bg-stone-950 py-6 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <Link to="/" className="text-white hover:text-fuchsia-500 transition" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/course" className="text-white hover:text-fuchsia-500 transition" onClick={() => setIsOpen(false)}>
            Course
          </Link>
          <Link to="/about" className="text-white hover:text-fuchsia-500 transition" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <div className="flex flex-col gap-4 mt-4">
            <button className="px-5 py-2 bg-fuchsia-700 rounded-full text-white hover:bg-fuchsia-600 transition">
              Login
            </button>
            <button className="px-5 py-2 bg-fuchsia-700 rounded-full text-white hover:bg-fuchsia-600 transition">
              SignUp
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

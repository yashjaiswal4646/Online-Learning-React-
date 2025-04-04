import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu
import profileImg from "/images/profile.png";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b shadow-lg bg-stone-950 border-fuchsia-900">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto lg:px-12">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white">
          <span>Code</span>
          <span className="text-fuchsia-500">Hub</span>
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

        {/* Profile Image */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/profile">
            <img src={profileImg} alt="Profile" className="w-10 h-10 rounded-full border border-white" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-white lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`absolute top-full left-0 w-full bg-stone-950 py-6 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <Link to="/" className="text-white transition hover:text-fuchsia-500" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/course" className="text-white transition hover:text-fuchsia-500" onClick={() => setIsOpen(false)}>
            Course
          </Link>
          <Link to="/about" className="text-white transition hover:text-fuchsia-500" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/profile" className="text-white transition hover:text-fuchsia-500" onClick={() => setIsOpen(false)}>
            Profile
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar1;

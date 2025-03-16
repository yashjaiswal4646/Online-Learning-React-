const Header = () => {
    return (
      <header className="flex items-center justify-between px-7 py-0 border-b border-solid bg-stone-950 border-b-fuchsia-900 h-[95px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-sm:px-4 max-sm:py-0 max-sm:h-[70px]">
      <h1 className="text-3xl font-bold text-white">
          <span>Code</span>
          <span className="text-purple-900">Hub</span>
        </h1>
        <nav className="flex justify-center flex-1 gap-16 max-md:gap-8 max-sm:hidden">
          <button className="text-4xl text-white cursor-pointer max-md:text-3xl hover:text-fuchsia-500">
            Home
          </button>
          <button className="text-4xl text-white cursor-pointer max-md:text-3xl hover:text-fuchsia-500">
            Course
          </button>
          <button className="text-4xl text-white cursor-pointer max-md:text-3xl hover:text-fuchsia-500">
            About
          </button>
        </nav>
        <button className="px-5 py-1.5 text-xl text-white bg-fuchsia-700 cursor-pointer rounded-[32px] max-sm:px-4 max-sm:py-1 max-sm:text-base transition-colors duration-300 hover:bg-fuchsia-500">
          Login
        </button>
      </header>
    );
  };
  
  export default Header;
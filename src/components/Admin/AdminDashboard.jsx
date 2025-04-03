import React from "react";
import { Link, useNavigate } from "react-router-dom";


const AdminDashboard = () => {

  const navigate = useNavigate();

  
  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Courses", path: "/admin/courses" },
    { name: "Students", path: "/admin/students" },
    { name: "Instructors", path: "/admin/instructors" },
  ];
  const stats = ["Total Student = 0", "Course = 0", "Active Instruction = 0"];

  return (
    <div className="flex min-h-screen text-white bg-black">
      {/* Sidebar */}
      <nav className="p-7 bg-fuchsia-700 bg-opacity-10 w-[450px] max-sm:p-4 max-sm:w-full">
        <h2 className="text-4xl mb-14">Admin Panel</h2>
        {navItems.map((item) => (
          <Link to={item.path} key={item.name}>
          <button
            key={item}
            className="block text-3xl transition-transform duration-300 cursor-pointer mb-9 relative z-0 hover:z-10 hover:scale-110 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:text-fuchsia-400"
          >
            {item.name}
          </button>
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Navigation Bar */}
        <header className="flex items-center justify-center px-10 py-5 border-b border-solid bg-stone-950 border-b-fuchsia-900 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-sm:p-4">
          <h1 className="text-3xl font-bold text-white">
            <span>Code</span>
            <span className="text-fuchsia-500">Hub</span>
          </h1>
        </header>

        {/* Dashboard Content */}
        <main className="relative flex-1 p-7 max-sm:p-4">
          <h2 className="text-4xl mb-9">Dashboard</h2>
          <section className="flex gap-12 mt-10 max-md:flex-wrap max-sm:flex-col max-sm:gap-5">
            {stats.map((stat) => (
              <div
                key={stat}
                className="text-2xl text-center bg-fuchsia-900 rounded-3xl h-[71px] w-[300px] max-md:w-[calc(50%_-_24px)] max-sm:w-full flex items-center justify-center"
              >
                {stat}
              </div>
            ))}
          </section>

          {/* Logout Button */}
          <button className="absolute text-2xl border border-fuchsia-700 border-solid cursor-pointer bg-fuchsia-700 bg-opacity-30 bottom-[46px] h-[51px] right-[30px] rounded-[34px] w-[165px] max-sm:static max-sm:mt-10 max-sm:w-full hover:bg-opacity-50 transition-colors" onClick={() => navigate("/admin/login")}>
            Logout
          </button>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminInstructor = () => {

  const navigate = useNavigate();

  
  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Courses", path: "/admin/courses" },
    { name: "Students", path: "/admin/students" },
    { name: "Instructors", path: "/admin/instructors" },
  ];

  const instructors = [
    {
      id: "101",
      name: "Dr. John Doe",
      email: "John2@gmail.com",
      coursesAssigned: "5",
    },
    {
      id: "102",
      name: "Prof. John Singh",
      email: "Jane3@gmail.com",
      coursesAssigned: "6",
    },
  ];

  return (
    <div className="flex min-h-screen text-white bg-black">
      {/* Sidebar */}
      <nav className="p-7 bg-fuchsia-700 bg-opacity-10 w-[450px] max-sm:p-4 max-sm:w-full">
        <h2 className="text-4xl mb-14">Admin Panel</h2>
        {menuItems.map((item) => (
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

        {/* Main Section with Add New Instructor */}
        <div className="relative flex-1 p-8 max-sm:p-4">
          <h1 className="mb-6 text-5xl text-white max-sm:text-4xl">
            Instructor
          </h1>
          <button className="mb-8 h-16 text-xl text-white border border-fuchsia-700 border-solid cursor-pointer bg-stone-950 w-[228px] max-sm:w-full transition-colors duration-300 hover:bg-fuchsia-700 hover:text-black">
            Add new instructor
          </button>

          {/* Instructor Table */}
          <table className="border border-white border-solid bg-stone-950 w-[878px] max-md:w-full max-sm:overflow-x-auto">
            <thead>
              <tr className="grid p-3 border-b border-solid border-b-white grid-cols-[1fr_1.5fr_2fr_1fr_1fr] max-sm:grid-cols-[150px_150px_200px_150px_150px]">
                <th className="text-xl text-left text-white">Instructor ID</th>
                <th className="text-xl text-left text-white">Name</th>
                <th className="text-xl text-left text-white">Email</th>
                <th className="text-xl text-left text-white">Course Assigned</th>
                <th className="text-xl text-left text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((instructor) => (
                <tr
                  key={instructor.id}
                  className="grid p-3 border-b border-solid border-b-white grid-cols-[1fr_1.5fr_2fr_1fr_1fr] max-sm:grid-cols-[150px_150px_200px_150px_150px]"
                >
                  <td className="text-base text-white">{instructor.id}</td>
                  <td className="text-base text-white">{instructor.name}</td>
                  <td className="text-base text-white">{instructor.email}</td>
                  <td className="text-base text-white">{instructor.coursesAssigned}</td>
                  <td className="flex items-center text-base text-white">
                    <div className="flex gap-3">
                      <button className="px-3 py-1 text-base text-white transition-colors duration-300 rounded-sm cursor-pointer bg-stone-900 hover:bg-fuchsia-700 hover:text-black">
                        Edit
                      </button>
                      <button className="px-3 py-1 text-base text-white transition-colors duration-300 rounded-sm cursor-pointer bg-stone-900 hover:bg-red-600 hover:text-black">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Logout Button */}
          <button className="absolute text-2xl border border-fuchsia-700 border-solid cursor-pointer bg-fuchsia-700 bg-opacity-30 bottom-[46px] h-[51px] right-[30px] rounded-[34px] w-[165px] max-sm:static max-sm:mt-10 max-sm:w-full hover:bg-opacity-50 transition-colors" onClick={() => navigate("/admin/login")}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminInstructor;

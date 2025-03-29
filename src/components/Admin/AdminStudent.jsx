import React from "react";
import { Link } from "react-router-dom";


const AdminStudent = () => {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Course", path: "/courses" },
    { name: "Student", path: "/students" },
    { name: "Instructor", path: "/instructors" },
    { name: "Setting", path: "/settings" },
  ];
  
  const studentData = [
    {
      id: "101",
      name: "Rahul Kumar",
      email: "rahulk@22gmail.com",
      enrollments: "1",
    },
    {
      id: "102",
      name: "Rohit Kumar",
      email: "rohitk33@gmail.com",
      enrollments: "2",
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

        {/* Student Table */}
        <main className="flex-1 p-7 max-sm:p-4">
          <h2 className="text-4xl mb-9">Student List</h2>

          <section className="border border-white border-solid bg-stone-950 w-[878px] max-md:overflow-x-auto max-md:w-full max-sm:overflow-x-auto max-sm:w-full">
            
            {/* Table Header */}
            <div className="flex px-0 py-2.5 border-b border-solid border-b-white">
              <div className="flex-1 px-5 py-0 text-xl text-left text-white max-sm:px-2.5 max-sm:py-0 max-sm:text-sm">
                Student ID
              </div>
              <div className="flex-1 px-5 py-0 text-xl text-left text-white max-sm:px-2.5 max-sm:py-0 max-sm:text-sm">
                Student Name
              </div>
              <div className="flex-1 px-5 py-0 text-xl text-left text-white max-sm:px-2.5 max-sm:py-0 max-sm:text-sm">
                Email ID
              </div>
              <div className="flex-1 px-5 py-0 text-xl text-left text-white max-sm:px-2.5 max-sm:py-0 max-sm:text-sm">
                Enrollments
              </div>
              <div className="flex-1 px-5 py-0 text-xl text-left text-white max-sm:px-2.5 max-sm:py-0 max-sm:text-sm">
                Actions
              </div>
            </div>

            {/* Table Rows */}
            {studentData.map((student) => (
              <div
                key={student.id}
                className="flex px-0 py-4 border-b border-solid border-b-white"
              >
                <div className="flex-1 px-5 py-0 text-base text-white max-sm:px-2.5 max-sm:py-0 max-sm:text-sm">
                  {student.id}
                </div>
                <div className="flex-1 px-5 py-0 text-base text-white max-sm:px-2.5 max-sm:py-0 max-sm:text-sm">
                  {student.name}
                </div>
                <div className="flex-1 px-5 py-0 text-base text-white max-sm:px-2.5 max-sm:py-0 max-sm:text-sm">
                  {student.email}
                </div>
                <div className="flex-1 px-5 py-0 text-base text-white max-sm:px-2.5 max-sm:py-0 max-sm:text-sm">
                  {student.enrollments}
                </div>
                <div className="flex-1 px-5 py-0 text-base text-white max-sm:px-2.5 max-sm:py-0 max-sm:text-sm">
                  <div className="flex gap-4 max-sm:flex-col max-sm:gap-1.5">
                  <button className="px-3 py-1 text-base text-white transition-colors duration-300 rounded-sm cursor-pointer bg-stone-900 hover:bg-fuchsia-700 hover:text-black">
                        Edit
                      </button>
                      <button className="px-3 py-1 text-base text-white transition-colors duration-300 rounded-sm cursor-pointer bg-stone-900 hover:bg-red-600 hover:text-black">
                        Delete
                      </button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Logout Button */}
          <button className="absolute text-2xl border border-fuchsia-700 border-solid cursor-pointer bg-fuchsia-700 bg-opacity-30 bottom-[46px] h-[51px] right-[30px] rounded-[34px] w-[165px] max-sm:static max-sm:mt-10 max-sm:w-full hover:bg-opacity-50 transition-colors">
            Logout
          </button>
        </main>
      </div>
    </div>
  );
};

export default AdminStudent;

import React from "react";

const AdminDashboard = () => {
  const menuItems = ["Dashboard", "Course", "Setting", "Student", "Instructor"];
  const courses = [
    {
      id: "101",
      name: "Introduction to Programming",
      instructor: "John Don",
      enrollment: "120",
    },
    {
      id: "102",
      name: "Web Development",
      instructor: "Jane Smith",
      enrollment: "100",
    },
  ];

  return (
    
    <div className="flex min-h-screen text-white bg-black">
      {/* Sidebar */}
      <nav className="p-7 bg-fuchsia-700 bg-opacity-10 w-[450px] max-sm:p-4 max-sm:w-full">
        <h2 className="text-4xl mb-14">Admin Panel</h2>
        {menuItems.map((item) => (
          <button
            key={item}
            className="block text-3xl transition-transform duration-300 cursor-pointer mb-9 relative z-0 hover:z-10 hover:scale-110 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:text-fuchsia-400"
          >
            {item}
          </button>
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
        <main className="flex-1 p-7 max-sm:p-4">
          <h2 className="text-4xl mb-9">Course List</h2>

          {/* Course Table */}
          <div className="border border-white border-solid bg-stone-950 max-sm:overflow-x-auto">
            <div className="grid px-4 py-2 border-b border-solid border-b-white grid-cols-[1fr_2fr_1fr_1fr_1fr] max-md:p-2 max-md:text-sm max-sm:min-w-[800px]">
              <div className="p-2 text-xl text-white">Course</div>
              <div className="p-2 text-xl text-white">Course Name</div>
              <div className="p-2 text-xl text-white">Instructor</div>
              <div className="p-2 text-xl text-white">Student Enroll</div>
              <div className="p-2 text-xl text-white">Actions</div>
            </div>

            {courses.map((course) => (
              <div
                key={course.id}
                className="grid px-4 py-2 border-b border-solid border-b-white grid-cols-[1fr_2fr_1fr_1fr_1fr] max-md:p-2 max-md:text-sm max-sm:min-w-[800px]"
              >
                <div className="p-2 text-base text-white">{course.id}</div>
                <div className="p-2 text-base text-white">{course.name}</div>
                <div className="p-2 text-base text-white">{course.instructor}</div>
                <div className="p-2 text-base text-white">{course.enrollment}</div>
                <div className="flex items-center p-2 text-base text-white">
                  <div className="flex gap-3">
                    <button className="px-3 py-1 text-base text-white rounded-sm cursor-pointer bg-stone-900">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-base text-white rounded-sm cursor-pointer bg-stone-900">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Logout Button */}
          <button className="absolute text-2xl border border-fuchsia-700 border-solid cursor-pointer bg-fuchsia-700 bg-opacity-30 bottom-[46px] h-[51px] right-[30px] rounded-[34px] w-[165px] max-sm:static max-sm:mt-10 max-sm:w-full hover:bg-opacity-50 transition-colors">
            Logout
          </button>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

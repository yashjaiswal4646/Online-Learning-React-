"use client";
import React from "react";

const AdminSettings = () => {
  const menuItems = ["Dashboard", "Course", "Student", "Instructor", "Setting"];

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

        {/* Main Section */}
        <div className="relative flex-1 p-8 max-sm:p-4">
          <h1 className="mb-6 text-5xl text-white max-sm:text-4xl">Settings</h1>

          {/* General Settings Section */}
          <section className="p-5 mb-8 rounded-xl bg-stone-900 max-sm:p-4">
            <h2 className="mb-4 text-2xl max-sm:text-2xl">General Settings</h2>
            <div className="mb-5">
              <label className="mb-2.5 text-base block">Site Title</label>
              <input
                type="text"
                placeholder="Enter Site Title"
                className="px-2.5 py-0 text-base rounded-sm bg-neutral-700 border-[none] h-[31px] text-stone-900 w-full"
              />
            </div>
            <div className="mb-5">
              <label className="mb-2.5 text-base block">Admin Email</label>
              <input
                type="email"
                placeholder="Enter Admin Email"
                className="px-2.5 py-0 text-base rounded-sm bg-neutral-700 border-[none] h-[31px] text-stone-900 w-full"
              />
            </div>
          </section>

          {/* Account Settings Section */}
          <section className="p-5 mb-8 rounded-xl bg-stone-900 max-sm:p-4">
            <h2 className="mb-4 text-2xl max-sm:text-2xl">Account Settings</h2>
            <div className="mb-5">
              <label className="mb-2.5 text-base block">Change Password</label>
              <input
                type="password"
                placeholder="Enter new Password"
                className="px-2.5 py-0 text-base rounded-sm bg-neutral-700 border-[none] h-[31px] text-stone-900 w-full"
              />
            </div>
            <div className="mb-5">
              <label className="mb-2.5 text-base block">Language</label>
              <input
                type="text"
                value="English"
                className="px-2.5 py-0 text-base rounded-sm bg-neutral-700 border-[none] h-[31px] text-stone-900 w-full"
              />
            </div>
          </section>

          {/* Save Button */}
          <button className="mb-8 h-16 text-xl text-white border border-fuchsia-700 border-solid cursor-pointer bg-stone-950 w-[228px] max-sm:w-full transition-colors duration-300 hover:bg-fuchsia-700 hover:text-black">
            Save Settings
          </button>

          {/* Logout Button */}
          <button className="absolute text-2xl border border-fuchsia-700 border-solid cursor-pointer bg-fuchsia-700 bg-opacity-30 bottom-[46px] h-[51px] right-[30px] rounded-[34px] w-[165px] max-sm:static max-sm:mt-10 max-sm:w-full hover:bg-opacity-50 transition-colors">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;

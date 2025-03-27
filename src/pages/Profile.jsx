import React from "react";
import profile from "/images/profile.png";

function Profile() {
  return (

    <div
        className="flex items-center justify-center min-h-screen px-6 text-white"
        style={{
          background:
            "radial-gradient(circle at top center, #410640 5%, #000000 50%)",
        }}
      >
    <main className="min-h-screen py-12 ">
        
      {/* Profile Section */}
      <section className="relative max-w-[800px] mx-auto mt-12 bg-stone-900 p-8 rounded-lg shadow-md">

        {/* Cross button */}
        <button
          className="absolute text-white transition bg-transparent rounded-full top-4 right-4 hover:text-red-500"
          onClick={() => console.log("Close button clicked")} // Add functionality here
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Profile Info */}
        <div className="flex items-center gap-6">
          <img
            src={profile}
            alt="Profile"
            className="w-[100px] h-[100px] rounded-full border-4 border-fuchsia-700"
          />
          <div className="text-white">
            <h2 className="text-3xl">RIZWAN ALI</h2>
            <p className="mt-1 text-lg text-gray-400">rali046@rku.ac.in</p>
          </div>
        </div>

        {/* Personal Details */}
        <div className="mt-8">
          <h3 className="text-2xl text-fuchsia-500">Personal Details</h3>
          <div className="grid grid-cols-2 gap-6 mt-4 text-white">
            
            <div>
              <label className="text-sm text-gray-400">Full Name</label>
              <div className="p-4 text-lg border rounded-lg bg-stone-800 border-fuchsia-700">
                RIZWAN ALI
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400">Email</label>
              <div className="p-4 text-lg border rounded-lg bg-stone-800 border-fuchsia-700">
                rali046@rku.ac.in
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400">Contact Number</label>
              <div className="p-4 text-lg border rounded-lg bg-stone-800 border-fuchsia-700">
                8252641019
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400">City</label>
              <div className="p-4 text-lg border rounded-lg bg-stone-800 border-fuchsia-700">
                Bihar
              </div>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 text-white transition rounded-lg bg-fuchsia-700 hover:bg-fuchsia-600">
            Logout
          </button>
        </div>
      </section>
    </main>
    </div>
  );
}

export default Profile;

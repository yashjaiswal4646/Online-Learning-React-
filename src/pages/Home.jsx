import React from "react";

export default function TextComponent() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top center, #410640 1%, #000000 20%)",
      }}
    >
      {/* Main Heading */}
      <div className="text-center font-semibold leading-tight space-y-4 mt-[120px]">
        <p className="font-bold lg:text-7xl md:text-5xl text-8xl">
          We only <span className="text-fuchsia-500 text-8xl">teach</span>
        </p>
        <p className="font-bold lg:text-8xl md:text-5xl text-4xl">
          what we are really really
        </p>
        <p className="font-bold lg:text-8xl md:text-5xl text-4xl">good at. Get</p>
      </div>

      {/* Image and Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-20 gap-10">
        {/* Image on the Left */}
        <div className="flex-shrink-0">
          <img className="h-[30rem] mt-20 ml-10" src="/images/Group132.png" alt="Illustration" />
        </div>

        {/* Text on the Right */}
        <div className="items-center justify-center text-center">
          <h1 className="text-4xl font-bold h-10 m-10">Trusted by 2M+<br />students</h1>
          <p className="mt-14 text-3xl m-10">
            Expand your skills with our trusted platform, chosen by millions worldwide.
          </p>
        </div>
      </div>

      {/* Mentorship Programs Section */}
      <div className="items-center justify-center text-center mt-20">
        <h1 className="text-6xl">Mentorship Programs</h1>
        <p className="text-3xl mt-5">Choose your program, get certified, and grab new career opportunities.</p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-between gap-10 mt-16 px-10">
        <button className="border-2 border-fuchsia-500 text-white px-8 py-4 rounded-full text-3xl transition hover:text-fuchsia-500">
          Web Development
        </button>
        <button className="border-2 border-fuchsia-500 text-white px-8 py-4 rounded-full text-3xl transition hover:text-fuchsia-500">
          Cyber Security
        </button>
        <button className="border-2 border-fuchsia-500 text-white px-8 py-4 rounded-full text-3xl transition hover:text-fuchsia-500">
          App Development
        </button>
      </div>

      {/* New Web Dev Cohort Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-black p-10 rounded-2xl shadow-lg mt-20 w-[90%] gap-10">
        {/* Left Section - Text */}
        <div className="lg:w-1/2 space-y-6">
          <span className="bg-fuchsia-800 border-bl text-white px-4 py-2 rounded-full text-lg font-semibold">
            Web Dev Cohort
          </span>
          <h1 className="text-4xl font-bold">
            Master full-stack web development with Web Dev Cohort -{" "}
            <span className="text-fuchsia-500">Live 1.0</span>
          </h1>
          <p className="text-1xl text-gray-300">
            Learn HTML, CSS, JS, React, Next.js, Node, Docker, databases like MongoDB/PostgreSQL,
            DevOps with AWS (ECR, EC2, CloudFront), modern workflows like Turbo Repo,
            TypeScript, and GitHub CI/CD.
          </p>
          <button className="bg-fuchsia-900 text-white px-5 py-2 rounded-full text-xl font-semibold transition hover:bg-fuchsia-500">
            Join now
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img className="m-10 " src="/images/Group133.png" alt="Web Dev Cohort" />
        </div>
      </div>

      {/* Companies Where Our Students Work Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-black p-10 rounded-2xl shadow-lg mt-4 w-[90%] ">
        {/* Left Section - Text */}
        <div className=" text-left">
          <h1 className="text-5xl font-bold">
            Companies Where Our <span className="text-fuchsia-500">Students Work</span>
          </h1>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center ">
          <img src="/images/Group134.png" alt="Company Logos" className="max-w-full " />
        </div>
      </div>
     </div>
  );
}
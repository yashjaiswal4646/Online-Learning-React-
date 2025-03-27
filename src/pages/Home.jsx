import React from "react";

export default function TextComponent() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden text-white"
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
        <p className="text-4xl font-bold lg:text-8xl md:text-5xl">
          what we are really really
        </p>
        <p className="text-4xl font-bold lg:text-8xl md:text-5xl">good at. Get</p>
      </div>

      {/* Image and Text Side by Side */}
      <div className="flex flex-col items-center justify-center gap-10 mt-20 md:flex-row">
        {/* Image on the Left */}
        <div className="flex-shrink-0">
          <img className="h-[30rem] mt-20 ml-10" src="/images/Group132.png" alt="Illustration" />
        </div>

        {/* Text on the Right */}
        <div className="items-center justify-center text-center">
          <h1 className="h-10 m-10 text-4xl font-bold">Trusted by 2M+<br />students</h1>
          <p className="m-10 text-3xl mt-14">
            Expand your skills with our trusted platform, chosen by millions worldwide.
          </p>
        </div>
      </div>

      {/* Mentorship Programs Section */}
      <div className="items-center justify-center mt-20 text-center">
        <h1 className="text-6xl">Mentorship Programs</h1>
        <p className="mt-5 text-3xl">Choose your program, get certified, and grab new career opportunities.</p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-between gap-10 px-10 mt-16">
        <button className="px-8 py-4 text-3xl text-white transition border-2 rounded-full border-fuchsia-500 hover:text-fuchsia-500">
          Web Development
        </button>
        <button className="px-8 py-4 text-3xl text-white transition border-2 rounded-full border-fuchsia-500 hover:text-fuchsia-500">
          Cyber Security
        </button>
        <button className="px-8 py-4 text-3xl text-white transition border-2 rounded-full border-fuchsia-500 hover:text-fuchsia-500">
          App Development
        </button>
      </div>

      {/* New Web Dev Cohort Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-black p-10 rounded-2xl shadow-lg mt-20 w-[90%] gap-10">
        {/* Left Section - Text */}
        <div className="space-y-6 lg:w-1/2">
          <span className="px-4 py-2 text-lg font-semibold text-white rounded-full bg-fuchsia-800 border-bl">
            Web Dev Cohort
          </span>
          <h1 className="text-4xl font-bold">
            Master full-stack web development with Web Dev Cohort -{" "}
            <span className="text-fuchsia-500">Live 1.0</span>
          </h1>
          <p className="text-gray-300 text-1xl">
            Learn HTML, CSS, JS, React, Next.js, Node, Docker, databases like MongoDB/PostgreSQL,
            DevOps with AWS (ECR, EC2, CloudFront), modern workflows like Turbo Repo,
            TypeScript, and GitHub CI/CD.
          </p>
          <button className="px-5 py-2 text-xl font-semibold text-white transition rounded-full bg-fuchsia-900 hover:bg-fuchsia-500">
            Join now
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="mt-10 lg:w-1/2 lg:mt-0">
          <img className="m-10 " src="/images/Group133.png" alt="Web Dev Cohort" />
        </div>
      </div>

      {/* Companies Where Our Students Work Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-black p-10 rounded-2xl shadow-lg mt-4 w-[90%] ">
        {/* Left Section - Text */}
        <div className="text-left ">
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
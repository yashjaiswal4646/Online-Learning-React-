import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home2() {
  let navigate = useNavigate();


  const courses = [
      {
        image: "/images/Group30.png",
        title: "Job Ready AI Powered Cohort: Web + DSA + Aptitude",
        price: "5999",
        originalPrice: "11999",
        discount: "50%",
        path: "/courses/web-development",
      },
      {
        image: "/images/Group34.png",
        title: "Online Ethical Hacking & Penetration Testing",
        price: "6999",
        originalPrice: "15000",
        discount: "50%",
        path: "/courses/hacking",
      },
      {
        image: "/images/Group35.png",
        title: "Online Flutter App Development Courses",
        price: "6999",
        originalPrice: "15000",
        discount: "50%",
        path: "/courses/flutter",
      },
      {
        image: "images/Group7.png",
        title: "Web Dev Cohort - Live 1.0",
        price: "5999",
        originalPrice: "8000",
        discount: "50%",
        path: "/courses/web-dev-cohort",
      },
      {
        image: "images/Group31.png",
        title: "Web Development Master Course",
        price: "5999",
        originalPrice: "6000",
        discount: "50%",
        path: "/courses/web-development-master",
      },
      {
        image: "images/Group32.png",
        title: "Complete Node.js + Express.js + MongoDB",
        price: "5999",
        originalPrice: "11999",
        discount: "50%",
        path: "/courses/nodejs",
      },
    ];
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top center, #410640 5%, #000000 15%)",
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
          <h1 className="text-4xl font-bold h-10 m-10">Trusted by <span className="text-fuchsia-500"> 2M+ </span>students</h1>
          <p className="mt-14 text-3xl m-10">
            Expand your skills <span className="text-fuchsia-500">with our trusted platform,</span>chosen by millions worldwide.
          </p>
        </div>
      </div>

      {/* Mentorship Programs Section */}
      <div className="items-center justify-center text-center mt-32">
        <h1 className="text-6xl">Mentorship Programs</h1>
        <p className="text-3xl mt-5">Choose your program, get certified, and grab new career opportunities.</p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-between gap-28 mt-24 px-10">
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
      <div className="flex flex-col lg:flex-row items-center justify-between bg-black p-10 rounded-2xl shadow-lg mt-20 w-[90%] gap-16 ">
        {/* Left Section - Text */}
        <div className="lg:w-1/2 space-y-6 ">
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
      <div>
        {/* Courses Grid Section */}
      <section className="flex flex-col items-center w-full px-6 max-md:px-5 max-md:mt-6">
        <h2 className="self-start w-full text-4xl text-white">
          Courses That Work
        </h2>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-20 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <article
              key={index}
              className="flex flex-col h-full border border-solid rounded-md border-fuchsia-700 bg-stone-950"
            >
              <div className="flex flex-col flex-grow p-5">
                {/* ✅ Correct Image Path */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-contain w-full h-48 rounded-md"
                />
                <div className="flex flex-col flex-grow w-full mt-5">
                  <h3 className="text-xl text-white">{course.title}</h3>
                  <div className="flex gap-4 mt-3.5">
                    <span className="px-2 py-1 text-sm text-white border rounded-md border-fuchsia-600 bg-fuchsia-950 bg-opacity-60">
                      LIVE BATCH
                    </span>
                    <span className="px-3 py-1 text-base text-white border border-solid rounded-md bg-fuchsia-950 bg-opacity-60 border-stone-900">
                      HINDI
                    </span>
                  </div>
                  <div className="flex justify-between gap-5 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-base text-white">
                        Limited Time Discount
                      </span>
                      <p className="mt-2 text-lg text-white">
                        ₹{course.price} (+ GST){" "}
                        <span className="text-gray-400 line-through">
                          ₹{course.originalPrice}
                        </span>
                      </p>
                    </div>
                    <span className="self-end text-base text-white">
                      {course.discount} OFF
                    </span>
                  </div>
                </div>
              </div>
              {/* View Details Button */}
              <div className="p-5">
                <button className="w-full px-6 py-2 text-xl text-white transition-colors border rounded-md border-fuchsia-500 bg-fuchsia-950 hover:bg-fuchsia-900" onClick={() => course.path && navigate(course.path)}>
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      </div>
     </div>
  );
}
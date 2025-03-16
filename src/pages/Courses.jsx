import React from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {

  let navigate = useNavigate();
  
  const courses = [
    {
      image: "/images/Group30.png", // ✅ Corrected image path
      title: "Job Ready AI Powered Cohort: Web + DSA + Aptitude",
      price: "5999",
      originalPrice: "11999",
      discount: "50%",
      path:"/courses/web-development"
    },
    {
      image: "/images/Group34.png",
      title: "Online Ethical Hacking & Penetration Testing",
      price: "7000",
      originalPrice: "15000",
      discount: "50%",
      path:"/courses/hacking"
    },
    {
      image: "/images/Group35.png",
      title: "Online Flutter App Development Courses",
      price: "7000",
      originalPrice: "15000",
      discount: "50%",
      path:"/courses/flutter"
    },
    {
      image: "images/Group7.png",
      title: "Web Dev Cohort - Live 1.0",
      price: "4000",
      originalPrice: "8000",
      discount: "50%",
      path:"/courses/web-dev-cohort"
    },
    {
      image: "images/Group31.png",
      title: "Web Development Master Course",
      price: "3000",
      originalPrice: "6000",
      discount: "50%",
      path:"/courses/web-development-master"
    },
    {
      image: "images/Group32.png",
      title: "Complete Node.js + Express.js + MongoDB",
      price: "6000",
      originalPrice: "11999",
      discount: "50%",
      path:"/courses/nodejs"
    },
  ];

  return (
    <>
      {/* Courses Header Section */}
      <section className="text-center mt-28 max-md:mt-10">
        <h2 className="text-white text-8xl max-md:text-4xl">
          We're not a <span className="text-[#A60AA3]">course</span> <br />
          <span className="text-[#A60AA3]">factory.</span>
        </h2>
        <p className="text-4xl text-white mt-9">
          We focus on courses that really help.
        </p>
      </section>

      {/* Courses Grid Section */}
      <section className="flex flex-col items-center w-full px-6 mt-20 max-md:px-5 max-md:mt-10">
        <h2 className="self-start w-full text-4xl text-white">
          Courses That Work
        </h2>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-20 mt-10 sm:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
};

export default Courses;

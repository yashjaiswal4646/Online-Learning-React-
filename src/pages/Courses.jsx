import React from "react";
import { useNavigate } from "react-router-dom";

const ViewDetailsButton = ({ path }) => {
  let navigate = useNavigate();
  return (
    <div className="flex justify-center p-5">
      <button
        className="px-8 py-2 text-2xl text-white transition-colors border rounded-md w-80 border-fuchsia-500 bg-fuchsia-950 hover:bg-fuchsia-900"
        onClick={() => path && navigate(path)}
      >
        View Details
      </button>
    </div>
  );
};

const Courses = () => {
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
    <>
      <div
        className="flex items-center justify-center min-h-screen px-6 text-white"
        style={{
          background: "radial-gradient(circle at top center, #410640 5%, #000000 50%)",
        }}
      >
        <section className="mb-32 text-center max-md:mt-10">
          <h2 className="text-white text-8xl max-md:text-4xl">
            We're not a <span className="text-[#A60AA3]">course</span> <br />
            <span className="text-[#A60AA3]">factory.</span>
          </h2>
          <p className="mt-6 text-4xl text-white">
            We focus on courses that really help.
          </p>
        </section>
      </div>

      <section className="flex flex-col items-center w-full px-6 max-md:px-5 max-md:mt-6">
        <h2 className="self-start w-full text-4xl text-white">Courses That Work</h2>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-20 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div key={index} className="flex flex-col h-full">
              <article className="flex flex-col flex-grow border border-solid rounded-md border-fuchsia-700 bg-stone-950">
                <div className="flex flex-col flex-grow p-5">
                  <img src={course.image} alt={course.title} className="object-contain w-full h-48 rounded-md" />
                  <div className="flex flex-col flex-grow w-full mt-5">
                    <h3 className="text-xl text-white">{course.title}</h3>
                    <div className="flex gap-4 mt-3.5">
                    <span className="px-3 py-1 ml-24 text-base text-center text-white border border-solid rounded-md bg-fuchsia-950 bg-opacity-60 border-stone-900">
                      HINDI
                    </span>
                    </div>
                    <div className="flex justify-between gap-5 mt-auto">
                      <div className="flex flex-col">
                        <span className="mt-4 text-base text-white">Limited Time Discount</span>
                        <p className="mt-2 text-lg text-white">
                          ₹{course.price} (+ GST) <span className="text-gray-400 line-through">₹{course.originalPrice}</span>
                        </p>
                      </div>
                      <span className="self-end px-3 py-1 text-base text-white border border-solid rounded-md bg-fuchsia-950 bg-opacity-60 border-stone-900">
                      {course.discount} OFF
                    </span>
                   </div>
                  </div>
                </div>
              </article>
              <ViewDetailsButton path={course.path} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;
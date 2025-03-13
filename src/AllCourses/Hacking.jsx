import React from "react";
import imghacking from "../Images/Group 34.png"
import roadmap from "../Images/Group 107.png"

export const Hacking = () => {
  return (
    <>
      <section className="flex flex-col items-center">
        <h2 className="mt-20 text-white text-8xl max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Online Ethical <span className="text-[#A21FB6]">Hacking </span>{" "}
          Courses
        </h2>
        <p className="items-center ml-3 text-4xl text-white mt-14 max-md:mt-10 max-md:max-w-full">
          Learn the basics of ethical hacking and cyber security with the best{" "}
          <br />
          online ethical hacker course in India. This training program is <br />
          designed for beginners and covers core concepts, hacking <br />
          methodologies, tools, techniques, and more.
        </p>
        <div className="flex flex-wrap gap-5 justify-between mt-36 w-full text-3xl text-black max-w-[1222px] max-md:mt-10 max-md:max-w-full">
          <button className="px-16 py-5 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
            Networking
          </button>
          <div className="flex flex-wrap gap-10 max-md:max-w-full">
            <button className="grow px-20 py-5 mr-20 whitespace-nowrap border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
              Linux
            </button>
            <button className="grow px-10 py-5 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit max-md:px-5 text-white hover:bg-fuchsia-900 transition-colors">
              Network Scanning
            </button>
          </div>
        </div>
      </section>

      <section className="mt-40 ml-20 w-full max-w-[1238px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-3/5 max-md:w-full">
            <article className="w-full px-px pt-px pb-12 mx-auto border border-solid rounded-xl border-fuchsia-700 bg-stone-950">
              <img
                loading="lazy"
                src={imghacking}
                alt="Course preview"
                className="object-contain w-full rounded-md aspect-[1.89]"
              />
              <div className="flex flex-wrap gap-3.5 mt-14 ml-4 text-3xl text-white">
                <span className="grow px-11 py-5 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit  hover:bg-fuchsia-900 transition-colors">
                  Language: Hindi
                </span>
                <span className="grow px-11 py-5 border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px] w-fit  hover:bg-fuchsia-900 transition-colors">
                  Certificate: YES
                </span>
              </div>
              <div className="flex gap-5 mx-3 mt-11">
                <div className="w-1/2">
                  <div className="px-7 pt-4 pb-7 text-3xl text-white border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px]  hover:bg-fuchsia-900 transition-colors">
                    Schedule: Mon-Sat
                    <br />
                    (8:30PM)
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="px-6 pt-3.5 pb-8 text-3xl text-white border-2 border-fuchsia-700 border-solid bg-stone-950 rounded-[50px]  hover:bg-fuchsia-900 transition-colors">
                    Total Content: 150+
                    <br /> Hours
                  </div>
                </div>
              </div>
            </article>
          </div>
          <aside className="flex flex-col items-start self-stretch w-2/5 my-auto text-white ml-9 max-md:mt-10">
            <h3 className="self-stretch text-4xl">
              Price 3000 <span className="text-2xl text-white">₹</span>
              <span className="text-2xl text-white line-through">6000</span> (+
              GST)
            </h3>
            <p className="mt-2.5 text-xl">Limited Time Discount Applied!</p>
            <button className="px-4 py-1.5 mt-5 text-4xl text-white rounded-2xl border border-fuchsia-500 border-solid bg-fuchsia-950 bg-opacity-80 hover:bg-opacity-100 transition-colors">
              Buy Now
            </button>
            <p className="mt-2.5 text-base">
              Batch Starts on{" "}
              <span className="text-[#A60AA3]">21st May, 25</span>
            </p>
          </aside>
        </div>
      </section>

      <section className="flex flex-col items-center w-full">
        <hr className="self-stretch w-full mt-20 border border-fuchsia-700 min-h-px" />
        <h2 className="mt-16 text-transparent text-9xl max-md:mt-10 max-md:text-4xl bg-gradient-to-t from-purple-200 to-purple-800 bg-clip-text">
          Zero To Job-Ready
        </h2>
        <p className="text-transparent text-8xl max-md:text-4xl bg-gradient-to-t from-purple-200 to-purple-800 bg-clip-text">
          in 7 months*
        </p>
        <h3 className="mt-32 text-5xl text-transparent max-md:mt-10 max-md:text-4xl bg-gradient-to-t from-purple-200 to-blue-800 bg-clip-text">
          What you will learn
        </h3>
        <img
          loading="lazy"
          src={roadmap}
          alt="Course curriculum overview"
          className="object-contain mt-14 w-full rounded-none aspect-[10.99] max-w-[1216px]"
        />
        <h2 className="text-white mt-14 text-9xl max-md:mt-10 max-md:text-4xl">
          Syllabus
        </h2>
        <p className="mt-2.5 text-5xl text-white max-md:text-4xl">
          Dominate. From <span className="text-[#A60AA3]">Start</span> to
          Victory.
        </p>
        <button className="px-10 py-7 mt-20 max-w-full text-2xl text-white border border-fuchsia-600 border-solid bg-fuchsia-900 bg-opacity-10 rounded-[101px] w-[365px] hover:bg-opacity-20 transition-colors">
          View Complete Syllabus
        </button>
      </section>

      <section className="flex flex-col items-center w-full">
        <h2 className="text-white mt-36 text-8xl max-md:mt-10 max-md:text-4xl">
          More value,Less Cost.
        </h2>
        <p className="text-3xl text-white mt-11 max-md:mt-10">
          Quality and value drive us, delivering more for less cost
        </p>
      </section>
    </>
  );
};

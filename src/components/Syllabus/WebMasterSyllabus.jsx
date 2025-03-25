import React from "react";

const WebMasterSyllabus = () => {
  const sections = [
    {
      title: "HTML Basics",
      items: [
        "Setting up tools to Wen Development, Basics of HTML",
        "Understanding and Handeling Forms and Input",
        "Selectors and Introduction to Styling, Different type of CSS",
      ],
    },
    {
      title: "CSS Basics",
      items: [
        "Selectors, Box Model, Styling Fonts and Images",
        "Learn About Height-Width",
      ],
    },
    {
      title: "Flex Box and Grid",
      items: [
        "CSS Flexbox, Responsiveness, Grid Container",
        "Minor Project based on HTML and CSS",
      ],
    },
    {
      title: "Animation and Responsiveness",
      items: [
        "Animation and keyframes , Transition, Shorthand Animation",
        "Media Query, Responsive Design of Text and Images",
        "Responsive Mini Project",
      ],
    },
    {
      title: "Tailwind Project",
      items: ["A Mini Project with Tailwind"],
    },
    {
      title: "JavaScript Basics",
      items: [
        "Introduction to JS, Variable, Datatypes,Operator Precidence",
        "Control Statements if else, loops, Switch Case, Array and Strings",
        "Scope Chaining, this keyword, Functions, Callback, Arrow Functions",
        "FIll, Filter, Map, Slice, Splice",
      ],
    },
    {
      title: "DOM Manipulation and Modern JS",
      items: [
        "DOM, BOM, Window Object, Mini Project",
        "Async-Await, Event Loop, Event Listners",
        "Classes and Exports, Getters and Setters, Promises, Fetch",
      ],
    },
    {
      title: "JS MINi Project",
      items: ["Mini Project with HTML, CSS and JS"],
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-8 text-white bg-black">
      <h2 className="mt-20 text-white text-7xl max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <span className="ml-8 text-8xl">
          Web Development <span className="text-[#A21FB6]"> Master </span>
        </span>
        <br />
        <span className="ml-40 ">Course @dot 1.0 Batch</span>
      </h2>
      <div className="w-full max-w-4xl mt-32 space-y-6 ">
        {sections.map((section, index) => (
          <div key={index} className="p-6 bg-gray-800 shadow-lg rounded-2xl">
            <h2 className="mb-4 text-xl font-semibold text-white">
              {section.title}
            </h2>
            <ul className="space-y-2 text-gray-300">
              {section.items.map((item, idx) => (
                <li key={idx} className="list-disc list-inside">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebMasterSyllabus;

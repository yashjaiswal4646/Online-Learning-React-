import React from "react";

const FlutterSyllabus = () => {
  const sections = [
    {
      title: "Introduction and Flutter Installation",
      items: [
        "Flutter Introduction Demo 1",
        "Flutter Introduction Demo 2",
        "Setup Flutter & IDE",
        "Running App on Real Device and Creating Virtual Device",
      ],
    },
    {
      title: "Basics of Dart",
      items: [
        "Dart Introduction",
        "Fundamentals",
        "Variables",
        "Data Types and Input/Output Dart",
        "Using Functions",
        "Asynchronous calls and classes",
      ],
    },
    {
      title: "Knowing Flutter Architecture and Lifecycle",
      items: [
        "Stepping into Flutter, Architecture, All About Widgets",
        "How Request Occurs, Intro of Stateless Widgets, Explaining main.dart",
      ],
    },
    {
      title: "Flutter Basics UI elements",
      items: [
        "Basic Widgets: Container, Center, Padding, SizedBox",
        "Buttons & its kinds",
        "State & Stateless, Align, Card",
        "Creating your own Scaffold App UI",
      ],
    },
    {
      title: "Introduction to Stateful Widgets",
      items: [
        "What is Stateful Widget?",
        "Understanding Stateful Widget",
        "Text and Image",
      ],
    },
    {
      title: "Creating Multi Screen App",
      items: [
        "Navigation, Multiple Pages, UI Implementation",
        "Splash screen & Stateless Handling",
      ],
    },
  ];

  return (
    <>
    
      <div
        className="flex items-center justify-center min-h-screen px-6 text-white"
        style={{
          background:
            "radial-gradient(circle at top center, #410640 5%, #000000 50%)",
        }}
      >
    <div className="flex flex-col items-center" >
      <h2 className="text-white mt-44 text-8xl max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Online Flutter <span className="text-[#A21FB6]">App</span>
        </h2>
      <h2 className="mt-10 text-white text-8xl max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Development Course
        </h2>    
      <div className="w-full max-w-4xl mt-32 space-y-6 ">
        {sections.map((section, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 shadow-lg rounded-2xl"
          >
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
    </div>
    </>
  );
};

export default FlutterSyllabus;

import React from "react";

const WebDevlopmentCourse = () => {
    const sections = [
        {
            title: "Generate AI & Application",   
            items: [
                "Overview of Generative AI",
                "Building Application with Generative AI",
                "Longcahin for Generative AI",
                "Real-world projects (Rsume reviewer, virtual Interviewer)",
            ],
        },
        {
            title: "Frontend Development", 
            items: [
                "HTML",
                "CSS",
                "JavaScript",
                "REACT.JS",
                "Response Web Design",
            ],
        },
        {
            title: "Backend Development", 
            items: [
                "Node.js",
                "Database",
                "API Development (REST)",
                "Authentication & Authorization",
                "Real-time Communication",
            ],
        },
        {
            title: "DSA",
            items: [
                "Fundamentals",
                "Pattern Programming",
                "Time and Space Complexity",
                "Recursion",
                "Math problem and Algorithms",
            ],
        },
        {
            title: "Data Structures",
            items: [
                "Arrays (1-D, Multi-D)",
                "String",
                "Linked Lists",
                "Stacks and Queues",
                "Trees (Binary Trees, BST)",
                "Hashing (Sets and Maps)",
            ],
        },
        {
            title: "Apptitude & Reasoning",
            items: [
                "Percentage",
                "Profit & Loss",
                "Compound Interest",
                "Ratio & Proportion",
                "Number System",
                "HCF & LCM",
                "Average",
                "Work and Time",
                "pipes and Cisterns",

            ],
        },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen p-8 text-white bg-black">
         <h2 className="mt-20 text-white text-7xl max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <span className="ml-20">
            Job Ready <span className="text-[#A21FB6]"> AI </span> Powered
            Cohort :{" "}
          </span>
          <br />
          <span className="ml-96">Complete</span>
          <br /> Web Development + DSA + Aptitude
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
     );
};

export default WebDevlopmentCourse;
import React from "react";

const HackingSyllabus = () => {
    const sections = [
        {
            title: "Networking",
            items: [
                "Introducing to networking",
                "Networking concepts",
                "Networking Protocols",
                "Types of networking",
                "What is TCP and how does it work?",
                "Network Protocols",
                "How does internet work?",
                "OSI vs TCP/IP model",
                "Domain name and Dns records",
                "Role of networking ports",
            ],
        },
        {
            title: "Linux",
            items: [
                "What is Linux?",
                "Basic Linux commands (Practical)",
                "Cool Feature of Linux",
                "Advanced Linux commands (Practical)",
                "Basic File system of Linux",
                "Getting Familiar with Linux OS",
            ],
        },
        {
            title: "Setting Up Ethical Hacking Lab",
            items: [
                "Setting Up Lab",
                "Installing Kali or Parrot OS in VMware or VirtualBox",
                "Install VMware or Virtual Box",
                "Downloading a good wordlist for Kali Linux",
            ],
        },
    ];

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen px-4 text-white"
            style={{
                background:
                    "radial-gradient(circle at top center, #410640 5%, #000000 25%)",
            }}
        >
            <h2 className="text-white mt-32 text-5xl md:text-7xl max-md:text-4xl text-center px-4">
                Online Ethical <span className="text-[#A21FB6]">Hacking</span> Courses
            </h2>
            <div className="w-full max-w-4xl mt-16 space-y-6 px-4">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="p-4 md:p-6 bg-gray-800 shadow-lg rounded-2xl overflow-hidden"
                    >
                        <h2 className="mb-3 text-lg md:text-xl font-semibold text-white">
                            {section.title}
                        </h2>
                        <ul className="space-y-2 text-gray-300 text-sm md:text-base">
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

export default HackingSyllabus;
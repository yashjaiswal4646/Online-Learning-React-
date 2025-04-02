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
                "Networking protocols",
                "What is TCP and how does it work?",
                "Networking protocols",
                "How does internet work?",
                "OSI vs TCP/IP model",
                "Domain name and DNS records",
            ],
        },
        {
            title: "LInux",
            items: [
                "What is Linux?",
                "Basic Linux commands (Pratical)",
                "Cool Feature of Linux",
                "Advance Linux commands (Pratical)",
                "Basic File system of Linux",
                "Getting Familiar with Linux OS",

            ],
        },
        {
            title: "Setting UP Ethical Hacking Lab",
            items: [
                "Setting Up Lab",
                "Installing Kali or Parrot OS in VMware or VirtualBox",
                "Install VMware or Virtual Box",
                "Downloading a good wordlist for Kali Linux",
            ],
        },
        {
            title: "Footprinting And Reconnaissance",
            items: [
                "Introduction to Footprinting & Reconnaissance",
                "Types of Footprinting",
                "Website footprinting using Netcraft, Wappalyzer, 3rd party sources",
                "DNS footprinting using DNSenum, DNS lookup, MX lookup, NS lookup",
                "Email footprinting using Email Tracker Pro",
                "Entities of information gathering",
                "Source of information gathering",
                "WHOIS footprinting",
                "Performing information gathering using search engines",
                "Footprinting through OSINT framework",
                "Information gathering using Google Dorking and ASO",
                "Footprinting using Kali Linux",
                "DNSenum, DNSRecon, Sublister tools for footprinting",
            ],
        },
        {
            title: "Networking Scanning",
            items: [
                "What is network scanning?",
                "Checking for software with versions",
                "Network scanning methodology",
                "OS fingerprinting and banner grabbing countermeasures",
                "Types of network scans",
                "Saving XML report for Metasploit & Conversion",
                "Checking for live systems and Buffer size",
                "Checking for open ports",
                "Checking for services on ports",
            ],
        },
    ];

    return (
      <>
      <div
        className="flex items-center justify-center min-h-screen px-6 text-white"
        style={{
          background:
            "radial-gradient(circle at top center, #410640 5%, #000000 25%)",
        }}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-white mt-44 text-8xl max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Online Ethical <span className="text-[#A21FB6]">Hacking </span>
          Courses
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

export default HackingSyllabus;
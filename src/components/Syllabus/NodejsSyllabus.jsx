import React from "react";

const NodejsSyllabus = () => {
    const sections = [
        {
            title: "API Testing & Documentation",   
            items: [
                "Using Postman for API Testing",
                "Writing API Documentation with Swagger",
                "Error Handling & Logging",
            ],
        },
        {
            title: "File Uploads & Handling Images", 
            items: [
                "Uploading Files with Multer",
                "Storing Images in MongoDB vs Cloud Storage (Cloudinary, AWS S3)",
                "Serving Static Files in Express",
            ],
        },
        {
            title: "Payment Integration", 
            items: [
                "Introduction to Payment Gateways (Stripe, PayPal, Razorpay)",
                "Implementing Stripe Checkout",
                "Handling Webhooks for Payment Confirmation",
            ],
        },
        {
            title: "Email & SMS Notifications",
            items: [
                "Sending Emails with Nodemailer",
                "Setting Up Twilio for SMS Notifications",
                "Scheduling Automated Emails & Messages",
            ],
        },
        {
            title: "Background Jobs & Task Scheduling",
            items: [
                "Using Node.js with cron jobs",
                "Implementing Queue Processing with BullMQ",
                "Running Asynchronous Background Tasks",
            ],
        },
        {
            title: "Web Scraping with Node.js",
            items: [
                "Introduction to Web Scraping",
                "Using Puppeteer & Cheerio for Scraping Data",
                "Storing & Displaying Scraped Data",
            ],
        },
        {
            title: "Performance Optimization & Caching",
            items: [
                "Caching Data with Redis",
                "Load Balancing & Scaling Node.js Apps",
                "Optimizing MongoDB Queries",
            ],
        },
        {
            title: "Real-time Features",
            items: [
                "Implementing WebSockets for Live Chat",
                "Creating Live Notifications with Socket.io",
                "Building a Collaborative Document Editing Feature",
            ],
        },
    ];

    return (
      <div
        className="flex items-center justify-center min-h-screen px-6 text-white"
        style={{
          background: "radial-gradient(circle at top center, #410640 5%, #000000 25%)",
        }}
      >
        <div className="flex flex-col items-center">
        <h2 className="text-white text-7xl text-center mt-32">
          Complete
        </h2>
        <h2 className="text-center text-6xl font-semibold">
          <span className="text-[#A21FB6]">Node.js</span> + 
          <span className="text-[#A21FB6]"> Express.js</span> + 
          <span className="text-[#A21FB6]"> MongoDB</span>
        </h2>

          <div className="w-full max-w-4xl mt-32 space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="p-6 bg-gray-800 shadow-lg rounded-2xl">
                <h2 className="mb-4 text-xl font-semibold text-white">{section.title}</h2>
                <ul className="space-y-2 text-gray-300">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="list-disc list-inside">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default NodejsSyllabus;

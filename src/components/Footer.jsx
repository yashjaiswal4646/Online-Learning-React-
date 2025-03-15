import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white mt-14 px-6 md:px-10 bg-black py-10">
      <hr className="border-fuchsia-700" />
      <div className="flex flex-wrap justify-between items-center mt-10 w-full max-w-6xl mx-auto">
        {/* Social Media Icons (Centered on Mobile) */}
        <div className="flex gap-4 md:gap-6 justify-center md:justify-start w-full md:w-auto mb-6 md:mb-0">
          <img
            src="/images/communication1.png"
            alt="Facebook Icon"
            className="w-8 md:w-10"
          />
          <img
            src="/images/social1.png"
            alt="Instagram Icon"
            className="w-8 md:w-10"
          />
          <img
            src="/images/linkedin1.png"
            alt="LinkedIn Icon"
            className="w-8 md:w-10"
          />
          <img
            src="/images/youtube1.png"
            alt="YouTube Icon"
            className="w-8 md:w-10"
          />
        </div>

        {/* Navigation Links - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left text-sm md:text-base w-full md:w-auto">
          {/* Legal Section */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-fuchsia-500">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-fuchsia-500 transition">
                  Docs
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-fuchsia-500 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-fuchsia-500 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-fuchsia-500 transition">
                  Pricing Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-fuchsia-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-fuchsia-500 transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-fuchsia-500 transition">
                  Cohort
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-fuchsia-500 transition">
                  Coding Hero
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}

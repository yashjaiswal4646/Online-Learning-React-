import React from "react";
import { Link} from "react-router-dom";

export default function Footer() {

  
  return (
    <footer className="px-6 py-10 overflow-hidden text-white bg-black mt-14 md:px-10">
      <hr className="border-fuchsia-700" />
      <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto mt-10">
        {/* Social Media Icons (Centered on Mobile) */}
        <div className="flex justify-center w-full gap-4 mb-6 md:gap-6 md:justify-start md:w-auto md:mb-0">
          <img
            src="/images/communication1.png"
            alt="Facebook Icon"
            className="w-8 max-w-full md:w-10"
          />
          <img
            src="/images/social1.png"
            alt="Instagram Icon"
            className="w-8 max-w-full md:w-10"
          />
          <img
            src="/images/linkedin1.png"
            alt="LinkedIn Icon"
            className="w-8 max-w-full md:w-10"
          />
          <img
            src="/images/youtube1.png"
            alt="YouTube Icon"
            className="w-8 max-w-full md:w-10"
          />
        </div>

        {/* Navigation Links - Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 text-sm text-center md:grid-cols-2 md:text-left md:text-base md:max-w-full">
          {/* Legal Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="mb-3 text-lg font-semibold text-fuchsia-500">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="transition hover:text-fuchsia-500">
                  Docs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="transition hover:text-fuchsia-500" >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="transition hover:text-fuchsia-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="transition hover:text-fuchsia-500">
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
                <Link to="#" className="transition hover:text-fuchsia-500">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="#" className="transition hover:text-fuchsia-500">
                  Cohort
                </Link>
              </li>
              <li>
                <Link to="#" className="transition hover:text-fuchsia-500">
                  Coding Hero
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="mt-8 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}

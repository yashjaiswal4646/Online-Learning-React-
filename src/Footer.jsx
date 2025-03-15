import React from "react";
import { Link } from "react-router-dom";
import fb from "./Images/communication 1.png";
import insta from "./Images/social 1.png";
import linkdin from "./Images/linkedin 1.png";
import youtube from "./Images/youtube 1.png";

const Footer = () => {
  return (
    <footer className="text-white mt-14">
      <hr className="border-fuchsia-700" />
      <div className="flex flex-wrap gap-10 mt-14 w-full max-w-[1020px] px-10 max-md:mt-10">
        
        {/* Social Media Icons (Left Side) */}
        <div className="flex my-auto gap-7">
          <img
            src={fb}
            alt="Social Icon 1"
            className="w-10"
          />
          <img
            src={insta}
            alt="Social Icon 2"
            className="w-10"
          />
          <img
            src={linkdin}
            alt="Social Icon 3"
            className="w-10"
          />
          <img
            src={youtube}
            alt="Social Icon 4"
            className="w-10"
          />
        </div>

        {/* Shifted Left with ml-20 */}
        <div className="ml-80">
          <nav className="flex justify-start">
            <div className="grid grid-cols-2 gap-14">
              {/* Legal Section */}
              <div className="text-base">
                <h3 className="mb-6 text-2xl">Legal</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 mr-3"></span>
                    <Link to="#" className="hover:text-fuchsia-500">Docs</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 mr-3"></span>
                    <Link to="#" className="hover:text-fuchsia-500">Privacy Policy</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 mr-3"></span>
                    <Link to="#" className="hover:text-fuchsia-500">Terms of Service</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 mr-3"></span>
                    <Link to="#" className="hover:text-fuchsia-500">Pricing Policy</Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links Section */}
              <div className="text-base">
                <h3 className="mb-6 text-xl">Quick Links</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 mr-3"></span>
                    <Link to="#" className="hover:text-fuchsia-500">Courses</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 mr-3"></span>
                    <Link to="#" className="hover:text-fuchsia-500">Cohort</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 mr-3"></span>
                    <Link to="#" className="hover:text-fuchsia-500">Coding Hero</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
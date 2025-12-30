import React from "react";
import logo from "../assets/images/logo.webp";

const Footer = () => {
  return (
    <footer className="w-full bg-white px-6 md:px-16 lg:px-24 xl:px-32 py-14 border-t">
      
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        {/* Logo & About (50%) */}
        <div className="md:col-span-2 flex flex-col ">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="CAPSTONE logo"
              className="h-12 w-20 object-cover rounded-lg"
            />
            <span className="text-2xl font-bold text-[#1c1c1f] font-sciencegothic">
              CAPSTONE
            </span>
          </div>

          <p className="mt-6 text-sm text-gray-500 leading-relaxed max-w-md">
            A centralized platform for managing, tracking, and showcasing
            students’ yearly projects—empowering collaboration between students
            and mentors.
          </p>
        </div>


        {/* Contact */}
        <div className="flex flex-col md:items-end text-left md:text-right">
          <h3 className="font-semibold text-gray-900 mb-4">
            Contact Us
          </h3>

          <p className="text-sm text-gray-600">
            mail@meskeveeyamcollege.ac.in
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Office: 0494 - 2642670
          </p>

          <p className="text-sm text-gray-600 leading-relaxed">
            MES KEVEEYAM COLLEGE <br />
            Valanchery PO, <br />
            Malappuram Dt, Kerala <br />
            Pincode: 676552
          </p>
        </div>

        
        {/* Quick Links */}
        <div className="flex flex-col md:items-end text-left md:text-right">
          <h3 className="font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="text-sm text-gray-600 space-y-3">
            <li>
              <a href="/" className="hover:text-black transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-black transition">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-black transition">
                Projects
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CAPSTONE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

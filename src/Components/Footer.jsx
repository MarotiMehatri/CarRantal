import React from "react";
import { assets } from "../assets/assets";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
      <div className="flex flex-wrap items-start justify-between gap-8 pb-6 border-borderColor border-b">
        <div>
          <img className="h-8 md:h-9" src={assets.logo} alt="Logo" />
          <p className="max-w-80 mt-3">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a href="#">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#">
              <BiLogoGmail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Quick Links
          </h2>
          <ul className="mt-3 flex-col gap-1.5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Browse Cars</a>
            </li>
            <li>
              <a href="#">List Your Car</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Resources
          </h2>
          <ul className="mt-3 flex-col gap-1.5">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Insurance</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Contact
          </h2>
          <ul className="mt-3 flex-col gap-1.5">
            <li>1234 Luxury Drive</li>
            <li>Shivaji Nagar pune, CA 411005</li>
            <li>+1 1789665654</li>
            <li>maroti@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center justufy-between py-5">
        <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
        <ul className="flex  items-end gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li> | </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li> | </li>
          <li>
            <a href="#">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

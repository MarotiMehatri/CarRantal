import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [open, SetOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <header
        className={`flex item-center justify-between bg-secondary-subtle md:px-6 lg:px-14 xl:px-10 py-4 text-gray-600 border-b border-borderColor  relative transition-all duration-300 ${
          location.pathname === "/" && "bg-light"
        }`}
      >
        <Link to="/">
          <img src={assets.logo} alt="" className="h-15" />
        </Link>
        <div
          className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-item-center max-sm:top-26 right-0 flex flex-col sm:flex-row item-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
            location.pathname === "/" ? "bg-light" : "bg-white"
          } ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"} `}
        >
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="font-semibold tracking-wider text-zinc-900 hover:text-orange-500"
            >
              {link.name}
            </Link>
          ))}

          <div className="md:flex p-1 border-2 border-orange-300 rounded-full gap-x-2 hidden">
            <input
              type="text"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
              placeholder="Search.."
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoIosSearch />
            </button>{" "}
          </div>

          <div className="flex max-sm:flex-col item-start sm:item-center gap-6">
            <button
              onClick={() => navigate("/owner")}
              className="cursor-pointer"
            >
              Dashboard
            </button>
            <button
              onClick={() => setShowLogin(true)}
              className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
            >
              Login
            </button>
          </div>
        </div>
        <a
          href="#"
          className="text-zinc-800 text-3xl md:hidden"
          onClick={() => SetOpen(!open)}
        >
          {open ? <IoCloseOutline /> : <MdMenu />}
        </a>
      </header>
    </div>
  );
};

export default Navbar;

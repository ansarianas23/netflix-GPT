import React from "react";
import { NETFLIX_LOGO } from "../utils/constans";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between py-4">
      <div className="w-40 h-fit">
        <Link to="/"><img className="w-full h-fit" src={NETFLIX_LOGO} alt="" /></Link>
      </div>

      <div className="flex space-x-6">
        <select className="bg-black bg-opacity-40 text-white px-6 rounded-sm border-gray-700 border-[1px] ">
          <option className="text-black">English</option>
          <option className="text-black">हिन्दी</option>
        </select>

        <Link to="signin">
          <button className="bg-netflix-red hover:bg-red-700 transition-all ease-linear text-white px-4 rounded-sm font-semibold py-1 cursor-pointer">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

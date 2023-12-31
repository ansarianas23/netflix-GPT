import React, { useState }  from "react";
import { NETFLIX_LOGO, NETFLIX_USERICON } from "../utils/constans";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";


const Header = () => {

  const navigate = useNavigate();
  const [toggleDropdown, setToggleDropDown] = useState(false)
  const [showHamburger, setShowHamburger] = useState(false);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/")
      setToggleDropDown(false)
    }).catch((error) => {
      alert(error);
    });
  }
  const user = useSelector((state)=>state.user.userStatus)
  // console.log(user);

  return (
    <div className="w-full flex items-center justify-between p-4 bg-gradient-to-b from-black relative">
        {/* hamburder body */}
        {user && <div className={`bg-black bg-opacity-90 w-[50vw] h-screen absolute top-0 left-0 p-10 flex ${showHamburger? "-translate-x-0" : "-translate-x-full"} transition-all`}>
          <ul className="text-white font-medium space-y-6">
            <li className="cursor-pointer hover:text-red-500 transition-all delay-75">Home</li>
            <li className="cursor-pointer hover:text-red-500 transition-all delay-75">TV Shows Movies</li>
            <li className="cursor-pointer hover:text-red-500 transition-all delay-75">New & Popular</li>
            <li className="cursor-pointer hover:text-red-500 transition-all delay-75">My List</li>
            <li className="cursor-pointer hover:text-red-500 transition-all delay-75">Browse by languages</li>
          </ul>

          <span className="text-white absolute top-5 right-5 rotate-45 text-3xl cursor-pointer" onClick={()=>{setShowHamburger(!showHamburger)}}><FaPlus /></span>
        </div>}

      <div className="flex items-center space-x-5">
        {/* hamburger */}
        {user && <span className="text-stone-400 text-3xl lg:hidden" onClick={()=>{setShowHamburger(!showHamburger)}}><GiHamburgerMenu /></span>}

        {/* Logo */}
        <div className="w-24 md:w-36 h-auto">
          <Link to={user? "/home": "/"}><img className="w-full h-full" src={NETFLIX_LOGO} alt="" /></Link>
        </div>

        {/* categories */}
         {user && <ul className="space-x-4 font-medium text-white hidden lg:flex">
            <li className="cursor-pointer hover:text-red-500 transition-all delay-75">Home</li>
            <li className="cursor-pointer hover:text-red-500 transition-all delay-75">TV Shows Movies</li>
            <li className="cursor-pointer hover:text-red-500 transition-all delay-75">New & Popular</li>
            <li className="cursor-pointer hover:text-red-500 transition-all delay-75">My List</li>
            <li className="cursor-pointer hover:text-red-500 transition-all delay-75">Browse by languages</li>
          </ul>}
      </div>


      {!user && <div className="flex space-x-2">
        <select className="bg-black bg-opacity-40 text-white px-2 text-sm rounded-sm border-gray-700 border-[1px] ">
          <option className="text-black">English</option>
          <option className="text-black">हिन्दी</option>
        </select>

        <Link to="signin">
          <button className="bg-netflix-red hover:bg-red-700 transition-all ease-linear text-white px-4 rounded-sm font-semibold py-1 cursor-pointer">
            Sign In
          </button>
        </Link>
      </div>}

      {/* Right user div */}
      {user && <div className="flex items-center space-x-5 text-white">
        <span>
          <Link to="search"><FaSearch className="text-lg cursor-pointer"/></Link>
        </span>

        <span>
          <FaRegBell className="text-lg cursor-pointer"/>
        </span>

        <div className="relative">
          <div onMouseEnter={()=>{setToggleDropDown(true)}} className="flex items-center space-x-2 hover:cursor-pointer hover:text-red-500">
            <img className="w-8 rounded-md" src={NETFLIX_USERICON} alt="" />
            <IoMdArrowDropdown/>
          </div>
          {/* <button onClick={handleSignOut} className="font-bold hover:text-red-600">SignOut</button> */}

          {/* dropdown container */}
          {toggleDropdown && <div onMouseLeave={()=>{setToggleDropDown(false)}} className="w-48 p-3 h-fit bg-black bg-opacity-80 rounded-md border-stone-800 border-[1px] absolute -left-36 top-10">
            <ul className="space-y-2 text-sm relative">
              <li className="hover:text-red-500 cursor-pointer">Manage Profile</li>
              <li className="border-b-[1px] border-stone-800"></li>
              <li className="hover:text-red-500 cursor-pointer">Kids</li>
              <li className="hover:text-red-500 cursor-pointer">DVD</li>
              <li className="border-b-[1px] border-stone-800"></li>
              <li className="hover:text-red-500 cursor-pointer">Account</li>
              <li className="hover:text-red-500 cursor-pointer">Help Center</li>
              <li onClick={handleSignOut} className="hover:text-red-500 cursor-pointer">Sign out of Netflix</li>
              <span onClick={()=>{setToggleDropDown(false)}} className="text-xl absolute -top-5 right-0 cursor-pointer hover:text-red-500">x</span>
            </ul>

            {/* arrow tool tip */}
            <div className="h-0 w-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white absolute -top-2 right-6"></div>
          </div>}

        </div>
      </div>}

    </div>
  );
};

export default Header;

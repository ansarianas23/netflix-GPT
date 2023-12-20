import React  from "react";
import { NETFLIX_LOGO, NETFLIX_USERICON } from "../utils/constans";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {

  const navigate = useNavigate();

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      alert(error);
    });
  }
  const user = useSelector((state)=>state.user.userStatus)
  // console.log(user);

  return (
    <div className={`w-full flex items-center justify-between py-4 ${!user? "px-80": "px-10"}`}>
      <div className="flex items-center space-x-5">
        {/* Logo */}
        <div className={`${!user? "w-36": "w-28"} h-fit`}>
          <Link to={user? "/home": "/"}><img className="w-full h-full" src={NETFLIX_LOGO} alt="" /></Link>
        </div>

        {/* categories */}
         {user && <ul className="flex space-x-4 text-white font-medium">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">TV Shows Movies</li>
            <li className="cursor-pointer">New & Popular</li>
            <li className="cursor-pointer">My List</li>
            <li className="cursor-pointer">Browse by languages</li>
          </ul>}
      </div>


      {!user && <div className="flex space-x-6">
        <select className="bg-black bg-opacity-40 text-white px-6 rounded-sm border-gray-700 border-[1px] ">
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
          <FaSearch className="text-lg cursor-pointer"/>
        </span>

        <span>
          <FaRegBell className="text-lg cursor-pointer"/>
        </span>

        <div className="flex items-center space-x-2 cursor-pointer">
          <img className="w-8 rounded-md" src={NETFLIX_USERICON} alt="" />
          <button onClick={handleSignOut} className="font-bold hover:text-red-600">SignOut</button>
        </div>
      </div>}

    </div>
  );
};

export default Header;

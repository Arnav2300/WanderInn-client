import React, { useContext } from "react";
import {
  PiMagnifyingGlass,
  PiList,
} from "react-icons/pi";
import { ImBasecamp } from "react-icons/im";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const Topbar = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <header className="z-20 p-4 flex justify-center lg:justify-between bg-white border-b w-full fixed h-20">
        <Link to={"/home"} className="hidden lg:flex items-center gap-1">
          <ImBasecamp className="w-8 h-8 text-primary" />
          <span className="font-bold text-xl hidden lg:block">
            <span className="font-Fuggles">Wander</span>
            <span className="font-Raleway">Inn</span>
          </span>
        </Link>
        <div className="justify-center flex border border-gray-300 rounded-full py-2 px-2 shadow-md items-center divide-x bg-white">
          <div className="px-2">Anywhere</div>
          <div className="border-l border-gray-300"></div>
          <div className="px-2">Any week</div>
          <div className="border-l border-gray-300"></div>
          <div className="px-2">Add guests</div>
          <button className="bg-primary rounded-full text-white p-2 text-lg ml-1">
            <PiMagnifyingGlass className="" />
          </button>
        </div>
        <div className="hidden lg:flex border border-gray-300 rounded-full py-2 px-2 shadow-md items-center gap-3 dropdown dropdown-end">
          <label className="flex items-center gap-3" tabIndex={0}>
            <PiList />
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="w-8 h-8 fill-[#717171]"
              >
                <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
              </svg>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-white top-16"
          >
            {!!user && (
              <>
                <li className="">
                  <Link to={"/account"}>Account</Link>
                </li>
                <li>
                  <Link to={"/login"}>Favorites</Link>
                </li>
                <li>
                  <Link to={"/account/profile"}>Log Out</Link>
                </li>
              </>
            )}
            {!user && (
              <>
                <li>
                  <Link to={"/login"}>Log In</Link>
                </li>
                <li>
                  <Link to={"/signup"}>Sign Up</Link>
                </li>
              </>
            )}
            <li className="border-t">
              <Link to={"/account/mylistings/newlisting"}>List you house</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Topbar;

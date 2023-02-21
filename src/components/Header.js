import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch()
  const handleMenu = () => {
dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col h-14 shadow-lg">
      <div className="flex col-span-1">
        <img src="./menu-burger.svg" alt="menu" className="m-4 h-6 cursor-pointer" onClick={() => handleMenu()} />

        <img src="./yt.svg" alt="menu" className="my-4 mx-2 h-5" />
        
      </div>
      <div className="flex justify-center items-center col-span-10">
        <input
          type="text"
          placeholder="Search"
          className="border border-r-2 rounded-l-3xl border-radius pl-3 my-auto h-10 w-1/2"
        />
        <button
          type="submit"
          className="border border-r-2 rounded-r-3xl border-radius my-auto h-10 bg-slate-100 hover:bg-slate-200"
        >
          <img src="./loupe.png" alt="" className="px-4 h-4" />
        </button>{" "}
      </div>
      <div className="flex justify-center col-span-1">
        <img src="./user.png" alt="user" className="my-2 h-7" />
      </div>
    </div>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([]);
  const [toggleSuggestions, setToggleSuggestions] = useState(false)
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search)
console.log(searchCache)
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        getSuggestions() 
      } 
    
    }, 200)

    return () => {
      clearTimeout(timer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])
  
  const getSuggestions = async() => {
const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
const json = await data.json()
setSuggestions(json[1])
dispatch(cacheResults({
  [searchQuery]: json[1]
}));
  }
  const handleMenu = () => {
dispatch(toggleMenu())
  }

  return (
    <div className="grid grid-flow-col h-14 sticky">
      <div className="flex col-span-1">
        <img src="./menu-burger.svg" alt="menu" className="m-4 h-6 cursor-pointer" onClick={() => handleMenu()} />

        <img src="./yt.svg" alt="menu" className="my-4 mx-2 h-5" />
        
      </div>
      <div className="px-10 my-auto col-span-10">
        <div className="flex">
        <input
          type="text"
          placeholder="Search"
          className="border border-r-2 rounded-l-3xl border-radius pl-3 my-auto h-10 w-2/3"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setToggleSuggestions(true)}
          onBlur={() => setToggleSuggestions(false)}
        />
        <button
          type="submit"
          className="border border-r-2 rounded-r-3xl border-radius my-auto h-10 bg-slate-100 hover:bg-slate-200 ml-[-3px]"
        >          <img src="./loupe.png" alt="" className="px-4 h-4" />
        </button>
        </div>
        
        {toggleSuggestions && searchQuery !== "" && <div className="absolute bg-white w-[35.5rem] py-2 px-5 rounded-lg border shadow-lg"><ul className="flex flex-col">
          {suggestions.map((suggestion, index) => {
            return <li key={index} className="py-2 shadow-sm hover:bg-gray-100 flex items-center"><img src="./loupe.png" alt="" className="h-3 mr-2" />{suggestion}</li>
          })}
      </ul></div>}
      </div>
      <div className="col-span-1 flex items-center">
        <img src="./user.png" alt="user" className="my-2 h-7" />
      </div>
    </div>
  );
};

export default Header;

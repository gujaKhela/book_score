import React from "react";
import { useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Search = () => {
  const [searchQuery, setSerchQuery] = useState("");
  console.log("search query", searchQuery);

  function handleSearch() {
    console.log("handleSearch", searchQuery);
  }

  function handleEnterKeyPress(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <>
      <div className="relative z-50 rounded-full xl:w-[520px] xl:h-[42px]  lg:w-[420px] lg:h-[32px] md:w-[320px] md:h-[22px] sm:w-[220px] sm:h-[12px]">
        <input
          type="text"
          className="w-full h-full text-lg pl-4 pr-14 border-2 border-black rounded-full z-10"
          placeholder="Type the name of book or author ..."
          value={searchQuery}
          onChange={(e) => setSerchQuery(e.target.value)}
          onKeyDown={handleEnterKeyPress}
        />
        <button onClick={handleSearch} className="z-10">
          <HiMiniMagnifyingGlass
            size={26}
            className="absolute xl:top-2 xl:left-[470px] md:top-0 md:left-[270px] lg:top-1 lg:left-[370px] sm:top-0 sm:left-[0px] z-10"
          /> 
        </button>
        <div className="bg-yellow-500 rounded-full absolute top-2 left-1 z-[-1] xl:w-[520px] xl:h-[42px]  lg:w-[420px] lg:h-[32px] md:w-[320px] md:h-[22px] sm:w-[220px] sm:h-[12px]"></div>
      </div>
    </>
  );
};

export default Search;

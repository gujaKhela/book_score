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
      <div className="relative z-50 rounded-full xl:w-[520px] xl:h-[42px]  ">
        <input
          type="text"
          className="w-full h-full text-lg pl-4 pr-14 border-2 border-black rounded-full z-10"
          placeholder="Type the name of book or author ..."
          value={searchQuery}
          onChange={(e) => setSerchQuery(e.target.value)}
          onKeyDown={handleEnterKeyPress}
        />
        <button
          onClick={handleSearch}
          className="z-10 absolute top-0 left-[266px] md:top-0 md:left-[344px] xl:top-2 xl:left-[470px] 2xl:top-2 2xl:left-[470px]"
        >
          <HiMiniMagnifyingGlass size={26} className="  z-10" />
        </button>
        <div className="bg-yellow-500 rounded-full absolute top-2 left-1 z-[-1] xl:w-[520px] xl:h-[42px]  "></div>
      </div>
    </>
  );
};

export default Search;

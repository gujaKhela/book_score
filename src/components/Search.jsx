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
      <div className="w-[500px] h-[42px] relative z-50 rounded-full">
        <input
          type="text"
          className="w-full h-full text-lg pl-4 pr-12 border-2 border-black rounded-full z-10"
          placeholder="Search ..."
          value={searchQuery}
          onChange={(e) => setSerchQuery(e.target.value)}
          onKeyDown={handleEnterKeyPress}
        />
        <button onClick={handleSearch} className="z-10">
          <HiMiniMagnifyingGlass
            size={26}
            className="absolute top-2 left-[460px] z-10"
          />
        </button>
        <div className="w-[500px] h-[42px] bg-yellow-500 rounded-full absolute top-2 left-1 z-[-1] "></div>
      </div>
    </>
  );
};

export default Search;

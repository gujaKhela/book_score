import React, { useState, useEffect, useRef } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Book from "./Book";
import fetchData from "../../api/fetchData";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedResults, setSearchedResults] = useState("");
  const [loading, setLoading] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        // Clicked outside the search container
        setSearchedResults("");
        setSearchQuery("");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const fetchMyData = async () => {
    setLoading(true);
    try {
      const data = await fetchData(searchQuery, null, 3,"books");
      setSearchedResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery !== undefined && searchQuery !== "") {
      const timeoutId = setTimeout(() => {
        fetchMyData();
      }, 500);

      // Cleanup the timeout on component unmount or when searchQuery changes
      return () => clearTimeout(timeoutId);
    }
  }, [searchQuery]);

  const handleSearchButtonClick = () => {
    // Trigger search when the button is clicked
    fetchMyData();
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      // Trigger search when the Enter key is pressed
      fetchMyData();
    }
  };

  return (
    <>
      <div className="relative z-50 rounded-full xl:w-[520px] xl:h-[42px] group">
        <input
          type="text"
          className="w-full h-full text-lg pl-4 pr-14 border-2 border-black rounded-full z-10  "
          placeholder="Type the name of the book or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleEnterPress}
        />
        <button
          onClick={handleSearchButtonClick}
          className="z-10 absolute top-0 left-[266px] md:top-0 md:left-[344px] xl:top-2 xl:left-[470px] 2xl:top-2 2xl:left-[470px] "
        >
          <HiMiniMagnifyingGlass size={26} className="  z-10" />
        </button>
        <div className="bg-yellow-500 rounded-full absolute top-2 left-1 z-[-1] md:w-[520px] md:h-[42px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {searchedResults && (
          <div
            ref={searchContainerRef}
            className={`absolute bg-yellow-500 rounded-xl transition-opacity opacity-${
              searchedResults ? "100" : "0"
            }  xl:w-[520px] xl:h-[400px] `}
          >
            <span className="flex flex-col md:flex-row gap-4">
              {searchedResults.totalItems &&
              searchedResults &&
              searchedResults.items ? (
                searchedResults.items.map((search) => (
                  <Book
                    key={search.id}
                    id={search.id}
                    title={search.volumeInfo.title || "Untitled"}
                    authors={
                      search.volumeInfo.authors
                        ? search.volumeInfo.authors.join(", ")
                        : "Antiquary"
                    }
                    src={
                      search.volumeInfo.imageLinks
                        ? search.volumeInfo.imageLinks.thumbnail ||
                          search.volumeInfo.imageLinks.smallThumbnail ||
                          null
                        : null
                    }
                  />
                ))
              ) : (
                <p className="font-semibold text-xl mx-auto mt-5">
                  No result ..
                </p>
              )}
            </span>
            {searchedResults.totalItems ? (
              <button className="px-0 py-2 bottom-0 left-28 bg-blue-500 text-white rounded hover:bg-blue-600 absolute md:left-48 ">
                More Results
              </button>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;

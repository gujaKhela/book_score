import React, { useState, useEffect, useRef } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import Book from "./Book";
import fetchData from "../../api/fetchData";
// import { SearchedCatalog } from "../SearchedCatalog";
import bookBackupImage from "../../assets/bookBackup.webp";
import { BsCart } from "react-icons/bs";

const Search = ({ filter }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedResults, setSearchedResults] = useState("");
  const [loading, setLoading] = useState(false);
  const searchContainerRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isCatalog = location.pathname === "/catalog";

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

  const fetchMyData = async (resultCount) => {
    setLoading(true);
    try {
      const data = await fetchData(
        searchQuery,
        filter || "relevance", // Pass filter as orderBy
        resultCount,
        "books",
        "romance"
      );
      if (data && data.items && Array.isArray(data.items)) {
        setSearchedResults(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("SearchedResults updated:", searchedResults);
    const resultCount = isHome ? 3 : 10;

    if (searchQuery.trim() !== "") {
      const timeoutId = setTimeout(() => {
        fetchMyData(resultCount);
      }, 500);

      // Cleanup the timeout on component unmount or when searchQuery changes
      return () => clearTimeout(timeoutId);
    }
  }, [searchQuery, filter]);

  const handleSearchButtonClick = () => {
    // Trigger search when the button is clicked
    const resultCount = isHome ? 3 : 10;
    fetchMyData(resultCount);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      // Trigger search when the Enter key is pressed
      const resultCount = isHome ? 3 : 10;
      fetchMyData(resultCount);
    }
  };

  return (
    <>
      <div
        className={`relative z-40 rounded-full md:w-[520px] md:h-[42px] xl:w-[520px] xl:h-[42px] group ${
          isCatalog ? "mx-auto" : ""
        } `}
      >
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
          className="z-10 absolute top-0 left-[266px] md:top-2 md:left-[344px] xl:top-2 xl:left-[470px] 2xl:top-2 2xl:left-[470px] "
        >
          <HiMiniMagnifyingGlass size={26} className="z-10" />
        </button>
        <div className="bg-yellow-500 rounded-full absolute top-2 left-1 z-[-1] md:w-[520px] md:h-[42px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {isHome && searchedResults && searchedResults.totalItems && (
          <div
            ref={searchContainerRef}
            className={`absolute bg-yellow-500 rounded-xl transition-opacity opacity-${
              searchedResults ? "100" : "0"
            }  xl:w-[520px] xl:h-[400px] `}
          >
            <span className="flex flex-col md:flex-row gap-4">
              {searchedResults.totalItems > 0 &&
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
      {isCatalog &&
      searchedResults &&
      searchedResults.totalItems > 0 &&
      searchedResults.items.length > 0 ? (
        <div>
          <div className="">
            <div className="w-full mx-auto mt-24 mb-10 border-t-2 border-dashed border-black"></div>

            <div className="flex flex-wrap justify-center gap-10 ">
              {searchedResults.items.map((search) => (
                <div key={search.id} className="">
                  <div className="w-[188px] h-[260px] outline outline-gray-300 rounded-lg">
                    <img
                      src={
                        search.volumeInfo.imageLinks
                          ? search.volumeInfo.imageLinks.thumbnail ||
                            search.volumeInfo.imageLinks.smallThumbnail
                          : bookBackupImage
                      }
                      alt="book image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex justify-between m-2">
                    <div>
                      <div className="w-20 h-8 px-4  inline-block outline outline-gray-300 rounded-xl text-2xl font-semibold">$ 15</div>
                    </div>
                    <div>
                      <div className="bg-yellow-500 outline w-20 h-8 outline-gray-300 rounded-xl ">

                      <BsCart size={26} className="m-auto "/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10 text-xl font-medium ">
          No search results found.
        </div>
      )}
    </>
  );
};

export default Search;

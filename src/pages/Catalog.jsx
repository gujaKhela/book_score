import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Search from "../components/shared/Search";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Catalog = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState("relevance");

  const filterArray = [
    { id: 1, name: "relevance" },
    { id: 2, name: "newest" },
  ];

  function hanldeFilterOpen() {
    setFilterOpen(!filterOpen);
  }
  function handleFilter(filt) {
    setFilter(filt);
    setFilterOpen(false);
  }

  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto min-h-96">
        <div className="relative">
          {/* searched results is gen in Search component */}
          <Search filter={filter} />

          <div className="absolute top-16">
            <div className="flex 2xl:space-x-[960px] xl:space-x-[760px] lg:space-x-[660px] md:space-x-[560px] sm:space-x-[360px] space-x-[60px]">
              <div>
                <p className="text-xl">
                  <strong>Results:</strong>
                </p>
              </div>
              <div className="relative w-52 h-10 bg-white outline rounded-3xl group">
                <button className="w-full" onClick={hanldeFilterOpen}>
                  <div className="flex justify-between px-4 py-2">
                    <p className="text-lg font-medium">Filter By</p>
                    <FaAngleDown className="" size={20} />
                  </div>
                  {filterOpen && (
                    <div
                      className="absolute top-0 left-0 w-full h-full bg-transparent z-10"
                      onClick={hanldeFilterOpen}
                    ></div>
                  )}
                  <ul
                    key="filter-list"
                    className={
                      filterOpen ? "absolute top-10 left-0 z-20" : "hidden"
                    }
                  >
                    {filterArray.map((filt) => (
                      <li
                        key={filt.id}
                        className="bg-yellow-500 outline rounded py-2 px-12 my-2 hover:bg-yellow-400"
                        onClick={() => handleFilter(filt.name)}
                      >
                        <div className="">{filt.name}</div>
                      </li>
                    ))}
                  </ul>
                  <div className="w-52 h-10 rounded-3xl bg-orange-500 absolute top-2 left-2 z-[-10] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Catalog;

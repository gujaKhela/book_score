import React from "react";
import Header from "../components/Header";
import BookGif from "../assets/book-gif.png";
import { PiBinoculars } from "react-icons/pi";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto">
        <div className="flex items-start">
          <h2 className="font-bold text-5xl w-96 ">
            What Book You Looking For?
          </h2>
          <img src={BookGif} alt="book gif" className="inline" />
        </div>
        <p className="my-4">Expolore our Catalog and Find Your Next Read</p>

        <Search />

        {/* am buttonze klikit unda gadavidet categoriebis gverdze */}
        <button className="my-4 m-9 w-40 h-12 bg-yellow-500 border-2 border-black rounded-lg relative">
          <div className="pr-14">Explore </div>
          <div className="absolute top-3 left-28">
            <PiBinoculars size={24} />{" "}
          </div>
        </button>
      </main>
    </>
  );
};

export default Home;

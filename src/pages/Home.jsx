import React from "react";
import BookGif from "../assets/book-gif.png";
import Rectangle from "../assets/Rectangle 9.jpg";
import { PiBinoculars } from "react-icons/pi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto ">
        <div className="flex justify-between items-center pt-10">
          <div>
            <div className="flex items-start">
              <h2 className="font-bold text-5xl w-96 ">
                What Book You Looking For?
              </h2>
              <img src={BookGif} alt="book gif" className="inline" />
            </div>
            <p className="my-4">Expolore our Catalog and Find Your Next Read</p>

            <Search />

            {/* am buttonze klikit unda gadavidet categoriebis gverdze */}
            <div className="flex items-center mt-6 ">
              <button className="my-4 m-9 w-40 h-12 bg-yellow-500 border-2 border-black rounded-lg relative">
                <div className="pr-14">Explore </div>
                <div className="absolute top-3 left-28">
                  <PiBinoculars size={24} />{" "}
                </div>
              </button>
              <span className="text-3xl">-----------------------</span>
            </div>
          </div>
          <div className="relative">
            <div className="w-[484px] h-[503px] ">
              <img src={Rectangle} alt="Rectangle photo" className="z-10" />
            </div>
            <div className="bg-blue-500 w-[484px] h-[503px] absolute -top-8 -left-8  rounded-bl-3xl rounded-tr-3xl z-[-1]"></div>
          </div>
        </div>
        <p className="text-center text-xl ">New Books</p>
      </main>
      <Footer />
    </>
  );
};

export default Home;

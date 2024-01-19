import React, { useEffect, useState } from "react";
import BookGif from "../assets/book-gif.png";
import Rectangle from "../assets/Rectangle 9.webp";
import { PiBinoculars } from "react-icons/pi";
import { Link } from "react-router-dom";
import Slider from "../components/shared/Slider";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Search from "../components/shared/Search";

import BookCategories from "../components/categories/BookCategory";

const Home = () => {
  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto ">
        <div className="flex flex-col xl:flex-row 2xl:flex-row lg:flex-row justify-between items-center py-10 mb-32">
          <div className="mb-6 ">
            <div className="flex items-start flex-col">
              <h2 className="font-bold xl:text-5xl md:text-3xl max-w-[24rem] xl:mb-4 md:mb-2 ">
                What Book You Looking For?
              </h2>
              <img
                src={BookGif}
                alt="book gif"
                className="w-[141px] h-[141px] "
                loading="lazy"
              />
            </div>
            <p className="text-xl font-semibold pl-2 pb-4">
              Search by Title or Author
            </p>
            <Search />
            <p className="my-4">Explore our Catalog and Find Your Next Read</p>

            <div className="flex mt-6 relative mb-10 xl:mb-0">
              <Link to="/catalog">
                <button className=" bg-yellow-500 border-2 border-black rounded-lg w-[154px] h-[52px] hover:bg-yellow-400">
                  <span className="pr-4">Explore</span>
                  <PiBinoculars size={24} className="absolute top-4 left-28" />
                </button>
              </Link>
              <div className="w-6/12 mx-auto my-6 border-t-2 border-dashed border-black"></div>
            </div>
          </div>
          {/* ------------------- */}
          <div className="relative w-full h-full max-w-[484px] max-h-[503px] md:w-[296px] md:h-[300px] lg:w-[290px] lg:h-[300px] xl:w-[484px] xl:h-[503px]">
            <div className="w-full h-full max-w-[484px] max-h-[503px] md:w-[296px] md:h-[300px] lg:w-[290px] lg:h-[300px] xl:w-[484px] xl:h-[503px]">
              <img
                src={Rectangle}
                alt="Rectangle photo"
                className="z-10 object-cover w-full h-full max-w-[484px] max-h-[503px]"
              />
            </div>
            <div className="bg-blue-500 object-cover w-full h-full max-w-[484px] max-h-[503px] md:w-[296px] md:h-[300px] lg:w-[290px] lg:h-[300px] xl:w-[484px] xl:h-[503px] absolute -top-8 -left-8 rounded-bl-3xl rounded-tr-3xl z-[-1]"></div>
          </div>
        </div>

        {/* output books from api */}
        <Slider
          sliderTitle="New Books"
          search="a"
          orderBY="newest"
          maxResult="10"
          printType="books"
        />

        <div className="mt-40">
          <BookCategories />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import BookGif from "../assets/book-gif.png";
import Rectangle from "../assets/Rectangle 9.jpg";
import { PiBinoculars } from "react-icons/pi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import fetchData from "../api/fetchData";

const Home = () => {
  const [newestData, setNewestData] = useState({});

  useEffect(() => {
    const fetchNewestData = async () => {
      try {
        const data = await fetchData("a", "newest", 10);
        setNewestData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchNewestData();
  }, []);

  console.log(newestData, "newestData");
  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto ">
        <div className="flex flex-col sm:flex-row justify-between items-center pt-10">
          <div className="mb-6 sm:mb-0">
            <div className="flex items-start flex-col sm:flex-row">
              <h2 className="font-bold xl:text-5xl md:text-3xl sm:text-xl max-w-[24rem] xl:mb-4 md:mb-2 sm:mb-0">
                What Book You Looking For?
              </h2>
              <img
                src={BookGif}
                alt="book gif"
                className="inline xl:mb-4 md:mb-2 sm:mb-0 sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[141px] xl:h-[141px]"
              />
            </div>
            <p className="my-4">Explore our Catalog and Find Your Next Read</p>
            <Search />
            <div className="flex items-center mt-6 ">
              <button className="my-4 m-9 xl:w-40 xl:h-12  lg:w-32 lg:h-8  md:w-22 md:h-4 sm:w-20 sm:h-2 bg-yellow-500 border-2 border-black rounded-lg relative">
                <div className="xl:pr-14 lg:pr-10 md:pr-4 sm:pr-2">
                  Explore{" "}
                </div>
                <div className="absolute xl:top-3 xl:left-28 lg:top-2 lg:left-20 md:top-1 md:left-12 sm:top-1 sm:left-8">
                  <PiBinoculars size={24} />{" "}
                </div>
              </button>
              <span className="text-3xl">-----------------------</span>
            </div>
          </div>
          {/* ------------------- */}
          <div className="relative w-full h-full md:w-[96px] md:h-[100px] lg:w-[290px] lg:h-[300px] xl:w-[484px] xl:h-[503px]">
            <div className="w-full h-full md:w-[96px] md:h-[100px] lg:w-[290px] lg:h-[300px] xl:w-[484px] xl:h-[503px]">
              <img
                src={Rectangle}
                alt="Rectangle photo"
                className="z-10 object-cover w-full h-full"
              />
            </div>
            <div className="bg-blue-500 object-cover w-full h-full md:w-[96px] md:h-[100px] lg:w-[290px] lg:h-[300px] xl:w-[484px] xl:h-[503px] absolute -top-8 -left-8 rounded-bl-3xl rounded-tr-3xl z-[-1]"></div>
          </div>
          {/* ------------------- */}
        </div>

        {/* output books from api */}
        <p className="text-center text-xl ">New Books</p>

        {newestData.items &&
          newestData.items.map((myData) => (
            <div key={myData.id}>
              <p>Title: {myData.volumeInfo.title}</p>
              <p>Authors: {myData.volumeInfo.authors.join(", ")}</p>
              {/* Add more details as needed */}
            </div>
          ))}
      </main>

      <Footer />
    </>
  );
};

export default Home;

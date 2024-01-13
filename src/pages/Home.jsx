import React, { useEffect, useState } from "react";
import BookGif from "../assets/book-gif.png";
import Rectangle from "../assets/Rectangle 9.jpg";
import { PiBinoculars } from "react-icons/pi";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Search from "../components/shared/Search";
import fetchData from "../api/fetchData";
import Slider from "../components/sliderComponent/Slider";
import Book from "../components/shared/Book";

const Home = () => {
  const [newestData, setNewestData] = useState({ items: [] });
  const [error, setError] = useState(null);
  // slideris
  const [sliderValue, setSliderValue] = useState(1);
  //slideristvis
  const calculateBooksToShow = () => {
    const width = window.screen.width;
    // const width = window.innerWidth;
    if (width >= 1200) {
      return 8;
    } else if (width >= 768) {
      return 6;
    } else {
      return 3;
    }
  };

  const nextSlide = () => {
    setSliderValue((prevValue) =>
      prevValue + calculateBooksToShow() < newestData.items.length
        ? prevValue + 1
        : prevValue
    );
  };

  function prevSlide() {
    setSliderValue((prevValue) =>
      prevValue - 1 >= 0 ? prevValue - 1 : prevValue
    );
  }

  useEffect(() => {
    const fetchNewestData = async () => {
      try {
        const data = await fetchData("a", "newest", 16);
        setNewestData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "An error occurred while fetching data.");
      }
    };
    fetchNewestData();
  }, []);

  console.log(newestData, "newestData");
  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto ">
        <div className="flex flex-col xl:flex-row 2xl:flex-row lg:flex-row justify-between items-center py-10">
          <div className="mb-6 ">
            <div className="flex items-start flex-col">
              <h2 className="font-bold xl:text-5xl md:text-3xl max-w-[24rem] xl:mb-4 md:mb-2 ">
                What Book You Looking For?
              </h2>
              <img src={BookGif} alt="book gif" className="inline " />
            </div>
            <p className="my-4">Explore our Catalog and Find Your Next Read</p>

            <Search />
            <div className="flex mt-6 relative mb-10 xl:mb-0">
              <button className=" bg-yellow-500 border-2 border-black rounded-lg w-[154px] h-[52px]">
                <span className="pr-4">Explore</span>
                <PiBinoculars size={24} className="absolute top-4 left-28" />
              </button>
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

        {error ? (
          <p className="text-center text-red-500">
            Error fetching data: {error}. Please check your internet connection.
          </p>
        ) : newestData.items && newestData.items.length > 0 ? (
          <div className=" outline-dashed outline-2 outline-offset-2 rounded-lg relative overflow-hidden">
            <p className="text-center text-xl mt-2 font-semibold">New Books</p>
            <div className=" h-[400px] flex flex-row px-4 gap-10 justify-start items-center ">
              {newestData.items
                .slice(sliderValue, sliderValue + calculateBooksToShow())
                .map((myData) => (
                  //aq unda chavsvat book elementi
                  <Book
                    key={myData.id}
                    src={myData.volumeInfo.imageLinks.thumbnail}
                    title={myData.volumeInfo.title}
                    authors={myData.volumeInfo.authors.join(", ")}
                  />
                ))}
            </div>
            <Slider nextSlide={nextSlide} prevSlide={prevSlide} />
            {/* Sider --- ends here  */}
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import fetchData from "../../api/fetchData";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import Book from "./Book";
import backapImage from "../../assets/bookBackup.webp";

const Slider = ({
  sliderTitle,
  search,
  orderBY,
  maxResult,
  printType,
  subject,
}) => {
  const [newestData, setNewestData] = useState({ items: [] });
  const [error, setError] = useState(null);
  // slideris
  const [sliderValue, setSliderValue] = useState(0);
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
        const data = await fetchData(
          search,
          orderBY,
          maxResult,
          printType,
          subject
        );
        setNewestData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "An error occurred while fetching data.");
      }
    };
    fetchNewestData();
  }, [subject]);


  return (
    <div>
      {error ? (
        <p className="text-center text-red-500">
          Error fetching data: {error}. Please check your internet connection.
        </p>
      ) : newestData.items && newestData.items.length > 0 ? (
        <div className=" outline-dashed outline-2 outline-offset-2 rounded-lg relative overflow-hidden ">
          <p className="text-center text-xl mt-2 font-semibold">
            {sliderTitle ? sliderTitle : "books"}
          </p>
          <div className=" h-[400px] flex flex-row px-4 gap-10 justify-start items-center ">
            {newestData.items
              .slice(sliderValue, sliderValue + calculateBooksToShow())
              .map((myData) => (
                <Book
                  key={myData.id}
                  id={myData.id}
                  src={
                    (myData.volumeInfo.imageLinks &&
                      myData.volumeInfo.imageLinks.thumbnail) ||
                    backapImage
                  }
                  title={myData.volumeInfo.title}
                  authors={
                    myData.volumeInfo.authors &&
                    myData.volumeInfo.authors.length === 1
                      ? myData.volumeInfo.authors[0]
                      : myData.volumeInfo.authors
                      ? myData.volumeInfo.authors.join(", ")
                      : ""
                  }
                  description={
                    myData.volumeInfo.description
                      ? myData.volumeInfo.description
                      : "no description to show"
                  }
                  categories={myData.volumeInfo.categories || "Uncategory"}
                />
              ))}
          </div>
          <div>
            <button className="absolute top-2 right-6" onClick={nextSlide}>
              <MdNavigateNext
                className="bg-yellow-500 hover:bg-yellow-400 rounded-full"
                size={30}
              />
            </button>

            <button className="absolute top-2 right-16" onClick={prevSlide}>
              <MdNavigateBefore
                className="bg-yellow-500 hover:bg-yellow-400 rounded-full"
                size={30}
              />
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
};
export default Slider;

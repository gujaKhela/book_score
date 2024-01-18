import React, { useState } from "react";
import { PiFolderOpenBold } from "react-icons/pi";
import fetchData from "../../api/fetchData";
import Slider from "../shared/Slider";

const BookCategories = () => {
  const [clickCategory, setClickCategory] = useState("");

  const categories = [
    "Comedy",
    "Science",
    "Fiction",
    "Psychology",
    "Mind",
    "Spirit",
    "Medical",
    "Biography",
    "Mathematics",
    "Religion",
    "Art",
    "History",
    "Romance",
    "Thriller",
    "Horror",
    "Mystery",
    "Fantasy",
    "Adventure",
  ];

  const handleClick = (e) => {
    const choosedCategory = e.target.innerText;
    setClickCategory(choosedCategory);
  };

  return (
    <>
      <div className="flex gap-4">
        <div>{<PiFolderOpenBold size={24} />}</div>
        <span className="text-xl font-semibold pb-4"> Categories</span>
      </div>
      <div className="flex flex-wrap gap-10">
        {categories.map((cat, i) => (
          <div key={i} className="relative group">
            <button
              className="inline bg-white h-14 w-60 outline rounded-lg text-lg hover:font-medium "
              onClick={handleClick}
            >
              <p className="">{cat}</p>
            </button>
            <div className="bg-orange-500 h-14 w-60 rounded-lg absolute top-2 left-2 z-[-10] opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
          </div>
        ))}
      </div>
      <div className="mt-40">
        <Slider
          subject={clickCategory ||"Comedy"}
          maxResult={12}
          orderBY="newest"
          sliderTitle={clickCategory ||"Comedy"}
        />
      </div>
    </>
  );
};

export default BookCategories;

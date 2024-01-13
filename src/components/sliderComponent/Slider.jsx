import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const Slider = ({ nextSlide, prevSlide }) => {
    console.log(nextSlide);
  return (
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
  );
};
export default Slider;

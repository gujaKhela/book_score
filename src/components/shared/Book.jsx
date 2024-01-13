import React from "react";

const Book = ({src,title,authors}) => {
  return (
    <div className="" >
      <button className="w-[160px] h-[220px]">
        <img
          src={src}
          alt="book cover"
          className="bg-cover w-full h-full hover:opacity-90"
        />
      </button>

      <div className="w-full h-[50px] overflow-hidden">
        <p className="text-center">
          {" "}
          <strong>Title:</strong> {title}
        </p>
      </div>

      <div className="w-full h-[50px] overflow-hidden">
        <p className="text-center	">
          <strong>Authors: </strong> {authors}
        </p>
      </div>
      {/* Add more details as needed */}
    </div>
  );
};

export default Book;

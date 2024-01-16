import React from "react";
import { useNavigate } from "react-router-dom";
import bookBackupImage  from "../../assets/bookBackup.webp"

const Book = ({ id, src, title, authors }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`, {state:{"src":src,"title":title,"authors":authors}});
  };

  return (
    <div className="">
      <button className="w-[160px] h-[220px]" onClick={handleClick}>
        <img
          src={src ? src: bookBackupImage}
          alt="book cover"
          className="bg-cover w-full h-full hover:opacity-85"
          loading="lazy"
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

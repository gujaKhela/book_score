import React from "react";

const BookCategories = () => {
  const categories = [
    "Political Science",
    "Fiction",
    "Psychology",
    "Body, Mind & Spirit",
    "Medical",
    "Biography & Autobiography",
    "Mathematics",
    "Religion",
    "Language Arts & Disciplines",
    "History",
    "Language Arts & Disciplines",
    "Romance",
    "Thriller",
    "Horror",
    "Mystery",
    "Fantasy",
    "Adventure"
  ];

  return (
    <>
      <div className="flex flex-wrap gap-10">
        {categories.map((cat, i) => (
          <div key={i} className="relative group">
            <button className="inline bg-white h-14 w-60 outline rounded-lg  ">
              <p className="">{cat}</p>
            </button>
            <div className="bg-orange-500 h-14 w-60 rounded-lg absolute top-2 left-2 z-[-10] opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookCategories;

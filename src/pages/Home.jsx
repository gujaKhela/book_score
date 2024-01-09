import React from "react";
import Header from "../components/Header";
import BookGif from "../assets/book-gif.png";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto">
        <div className="flex items-start">
          <h2 className="font-bold text-5xl w-72">
            What Book You Looking For?
          </h2>
          <img src={BookGif} alt="book gif" className="inline" />
        </div>
        <p className="my-4">Expolore our Catalog and Find Your Next Read</p>

        <Search />

        <button className="my-4 m-9">
          Explore amaze daklikebit unda gdavidet categoriebis gverdze
        </button>
      </main>
    </>
  );
};

export default Home;

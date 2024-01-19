import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { BsCart } from "react-icons/bs";
import { GrFormPrevious } from "react-icons/gr";
import Slider from "../components/shared/Slider";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Details = () => {
  const { id, src, title, authors, description, tempPrice, categories } =
    useParams();
  console.log("categoriesssssssssssssssssss", categories);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(tempPrice);
  const location = useLocation();
  const navigate = useNavigate();

  if (!id || !src || !title || !authors || !description) {
    // Handle the case where state is not available
    return <div>Error: Details not available</div>;
  }

  const handleBack = () => {
    navigate(-1, { state: location.state });
  };

  document.title = title;

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      setPrice(() => tempPrice * (count - 1));
    }
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setPrice(() => tempPrice * (count + 1));
  };

  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto ">
        <button onClick={handleBack}>
          <div className="bg-yellow-500 rounded-full hover:bg-yellow-400">
            <GrFormPrevious size={28} />
          </div>
        </button>

        <div className="flex flex-col space-x-40 md:flex-row">
          <div className="min-w-[150px] max-h-[180px] md:min-w-[200px] md:min-h-[270px] xl:min-w-[280px] min-h-[300px] mb-10 ">
            <img
              src={src}
              alt="book image"
              className="w-full h-full bg-cover border rounded-xl"
            />
          </div>

          <div>
            <p className="text-2xl font-medium my-4">
              <strong>Title: </strong> {title}
            </p>
            <div className="max-w-[680px] min-h-16 outline-dashed rounded-2xl flex items-center text-center my-6">
              <p className="mx-4">
                <strong>Author(s):</strong> {authors}
              </p>
            </div>
            <div className="max-w-[680px] min-h-16 outline-dashed rounded-2xl flex items-center text-center my-6">
              <div className="">
                <p className="m-4">
                  <strong className="text-lg">Description:</strong>{" "}
                  {description}
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-end">
                <div className="grid gap-5">
                  <div className="flex items-center gap-2">
                    <strong className="text-3xl">$</strong>
                    <input
                      type="number"
                      className="text-3xl"
                      value={price.toString()}
                      readOnly
                    />
                  </div>
                  <button className="w-64 h-10 bg-yellow-500 rounded-full hover:bg-yellow-400">
                    <BsCart size={28} className="mx-auto" />
                  </button>
                </div>

                <div>
                  <div className="flex items-center">
                    <button
                      onClick={decrement}
                      className=" outline rounded-full mx-6 p-1 w-6 h-6 grid content-center hover:bg-red-500"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={count}
                      readOnly
                      className="w-10 h-8 text-xl outline rounded-md text-center"
                    />

                    <button
                      onClick={increment}
                      className="outline rounded-full mx-6 p-1 w-6 h-6 grid content-center hover:bg-green-500 "
                    >
                      +
                    </button>
                  </div>

                  <button className="w-64 h-10 bg-orange-500 rounded-full mt-6 text-lg font-medium hover:bg-orange-400">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-20">
          <Slider sliderTitle={"More Similar"} search={categories} />
        </div>
      </main>

      <Footer />
    </>
  );
};

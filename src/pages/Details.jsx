import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { GrFormPrevious } from "react-icons/gr";
import Slider from "../components/shared/Slider";
import bookBackup from "../assets/bookBackup.webp";
import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Cart } from "../components/shared/Cart";
import CountControl from "../components/shared/CountControl";

export const Details = () => {
  const { id, src, title, authors, description, categories } =
    useParams();
  const onePeasePrice = 15;
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(onePeasePrice);
  const location = useLocation();
  const navigate = useNavigate();

  if (!id || !title || !authors || !description) {
    // Handle the case where state is not available
    return <div>Error: Details not available</div>;
  }
  const handleBack = () => {
    navigate(-1, { state: location.state });
  };

  document.title = title;

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
          <div className="min-w-[150px] max-h-[180px] md:min-w-[200px] md:min-h-[270px] xl:min-w-[236px] xl:min-h-[325px] mb-10 ">
            {src ? (
              <img
                src={src}
                alt="book image"
                className="w-full h-full bg-cover border rounded-xl"
              />
            ) : (
              <img
                src={bookBackup}
                alt="fallback book image"
                className="w-full h-full bg-cover border rounded-xl"
              />
            )}
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

                  <Cart
                    title={title}
                    authors={authors}
                    price={price}
                    count={count}
                    id={id}
                    src={src}
                  />
                </div>

                <div>
                  <CountControl
                    count={count}
                    price={price}
                    setCount={setCount}
                    setPrice={setPrice}
                    onePeasePrice={onePeasePrice}
                  />

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

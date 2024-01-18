import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Details = () => {
  const [quantity, setQuantity] = useState(1)
  const location = useLocation();
  const navigate = useNavigate();
  const { id, src, title, authors,description,tempPrice } = useParams();

  if (!id || !src || !title || !authors||!description) {
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
        <button onClick={handleBack}>back</button>

        <div className="flex gap-3">
          <div>
            <img src={src} alt="book image" />
          </div>
          <div>
            <p>title: {title}</p>
            <p>authors: {authors}</p>
            <p>description: {description}</p>
            <div>
              <div className="flex gap-10">
                <div >
                  <p>price $ {tempPrice}</p>
                  <button>add to cart icon</button>
                </div>
                <div>
                  <p>quantity{quantity}</p>
                  <button>bui it now</button>
                </div>
              </div>
            </div>
          </div>
        </div>


      </main>

      <Footer />
    </>
  );
};

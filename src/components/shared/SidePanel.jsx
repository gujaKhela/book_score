import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useEffect } from "react";
import { CiBookmark } from "react-icons/ci";
import { GoTrash } from "react-icons/go";

const SidePanel = ({ closeSidePanel }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const handleDelete = (id) => {
    // Filter out the item with the specified id
    const updatedCart = item.filter((it) => it.id !== id);
    // Update state and local storage with the updated cart
    setItem(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  console.log(item);
  return (
    <div className="w-6/12 h-full bg-white fixed top-0 right-0 z-50">
      <div className="flex ">
        <button className="w-18 h-18" onClick={closeSidePanel}>
          <FaAngleLeft size={28} className="mt-20 hover:text-orange-500 " />
        </button>
        <p className="mt-20 ml-4"> your cart (items)</p>
      </div>

      <div>
        {item.length>0 ? (
          item.map((it) => (
            <div
              key={it.id}
              className=" justify-around outline-dashed rounded-xl w-10/12 h-48 mx-auto mb-4"
            >
              <div className="flex justify-around content-center">
                <div className="w-28 h-32 my-6">
                  <img
                    src={it.src}
                    alt="image of books"
                    className="w-full h-full"
                  />
                </div>

                <div>
                  <p className="my-6 text-3xl font-semibold">{it.price} $</p>
                  <button onClick={() => handleDelete(it.id)}>
                    <GoTrash size={36} className="hover:text-orange-500" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl font-semibold mt-6">No items on card</p>
        )}

        
      </div>
    </div>
  );
};

export default SidePanel;

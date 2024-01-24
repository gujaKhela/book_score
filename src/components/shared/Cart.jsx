import { useEffect } from "react";
import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { useLocation } from "react-router-dom";

export const Cart = ({ title, authors, price, count, id, src }) => {
  const [cart, setCart] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const location = useLocation();
  const details = location.pathname.includes("/details");

  // Load cart from local storage when the component mounts
  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(existingCart);
  }, []);

  const addToCart = (cartItem) => {
    setButtonClicked(true);

    // Check if the item with the same id is already in the cart
    const existingCartItemIndex = cart.findIndex(
      (item) => item.id === cartItem.id
    );

    if (existingCartItemIndex !== -1) {
      // If the item already exists, update the count
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item, index) => {
          if (index === existingCartItemIndex) {
            return {
              ...item,
              count: item.count + 1,
            };
          }
          return item;
        });

        // Update local storage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return updatedCart;
      });
    } else {
      // If the item does not exist, add it to the cart
      setCart((prevCart) => {
        const updatedCart = [...prevCart, cartItem];

        // Update local storage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return updatedCart;
      });
    }
  };

  return (
    <div>
      <button
        className={`${
          details
            ? "w-64 h-10 bg-yellow-500 rounded-full hover:bg-yellow-400"
            : "bg-yellow-500 outline w-20 h-8 outline-gray-300 rounded-xl hover:bg-yellow-400"
        }`}
        onClick={() =>
          addToCart({
            title: title,
            authors: authors,
            price: price,
            count: count,
            id: id,
            src: src,
          })
        }
      >
        <BsCart size={28} className="mx-auto" />
      </button>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import Logo from "../../assets/LOGO.png";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import SidePanel from "./SidePanel";
import { BsCart } from "react-icons/bs";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItemCount(existingCart.length);
  }, [openCart]);

  function handleCartOpen() {
    setOpenCart(true);
  }

  function closeSidePanel() {
    setOpenCart(false);
  }

  return (
    <>
      <div className="w-11/12 mx-auto h-10 my-10 flex justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="site logo" className="w-32 h-6" />
          </Link>
        </div>
        <div className="flex items-center	">
          <BsBookmark size={24} className="mx-5" />
          <button onClick={handleCartOpen} className="relative">
            <BsCart size={26} />
            {cartItemCount > 0 && (
              <span className="bg-red-500 rounded-full w-4 h-4 text-white absolute top-0 right-0 -mt-2 -mr-2 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
        {openCart ? <SidePanel closeSidePanel={closeSidePanel} /> : null}
      </div>
    </>
  );
};

export default Header;

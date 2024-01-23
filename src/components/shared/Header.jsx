import React, { useState } from "react";
import Logo from "../../assets/LOGO.png";
import BookMark from "../../assets/BOOKMARK_SIMPLE.png";
import shoppingCart from "../../assets/SHOPPING_CART.png";
import { BsBookmark } from "react-icons/bs";

import { Link } from "react-router-dom";
import SidePanel from "./SidePanel";
import { BsCart } from "react-icons/bs";


const Header = () => {
  const [openCart, setOpenCart] = useState(false);

  function handleCartOpen() {
    setOpenCart(true);
    console.log(openCart);
  }

  function closeSidePanel () {
        setOpenCart(false)
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
          {/* <img src={BookMark} alt="BookMark" className="w-4 h-6 mx-5" /> */}
          <button onClick={handleCartOpen}>
            <BsCart size={26} />
            {/* <img src={shoppingCart} alt="shopping Cart" className="w-7 h-6" /> */}
          </button>
        </div>
        {openCart ? <SidePanel closeSidePanel={closeSidePanel}/> : null}
      </div>
    </>
  );
};

export default Header;

import React from "react";
import Logo from "../../assets/LOGO.png";
import BookMark from "../../assets/BOOKMARK_SIMPLE.png";
import shoppingCart from "../../assets/SHOPPING_CART.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-11/12 mx-auto h-10 my-10 flex justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="site logo" className="w-32 h-6" />
          </Link>
        </div>
        <div className="flex items-center	">
          <img src={BookMark} alt="BookMark" className="w-4 h-6 mx-5" />
          <img src={shoppingCart} alt="shopping Cart" className="w-7 h-6" />
        </div>
      </div>
    </>
  );
};

export default Header;

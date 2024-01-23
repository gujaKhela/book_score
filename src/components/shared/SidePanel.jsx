import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import CartItems from "./CartItems";



const SidePanel = ({closeSidePanel}) => {

  return (
    <div className="w-5/12 h-full bg-white fixed top-0 right-0 z-50">
        <div className="flex ">

        <button className="w-18 h-18" onClick={closeSidePanel}>
        <FaAngleLeft size={28} className="mt-20 hover:text-orange-500 "/>
        </button>
        <p className="mt-20 ml-4"> your cart (items)</p>
        </div>



        <div>
            <CartItems />
        </div>
    </div>
  );
};

export default SidePanel;

import React from "react";
import { GoTrash } from "react-icons/go";

const CartItems = () => {
  return (
    <div className="flex justify-around outline-dashed rounded-xl w-10/12 h-48 mx-auto">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>book name</p>
        <p>author</p>
        <p>quantity</p>
      </div>
      <div>
        <p>price $</p>
        <button>
          <GoTrash size={26} className="hover:text-orange-500" />
        </button>
      </div>
    </div>
  );
};

export default CartItems;

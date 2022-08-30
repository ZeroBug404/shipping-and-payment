import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbTruck } from "react-icons/tb";
import Cart from "./Cart";
import PaymentMethods from "./PaymentMethods";
import ShipInfoFrom from "./ShipInfoFrom";

const Context = () => {
  return (
    <div className="w-11/12 m-auto">
      {/* Upper section */}
      <div className="flex">
        <div className="w-1/2">
          <h3 className="font-medium text-lg">Shipping and Payment</h3>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="flex justify-center items-center border-2 border-x-cyan-200 rounded-full p-2">
            <AiOutlineShoppingCart />
          </div>
          <div className="flex justify-center items-center mx-1.5">
            <div className="w-16 h-0.5 bg-sky-100"></div>
          </div>
          <div className="flex justify-center items-center border-2 bg-cyan-200 rounded-full p-2">
            <TbTruck />
          </div>
        </div>
      </div>

      <div className="flex">
        <ShipInfoFrom />
        <PaymentMethods />
        <Cart />
      </div>
    </div>
  );
};

export default Context;

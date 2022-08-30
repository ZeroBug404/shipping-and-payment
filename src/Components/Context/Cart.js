import React from "react";
import { RiTruckLine } from "react-icons/ri";
import shirt1 from "../../Assets/products/shirt1.jpg";
import shirt2 from "../../Assets/products/shirt2.jpg";

const Cart = () => {
  return (
    <div className="mt-8 ml-16">
      <h4 className="mb-5">Your cart</h4>

      {/* Carts */}
      <div className="flex justify-around items-center">
        <div className="flex items-center gap-5">
          <img className="rounded-full" width={"20%"} src={shirt1} alt="" />

          <div>
            <h3>T-Shirt</h3>
            <h4>Summer Vibes</h4>
          </div>
        </div>
        <div>
          <h3>$69.99</h3>
        </div>
      </div>
      <div className="flex justify-around items-center mt-5">
        <div className="flex items-center gap-5">
          <img className="rounded-full" width={"20%"} src={shirt2} alt="" />

          <div>
            <h3>T-Shirt</h3>
            <h4>Summer Vibes</h4>
          </div>
        </div>
        <div>
          <h3>$89.99</h3>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <div className="flex justify-around w-72 p-3 bg-slate-100 rounded-full">
          <h3>Total cost</h3>
          <h3>$159,98</h3>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <RiTruckLine className="mr-5"/>
        <h3 className="w-36">You are $30.02 away from free shipping!</h3>
      </div>
    </div>
  );
};

export default Cart;

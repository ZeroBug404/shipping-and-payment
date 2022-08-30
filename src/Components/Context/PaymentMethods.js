import React from "react";
import dhl from "../../Assets/delivaryMethods/dhl.png";
import dpd from "../../Assets/delivaryMethods/dpd.png";
import fedex from "../../Assets/delivaryMethods/fedex.jpg";
import inpost from "../../Assets/delivaryMethods/inpost.png";
import deal from "../../Assets/payMethods/deal.png";
import discover from "../../Assets/payMethods/discover.jpg";
import masterCard from "../../Assets/payMethods/masterCard.png";
import paypal from "../../Assets/payMethods/paypal.png";
import visa from "../../Assets/payMethods/visa.webp";

const PaymentMethods = () => {
  return (
    <div className="mt-8 ml-16">
      <div className="">
        <h4>Payment method</h4>
        <div className="flex gap-3 mt-5">
          <div className="border-2 border-solid rounded-full w-24 p-2 flex justify-center">
            <img width={"60%"} src={paypal} alt="" />
          </div>
          <div className="border-2 border-solid rounded-full w-24 p-2 flex justify-center">
            <img width={"60%"} src={visa} alt="" />
          </div>
          <div className="border-2 border-solid rounded-full w-24 p-2 flex justify-center">
            <img width={"60%"} src={masterCard} alt="" />
          </div>
        </div>
        <div className="flex gap-3 my-2">
          <div className="border-2 border-solid rounded-full w-24 p-2 flex justify-center">
            <img width={"60%"} src={paypal} alt="" />
          </div>
          <div className="border-2 border-solid rounded-full w-24 p-2 flex justify-center">
            <img width={"60%"} src={discover} alt="" />
          </div>
          <div className="border-2 border-solid rounded-full w-24 p-2 flex justify-center">
            <img width={"60%"} src={deal} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h4>Delivery method</h4>

        <div className="mt-5">
          <div className="flex gap-3 my-2">
            <div className="border-2 border-solid rounded-full w-32 p-2 flex justify-between items-center gap-3">
              <img width={"40%"} src={inpost} alt="" />
              <h3>$20.00</h3>
            </div>
            <div className="border-2 border-solid rounded-full w-32 p-2 flex justify-between items-center gap-3">
              <img width={"40%"} src={dpd} alt="" />
              <h3>$12.00</h3>
            </div>
          </div>
          <div className="flex gap-3 my-2">
            <div className="border-2 border-solid rounded-full w-32 p-2 flex justify-between items-center gap-3">
              <img width={"40%"} src={dhl} alt="" />
              <h3>$15.00</h3>
            </div>
            <div className="border-2 border-solid rounded-full w-32 p-2 flex justify-between items-center gap-3">
              <img width={"40%"} src={fedex} alt="" />
              <h3>$10.00</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;

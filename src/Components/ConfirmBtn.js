import React from "react";
import { BiArrowBack } from "react-icons/bi"

const ConfirmBtn = () => {


  return (
    <div className="w-11/12 m-auto flex justify-between">
      <div className="flex justify-center items-center">
        <BiArrowBack />
        <h3 className="ml-3">Back</h3>
      </div>
      <div>
        <button class="btn btn-outline btn-accent rounded-full">CONTINUE SHOPPING</button>
        <button class="btn btn-success ml-5 rounded-full text-white">PROCEED TO PAYMENT</button>
      </div>
    </div>
  );
};

export default ConfirmBtn;

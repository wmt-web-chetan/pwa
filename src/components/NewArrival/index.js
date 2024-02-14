import React from "react";
import Bag from "./test.jpg";
import "./newArrival.css";
const NewArrival = () => {
  return (
    <div>
      <div className=" bg-white rounded-lg shadow-md overflow-hidden newCard">
        <img
          className="w-full h-24 md:h-32 object-contain"
          src={Bag}
          alt="Light pink purse on a table"
        />
        <div className="px-2">
        <div className="flex justify-between items-center">
          <p className="">Handbag</p>
          <p className="mt-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"
              />
            </svg>
          </p>
          
        </div>
        <p className="text-gray-600 text-sm">Blossom Pouch </p>
        <p className="text-md">$39.49</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;

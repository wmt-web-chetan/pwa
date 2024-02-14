import "./Header.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "../../../services/Store/GetUserData/actions";
import Teaas from "./align-center.png"
import Plus from "./medkit-outline.png"
import Search from "./search.png"
import Alert from "./add-alert-outline-rounded.png"
import Home from "./home.png"
import Square from "./squares-2x2-16-solid.png"
import User from "./user.png"
import Bag from "./bag.png"

const Headers = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="hidden md:block">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0 font-bolder logo">
                CORA'L
              </a>
              <div className="hidden sm:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    className=" px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Handbags
                  </a>
                  <a
                    href="/"
                    className=" px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Watches
                  </a>
                  <a
                    href="/"
                    className=" px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Skincare
                  </a>
                  <a
                    href="/"
                    className=" px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Jewellery
                  </a>
                  <a
                    href="/"
                    className=" px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Apparels
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center space-x-4">
                <a
                  href="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign In
                </a>
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Search
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="px-2 flex justify-between py-5  md:hidden">
        <div className="flex justify-center items-center">
        <img src={Teaas} alt="has" height={35} width={35}/>
        <span className=" text-xl px-3 homeLogo font-semibold">Home</span>
        </div>
        <div className="flex justify-between gap-6">
          <img src={Plus} alt="has" height={25} width={25}/>
          <img src={Search} alt="has" height={25} width={25}/>
          <img src={Alert} alt="has" height={25} width={25}/>
        </div>
      </div>
      <div className=" md:hidden fixed bottom-0 w-full z-50 bottom-header py-3">
      <div className="flex justify-between gap-6 px-4">
          <img src={Home} alt="has" height={25} width={25}/>
          <img src={Square} alt="has" height={25} width={25}/>
          <img src={User} alt="has" height={25} width={25}/>
          <img src={Bag} alt="has" height={25} width={25}/>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Headers;

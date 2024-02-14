import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/HeroSection";
import NewArrival from "../../components/NewArrival";
import "./dashboard.css";
import Test from "./test.jpg";
import HeroImg from "./hero.png";

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="topSection hidden md:flex  justify-center items-center py-3">
        We are currently experiencing local customs clearance delays. For the
        latest updates, please check your order status here
      </div>
      <Hero />
      {/* cardSection */}
      <div className="px-2 md:px-2">
        <div className="flex justify-between items-center py-3">
          <h1 className="md:text-xl font-semibold">New Arrivals</h1>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            View All
          </a>
        </div>
        <div className="flex gap-4 cardContainer ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <NewArrival key={index} />
          ))}
        </div>
      </div>
      {/* homeContainer */}
      <section className=" homeContainer py-4 md:py-4 md:mt-3 px-2">
        <h1 className="text-xl font-semibold mb-3 md:mb-6 text-white">
          Handpicked Collections
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 ">
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <div className="bg-gray-100 ease-in-out rounded-lg relative h-40 md:h-72">
                <img
                  src={Test}
                  alt="Personal Care"
                  className="mx-auto md:mb-4 w-full rounded-lg h-full object-contain md:object-cover"
                />
                <h3 className="text-xl font-bold mb-2 absolute bottom-0 md:px">
                  Personal Care
                </h3>
              </div>
            );
          })}
        </div>
      </section>
      {/* homeContainer1 */}
      <div className="px-2">
        <div className="flex justify-between items-center py-3">
          <h1 className="md:text-xl font-semibold">Shop by Brands</h1>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            View All
          </a>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-10 ">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <div className="bg-gray-100 ease-in-out rounded-lg  flex justify-center items-center">
                <img
                  src={Test}
                  alt="Personal Care"
                  className=" w-full rounded rounded-lg h-full md:h-32 object-contain md:object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* homeContainer2 */}
      <div className=" mt-10 px-2 mb-16 relative">
        <img src={HeroImg} alt="hero" className="w-full rounded-lg h-48 md:h-64" />
        <div className=" absolute top-12 px-4">
          <h1 className="text-xl md:text-2xl colr">LIFESTYLE</h1>
          <p className=" font-semibold text-2xl md:text-4xl  colr mt-2" >Makeup Accessories </p>
          <p className=" font-semibold text-2xl md:text-4xl colr">from Top Brands</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

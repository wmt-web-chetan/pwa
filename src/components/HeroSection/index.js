import React from "react";
import HeroImg from "./hero.png";
import "./Hero.css";
import RightArrow from "./arrow-long-right.png";

const Hero = () => {
  return (
    <div className="">
      <div className="px-2 flex justify-center">
        <div className="box mx-2 mt-5  md:mt-6 ">
          <h1 className="text1 ">Carry your Funk</h1>
          <p className="hidden md:block text">
            Trendy handbags collection for your
          </p>
          <p className="hidden md:block text">party animal</p>
          <p className="block md:hidden text">
            Trendy handbags collection for your party animal
          </p>

          <button className="hidden mt-3 md:mt-3 md:flex justify-center">
            <img src={RightArrow} alt="right-arrow" width={25} height={25} />
            <span className="px-2">Shop Now</span>
          </button>
        </div>
        <img src={HeroImg} alt="hero" className="heroImg" />
      </div>
      {/* <div className="mobile "></div> */}
    </div>
  );
};

export default Hero;

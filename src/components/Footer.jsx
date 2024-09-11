import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          {/* <img src={assets.footer} className=" w-40" /> */}
          <p className="w-full md:w-2/3 text-gray-600 leading-6 text-2xl font-bold ">
            Ishowdehyde is a tutor site, that make it easy for any student to
            get the best teacher in the world.
          </p>
        </div>
        <div>
          <p className="texl-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-700">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Private Policy</li>
          </ul>
        </div>
        <div>
          <p className="texl-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-700">
            <li>+234 815-511-3559</li>
            <li>olawaleishola@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright {new Date().getFullYear()}@ Ishowdehyde - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

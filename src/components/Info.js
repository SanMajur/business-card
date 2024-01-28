import React from "react";
import profilePic from "../images/profile1.JPG";
import { CiLinkedin } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

function Info() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center ">
      <div className="bg-[#1A1B21] w-[317px] my-16 rounded-md">
        <img src={profilePic} className="rounded-t-md" alt="santino profile" />
        <h1 className="text-white text-4xl pt-4 text-center capitalize">
          Santino majur
        </h1>
        <h3 className="text-[#F3BF99] text-center text-sm">
          software engineer
        </h3>
        <p className="text-xs text-center text-[#F5F5F5]">santinomajur.com</p>
        <div className="flex justify-around mt-4">
          <button className="py-2 px-6 flex items-center rounded-md bg-white outline-none hover:bg-[#D1D5DB]">
            <FaEnvelope className="mr-2" />
            Email
          </button>
          <button className="py-2 px-3 flex items-center rounded-md bg-[#5093E2] text-white outline-none hover:bg-cyan-900">
            <CiLinkedin className="mr-2" />
            LinkedIn
          </button>
        </div>
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

export default Info;

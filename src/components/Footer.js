import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[#161619] h-[64px] rounded-b-md">
       <div className="flex justify-around items-center max-w-[150px] mx-auto h-[64px]">
          <FaSquareXTwitter className="text-gray-500 w-10 h-6 cursor-pointer hover:text-white" />
          <FaSquareFacebook className="text-gray-500 w-10 h-6 cursor-pointer hover:text-white" />
          <FaSquareInstagram className="text-gray-500 w-10 h-6 cursor-pointer hover:text-white" />
          <FaSquareGithub className="text-gray-500 w-10 h-6 cursor-pointer hover:text-white" />
        </div>
    </div>
  );
}

export default Footer;

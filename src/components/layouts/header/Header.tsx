import React from "react";
import Logo from "../../../assets/NALAConsulting.png";
import { Bars4Icon } from "@heroicons/react/24/solid";
function Header() {
  return (
    <div className="px-2 mt-2 sm:px-10 md:px-2 ">
      <div className="flex justify-between place-items-center ">
        
        <div className="flex place-items-center">
          <img src={Logo} alt="Logo" className="w-14" />
          <span className=" px-2 font-primaryBold lg:px-5 sm:px-2 lg:text-lg ">
            NALA SECURITY CONSULTING
          </span>
        </div>

        <div className=" hidden lg:gap-20  md:flex gap-14 font-primaryBold tracking-tight text-md bg-secondary h-12 rounded-full px-8 place-items-center">
          <a href="/" className="activeClass">Acceuil</a>
          <a href="/">Services</a>
          <a href="/">Realisations</a>
          <a href="/">A propos</a>
        </div>

        <div className="md:hidden ">
          <Bars4Icon className="size-8 text-black-700" />
        </div>
      </div>
    </div>
  );
}

export default Header;

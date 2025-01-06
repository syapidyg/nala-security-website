import React from "react";
import Logo1 from "../../../assets/logo/card-1.png";
import Logo2 from "../../../assets/logo/card-2.png";
import Logo3 from "../../../assets/logo/card-3.png";
import Logo4 from "../../../assets/logo/card-4.png";
import Logo5 from "../../../assets/logo/card-5.png";
import Logo6 from "../../../assets/logo/card-6.png";
import Logo7 from "../../../assets/logo/card-7.png";
import Logo9 from "../../../assets/logo/card-9.png";

function Partenaire() {
  return (
    <div className="px-4  sm:px-10 md:px-10 font-primaryRegular">
      <div>
        <div className="md:place-items-center sm:place-items-start">
          <div className=" flex flex-col items-center text-center   ">
            <h1 className="text-2xl font-primaryBold text-primary  mb-6 mt-5">
              Nos Partenaires
            </h1>
            <h1 className="text-4xl font-primaryBold mb-4 md:w-11/12 text-5xl">
              Ils Nous Font Confiance.
            </h1>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-auto py-2"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img className="LogoClass " src={Logo5} alt="Logo5" />
          <img className="LogoClass " src={Logo1} alt="Logo1" />
          <img className="LogoClass " src={Logo2} alt="Logo2" />
          <img className="LogoClass " src={Logo3} alt="Logo3" />
          <img className="LogoClass " src={Logo4} alt="Logo4" />
          <img className="LogoClass " src={Logo6} alt="Logo6" />
          <img className="LogoClass " src={Logo7} alt="Logo7" />
          <img className="LogoClass " src={Logo9} alt="Logo9" />
        </div>
      </div>
    </div>
  );
}

export default Partenaire;

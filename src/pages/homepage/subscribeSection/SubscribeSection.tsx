import React from "react";

const Banner = {
  height: "100%",
  width: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

function SubscribeSection() {
  return (
      <div style={Banner}  className=" font-primaryRegular bg-gradient-to-r from-primary to-primary-200 text-white mt-6">
        <div className="space-y-6 max-w-xl mx-auto container backdrop-blur-sm py-10">
          <div className=" font-primaryBold  !text-center text-4xl sm:text-left sm:pl-16 ">
            <h1>Restez En Contact Avec Nous</h1>
            <input type="text" name="" id="" placeholder="Entrez votre Email" className="w-11/12  p-3 mt-2  text-black" />
          </div>
        </div>
      </div>
  );
}

export default SubscribeSection;

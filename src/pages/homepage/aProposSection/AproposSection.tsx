import React from "react";
import Decouverte from "../../../assets/logo/decouverte.png";
import Button from "../../../components/button/Button";

function AproposSection() {
  return (
    <div className="px-4 sm:px-10 md:px-10 bg-secondary font-primaryRegular">
      <div>
        <div className="place-items-center">
          <div className=" flex flex-col items-center text-center   ">
            <h1 className="text-2xl font-primaryBold text-primary  mb-6 mt-5">
              Decouvrir Qui Nous Sommes.
            </h1>
          </div>
        </div>
        <div className=" max-w-screen-2xl py-10">
          <div className=" md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 ">
            <div data-aos="fade-zoom-out" data-aos-offset="100" data-aos-delay="50">
              <img  className="rounded-xl" src={Decouverte} alt="" />
            </div>
          <div className="md:w-3/5 mx-auto">
              <h2 className="text-4xl font-primaryBold mb-4 md:w-11/12 text-5xl">
                Découvrez le futur leader de la cyber sécurité en Afrique
                centrale.
              </h2>
              <p className="md:w-3/4 text-sm text-neutralGrey mb-4">
                La référence en matière de bonnes pratiques de sécurité et de
                conformité. Notre ambition c'est d'être reconnus comme le
                partenaire privilégié des entreprises et des particuliers pour
                garantir la sécurité de leurs données et de leurs systèmes
                informatiques.
              </p>
              <p className="mb-5 md:w-3/4 text-sm ">
                Grâce à une équipe d'experts dédiés, nous anticipons les risques
                et renforçons la résilience de vos systèmes pour que vous
                puissiez avancer en toute sérénité.
              </p>
              <div className="py-5">
                <Button to="/a-propos" children={"A Propos de nous"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AproposSection;

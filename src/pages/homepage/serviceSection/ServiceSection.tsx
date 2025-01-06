import React from "react";
import {
  CloudIcon,
  BuildingOfficeIcon,
  KeyIcon,
} from "@heroicons/react/24/solid";
import Button from "../../../components/button/Button";

function ServiceSection() {
  const services = [
    {
      id: 1,
      title: "Sécurité CLOUD",
      description:
        "Solution Sécurité Cloud  complète incluant chiffrement, authentification renforcée et récupération de données.",
      icons: CloudIcon,
    },
    {
      id: 2,
      title: "Sécurité des infrastructures",
      description:
        "Analyse des menaces, et évaluation de l'impact potentiel des attaques.",
      icons: BuildingOfficeIcon,
    },
    {
      id: 3,
      title: "Prevention de pertes de données ",
      description:
        "Identification des données sensibles , évaluation des vulnérabilités, surveillance et veille continue.",
      icons: KeyIcon,
    },
  ];

  return (
    <div className=" sm:px-10 md:px-10 bg-secondary font-primaryRegular">
      <div>
        <div className="place-items-center">
          <div className=" flex flex-col items-center text-center ">
            <h1 className="text-2xl font-primaryBold text-primary  mb-6 mt-5">
              Nos Offres et Services
            </h1>
            <h1 className="   text-4xl font-primaryBold mb-4 md:w-11/12 text-5xl sm:place-items-start md:place-items-center">
              Des solutions sur mesure pour une cybersécurité sans faille.
            </h1>
          </div>
        </div>

        {/* Cards */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="sm:w-2/6 mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className=" bg-gradient-to-r from-black/10 via-primary/20 to-primary/5  bg-px-4 py-2 text-center md:w-[300px] mx-auto md:h-64 rounded-xl shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-primary transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <div className="h-16 w-16 mx-auto mb-4">
                  <service.icons className="w-12 h-12 bg-primary stroke-white fill-primary rounded-full p-2" />
                </div>
                <h4 className="text-2xl font-semibold font-primaryRegular text-neutralGrey mb-2 px-2">
                  {service.title}
                </h4>
                <p className="text-sm text-neutralGrey font-primaryRegular">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex  justify-center py-8">
        <Button children={"Voir Plus"} />
      </div>
    </div>
  );
}

export default ServiceSection;

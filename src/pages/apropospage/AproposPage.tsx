import React from "react";
import 'aos/dist/aos.css'; // Importation des styles AOS
import AOS from "aos";

const AproposPage = () => {
  // Initialisation de AOS
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Section Header */}
      <section className="relative bg-cover bg-center h-64 md:h-96" style={{ backgroundImage: "url('https://via.placeholder.com/1500x800')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">À propos de nous</h1>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="py-12 px-6 md:px-16 lg:px-32">
        <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">Qui sommes-nous ?</h2>
        <p className="text-lg text-gray-600 text-center leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          Nous sommes une équipe passionnée dédiée à fournir des solutions innovantes dans le domaine des technologies de l'information. Notre mission est de transformer les idées en solutions concrètes qui créent de la valeur pour nos clients.
        </p>
      </section>

      {/* Section Mission & Vision */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 grid md:grid-cols-2 gap-10">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Apporter des solutions digitales efficaces et adaptées aux besoins spécifiques de nos clients tout en garantissant une excellente qualité de service.
            </p>
          </div>
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Être un acteur majeur de la transformation digitale, en mettant l'accent sur l'innovation, la performance et la durabilité.
            </p>
          </div>
        </div>
      </section>

      {/* Section Team */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">Notre Équipe</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {["Alice", "Bob", "Charlie"].map((name, index) => (
            <div key={index} className="w-60 bg-white shadow-lg rounded-lg p-4 text-center" data-aos="zoom-in" data-aos-delay={`${index * 200}`}>
              <img src={`https://via.placeholder.com/150`} alt={name} className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h4 className="text-xl font-bold">{name}</h4>
              <p className="text-gray-600">Développeur Full-Stack</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Nos Valeurs */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16 lg:px-32">
          {["Innovation", "Excellence", "Intégrité", "Collaboration", "Responsabilité", "Satisfaction Client"].map((value, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <h4 className="text-2xl font-bold mb-2">{value}</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AproposPage;

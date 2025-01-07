import React from "react";
import "aos/dist/aos.css"; // Importation des styles AOS
import AOS from "aos";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import Ellipse from "../../components/ellipse/Ellipse";

const AproposPage = () => {
  // Initialisation de AOS
  React.useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  const valeurs = [
    {
      title: "L'intégrité",
      description:
        " NALA SECURITY CONSULTING insiste sur les normes éthiques et des attitudes responsables de la part de ses collaborateurs. Cela implique une transparence dans ses opérations, le respect de la confidentialité des données des clients et la fourniture des services de qualité.",
    },
    {
      title: "Engagement envers la protection des donnees",
      description:
        "NALA SECURITY CONSULTING a un engagement important envers la protection des données de ses clients. Cela implique la mise en place de mesures de sécurité infaillibles, le respect des réglementations en matière des données et la proactivité pour prévenir les violations des données.",
    },
    {
      title: "Sensibilisation et éducation",
      description:
        "NALA SECURITY CONSULTING a conscience de son rôle dans la sensibilisation et l'éducation du public sur les enjeux de la cybersécurité. Dans cette optique, nous mettons sur pieds des formations et ressources éducatives pour aider les individus à mieux comprendre les risques, adopter de bonnes pratiques de sécurité et augmenter les aptitudes de personnes cherchant de nouvelles perspectives.",
    },
  ];

  return (
    <div className=" text-gray-900 font-primaryRegular">
      <Ellipse />
      <Navbar />
      <div className="place-items-center">
        <div className=" flex flex-col items-center text-center   ">
          <h1 className="text-2xl font-primaryBold text-primary  mb-6 mt-5">
            NOS SERVICES
          </h1>
        </div>
      </div>
      {/* Section Introduction */}
      <section className="pb-12 pt-4 px-6 md:px-16 lg:px-32">
        <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">
          Qui sommes-nous ?
        </h2>
        <p
          className="text-lg text-gray-900 text-center leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          NALA SECURITY CONSULTING est une entreprise de cybersécurité basée au
          Cameroun, fondée en 2021 après la crise sanitaire mondiale (COVID-19).
          Le siège social est Douala-Bonamoussadi. Nous sommes spécialisés dans
          la protection des entreprises et des individus contre les attaques
          cyber-croissantes qui menacent le monde numérique. Avec une équipe
          d'experts en sécurité hautement qualifiés et la collaboration de
          partenaires d'une expérience très solide dans le domaine, nous offrons
          des services et des solutions de pointe pour répondre aux besoins de
          sécurité informatique de nos clients.
        </p>
      </section>

      {/* Section Mission & Vision */}
      <section className="py-12 bg-primary text-white ">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 grid md:grid-cols-2 gap-10">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-4">Point de vue extérieur</h3>
            <p className="text-white leading-relaxed">
              L''Afrique est un continent en phase de développement rapide avec
              une économie numérique croissante, cela implique de nouveaux défis
              et des risques. La cybercriminalité tout aussi en progression
              permanente, les organisations et les gouvernements doivent donc
              prendre des mesures proactives pour se protéger contre cette
              menace. De nombreuses organisations, en particulier les petites et
              moyennes entreprises, manquent de ressources financières et
              techniques pour mettre en place des mesures de cyber sécurité
              efficaces. La création de NALA SECURITY CONSULTING répond donc au
              besoin de collaboration avec ces PME's pour mettre en œuvre des
              solutions de cyber sécurité.
            </p>
          </div>
          <div data-aos="fade-left te">
            <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
            <p className="text-white leading-relaxed">
              Notre vision est de devenir le leader incontesté de la
              cybersécurité en Afrique Centrale, en général et au Cameroun en
              particulier. La référence en matière de bonnes pratiques de
              sécurité et de conformité. Notre ambition c'est d'être reconnus
              comme le partenaire privilégié des entreprises et des particuliers
              pour garantir la sécurité de leurs données et de leurs systèmes
              informatiques.
            </p>
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs */}
      <section className="py-12 ">
        <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">
          Nos Valeurs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16 lg:px-32">
          {valeurs.map((valeur, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-black/10 via-primary/20 to-primary/5 shadow-md rounded-lg p-6 text-center"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <h4 className="text-2xl font-bold mb-2">{valeur.title}</h4>
              <p className="text-black">{valeur.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AproposPage;

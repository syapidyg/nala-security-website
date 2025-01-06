import React from "react";
import Ellipse from "../../components/ellipse/Ellipse";
import HeroSection from "./heroSection/HeroSection";
import Header from "../../components/layouts/header/Header";
import Partenaire from "./partenaire/Partenaire";
import Navbar from "../../components/layouts/navbar/Navbar";
import ServiceSection from "./serviceSection/ServiceSection";
import AproposSection from "./aProposSection/AproposSection";
import Footer from "../../components/layouts/footer/Footer";
import SubscribeSection from "./subscribeSection/SubscribeSection";

function HomePage() {
  return (
    <div>
      <Ellipse />
      <Navbar/>
      <HeroSection />
      <AproposSection/>
      <ServiceSection/>
      <SubscribeSection/>
      <Partenaire />
      <Footer/>
    </div>
  );
}

export default HomePage;

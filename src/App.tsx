import Ellipse from "./components/ellipse/Ellipse";
import HeroSection from "./pages/homepage/heroSection/HeroSection";
import Header from "./components/layouts/header/Header";
import HomePage from "./pages/homepage/HomePage";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  // const handleClick = (buttonName: string) => {
  //   alert(`You clicked ${buttonName}`);
  // };

  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 50,
    });
    Aos.refresh();
  }, []);
  return (
    <div className="w-screen  ">
      {/* <Button onClick={() => handleClick('Contactez nous')} >Nos </Button> */}
      <HomePage />
    </div>
  );
}

export default App;

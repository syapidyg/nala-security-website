import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import AppRouter from "./routes/AppRouter";

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
      <AppRouter />
    </div>
  );
}

export default App;

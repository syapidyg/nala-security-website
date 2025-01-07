import React, { useEffect } from "react";
import Logo from "../../../assets/NALAConsulting.png";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);
  const location = useLocation();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarItems = [
    { link: "Home", path: "/" },
    { link: "Services", path: "/services" },
    { link: "Realisations", path: "/realisation" },
    { link: "A Propos", path: "/a-propos" },
  ];
  return (
    <header>
      <nav
        className={`py-4 lg:px-12 px-2  ${isSticky ? "sticky top-0 left-0 right-0 border-b duration-300" : ""}`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link to="/" className="space-x-2 flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="w-14 inline-block items-center"
            />
            <span className="font-primaryBold">NALA SECURITY CONSULTING</span>
          </Link>

          {/* Nav pour les grands ecrans */}
          <ul className="md:flex space-x-20 hidden bg-secondary tracking-tight h-12 rounded-full px-8 place-items-center ">
            {navbarItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                spy={true}
                smooth={true}
                offset={-100}
                className={`block text-base hover:text-primary-200 first:font-medium  ${
                  location.pathname === item.path ? "activeClass" : ""
                }`}
              >
                {item.link}
              </Link>
            ))}
          </ul>

          {/* Nav pour les petits ecrans */}
          <div className="md:hidden">
            <button>
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" onClick={toggleMenu} />
              ) : (
                <Bars4Icon className="w-6 h-6" onClick={toggleMenu} />
              )}
            </button>
          </div>
        </div>

        {/* Nav items for mobile device */}
        <div className="space-y-2 px-4 bg-primary">
          {isMenuOpen && (
            <ul className="md:hidden space-y-4 mt-4 text-white py-4">
              {navbarItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className={`block text-base hover:text-primary-200 first:font-medium  ${
                    location.pathname === item.path ? "activeClass2" : ""
                  }`}                >
                  {item.link}
                </Link>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

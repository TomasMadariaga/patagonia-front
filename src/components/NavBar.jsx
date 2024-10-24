import { Link } from "react-router-dom";
import { HomeIcon } from "../icons/Icons";
// import { IoPerson } from "react-icons/io5";
import { useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const handleLogout = () => {
  //   logout();
  //   toggleMenu();
  // };

  return (
    <nav className="bg-white shadow-xl flex xl:flex-row flex-col xl:items-center xl:justify-between fixed z-20 xl:h-16 h-auto w-full left-0">
      <div className="flex text-gray-500 font-inter xl:py-3 py-5 w-full justify-between px-4">
        <Link onClick={toggleMenu} to="/">
          <HomeIcon size={24} />
        </Link>
        <button
          onClick={toggleMenu}
          className="xl:hidden focus:outline-none self-start"
        >
          <svg
            className="w-6 h-6 0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`xl:flex flex xl:flex-row xl:items-center xl:text-nowrap xl:self-center text-end text-gray-500 flex-col self-end align-baseline px-4 xl:gap-5 gap-3 py-2 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link onClick={toggleMenu} to="services">
            Servicios
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="our-projects">
            Nuestros proyectos
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="about-us">
            Sobre nosotros
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleMenu}
            to="/contact"
            className="xl:rounded-full xl:py-2 xl:px-6 transition-all duration-300 xl:text-white xl:bg-red-500/85 xl:hover:bg-red-600"
          >
            Contáctenos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

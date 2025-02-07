import { Link } from "react-router-dom";
import { HomeIcon } from "../icons/Icons";
import { IoPerson } from "react-icons/io5";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const { isAuthenticated, user, logout, checkUser } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    logout();
    toggleMenu();
    handleLinkClick();
    setProfileOpen(false);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  };

  const handleOpenProfile = () => {
    setProfileOpen((prev) => !prev);
  };

  useEffect(() => {
    checkUser();
  }, [isAuthenticated]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg flex xl:flex-row flex-col xl:items-center xl:justify-between fixed z-20 xl:h-16 h-auto w-full left-0">
      <div className="flex text-gray-500 font-inter xl:py-3 py-5 w-full justify-between px-4">
        <Link
          onClick={() => menuOpen & setMenuOpen(false) & handleLinkClick()}
          to="/"
        >
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
        className={`xl:flex flex xl:flex-row xl:items-center xl:text-nowrap xl:self-center text-gray-500 flex-col align-baseline px-4 xl:gap-5 gap-3 py-2 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link
            className="rounded-full xl:px-2 xl:py-2 xl:hover:bg-gray-200 xl:border xl:hover:border-spacing-1 xl:border-gray-300 xl:hover:shadow-md xl:transition-all xl:duration-150"
            onClick={() => toggleMenu() & handleLinkClick()}
            to="services"
          >
            Servicios
          </Link>
        </li>
        <li>
          <Link
            className="rounded-full xl:px-2 xl:py-2 xl:hover:bg-gray-200 xl:border xl:border-gray-300 xl:hover:shadow-md xl:transition-all xl:duration-150"
            onClick={() => toggleMenu() & handleLinkClick()}
            to="construction"
          >
            Construcción
          </Link>
        </li>
        <li>
          <Link
            className="rounded-full xl:px-2 xl:py-2 xl:hover:bg-gray-200 xl:border xl:border-gray-300 xl:hover:shadow-md xl:transition-all xl:duration-150"
            onClick={() => toggleMenu() & handleLinkClick()}
            to="reparation"
          >
            Reparación
          </Link>
        </li>
        <li>
          <Link
            className="rounded-full xl:px-2 xl:py-2 xl:hover:bg-gray-200 xl:border xl:border-gray-300 xl:hover:shadow-md xl:transition-all xl:duration-150"
            onClick={() => toggleMenu() & handleLinkClick()}
            to="professionals"
          >
            Nuestros profesionales
          </Link>
        </li>
        <li>
          <Link
            className="rounded-full xl:px-2 xl:py-2 xl:hover:bg-gray-200 xl:border xl:border-gray-300 xl:hover:shadow-md xl:transition-all xl:duration-150"
            onClick={() => toggleMenu() & handleLinkClick()}
            to="about-us"
          >
            Sobre nosotros
          </Link>
        </li>
        {isAuthenticated && user ? (
          <>
            <li ref={profileRef} className="relative">
              <button
                onClick={handleOpenProfile}
                className="flex items-center gap-1 rounded-full xl:px-2 py-1 xl:hover:bg-gray-200 xl:border xl:border-gray-300 xl:hover:shadow-md cursor-pointer transition-all duration-150"
              >
                <IoPerson />
                {user.name}
              </button>
              {profileOpen && (
                <ul className="absolute w-fit top-full left-0 bg-white shadow-md border border-gray-300 rounded-md py-2">
                  <li>
                    <Link
                      onClick={handleOpenProfile}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Mi perfil
                    </Link>
                  </li>
                  {isAuthenticated && user?.role === "Admin" && (
                    <li>
                      <Link
                        onClick={handleOpenProfile}
                        to={"/admin"}
                        className="block px-4 py-2 text-white bg-red-300 hover:bg-red-400"
                      >
                        Panel de administrador
                      </Link>
                    </li>
                  )}
                  {isAuthenticated && user?.role === "Cliente" && (
                    <li>
                      <Link
                        onClick={handleOpenProfile}
                        to={"/activity"}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Actividad
                      </Link>
                    </li>
                  )}
                  {isAuthenticated && (user?.role !== "Cliente" && user?.role !== "Admin") && (
                    <li>
                      <Link
                        onClick={handleOpenProfile}
                        to={"/activity-professional"}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Actividad
                      </Link>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </>
        ) : (
          <li>
            <Link
              onClick={() => toggleMenu() & handleLinkClick()}
              to="/login"
              className="xl:border border-black/50 rounded-full xl:py-2 xl:px-6 transition-all duration-300 xl:hover:bg-black xl:hover:text-white"
            >
              Iniciar Sesión
            </Link>
          </li>
        )}
        <li>
          <Link
            onClick={() => toggleMenu() & handleLinkClick()}
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

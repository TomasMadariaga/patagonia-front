import { Link } from "react-router-dom";
import { CallIcon, SearchIcon } from "../icons/Icons";

export const NavBar = () => {
  return (
    <nav className="bg-white flex gap-10 py-3 items-center justify-evenly border fixed top-0 left-0 w-full z-20 h-16">
      <ul className="flex text-gray-500 gap-5 font-inter">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="services">Servicios</Link></li>
        <li><Link>Nuestros proyectos</Link></li>
        <li><Link to='/about-us'>Sobre nosotros</Link></li>
      </ul>
      <ul className="flex gap-5 items-center">
        {/* <button className="rounded-full bg-gray-100 p-3 transition-all duration-300 hover:bg-gray-200">
            <SearchIcon size={20}/>
        </button> */}
        <li className="flex items-center text-gray-500 cursor-pointer transition-all duration-300 hover:text-gray-600">
          <CallIcon size={20}/>
          +54 294-4641368
        </li>
        <li>
          <Link to="/login" className="border border-black/50 rounded-full py-2 px-6 transition-all duration-300 hover:bg-black hover:text-white">
            Iniciar Sesión
          </Link>
        </li>
        <li>
          <Link to='/contact' className="rounded-full py-2 px-6 transition-all duration-300 text-white bg-red-700/75 hover:bg-red-700/95">
            Contáctenos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
} from "../icons/Icons";

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-marine-blue text-white w-full justify-center items-center">
      <div className="w-4/5 border-b-2">
        <ul className="flex lg:flex-nowrap flex-wrap justify-center lg:text-left text-center lg:justify-evenly lg:gap-28 gap-5 lg:py-14 py-7">
          <li className="flex-col lg:flex hidden">
            <p>¿Cómo podemos ayudar?</p>
            <p className="lg:text-2xl text-xl lg:font-normal font-semibold">
              Contáctenos en cualquier momento
            </p>
          </li>
          <li className="flex flex-col">
            <p className="lg:font-normal font-semibold">Llámenos</p>
            <a
              href="tel:+54 294-4641368"
              className="lg:text-xl text-light-gray text-nowrap  transition-all duration-150 hover:underline"
            >
              +54 294-4641368
            </a>
          </li>
          <li className="flex flex-col">
            <p className="lg:font-normal font-semibold">Envíenos un mensaje</p>
            <a
              href="mailto:rrss.cruzpatagonia@gmail.com"
              className="lg:text-xl text-light-gray transition-all duration-150 hover:underline"
            >
              rrss.cruzpatagonia@gmail.com
            </a>
          </li>
          <li className="flex flex-col gap-3">
            <p className="lg:font-normal font-semibold">Síganos</p>
            <ul className="flex lg:gap-5 gap-7 text-light-gray">
              <li>
                <a className="transition-all duration-150" href="#">
                  <LinkedInIcon className="transition-all duration-250 lg:scale-100 lg:hover:scale-125 scale-125" />
                </a>
              </li>
              <li>
                <a
                  className="transition-all duration-150"
                  href="https://www.instagram.com/cruzpatagonia/"
                >
                  <InstagramIcon className="transition-all duration-250 lg:scale-100 lg:hover:scale-125 scale-125" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FacebookIcon className="transition-all duration-250 lg:scale-100 lg:hover:scale-125 scale-125" />
                </a>
              </li>
              <li>
                <a className="transition-all duration-150" href="#">
                  <TikTokIcon className="transition-all duration-250 lg:scale-100 lg:hover:scale-125 scale-125" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ul className="flex lg:flex-row flex-col justify-between items-center w-3/4 lg:py-4 py-2">
        <img className="size-24 lg:m-0 mb-2 " src="/logo.png" />
        <ul className="flex text-light-gray gap-10 lg:text-nowrap">
          <li>
            <Link
              to="/"
              className="transition-all duration-200 hover:underline"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="transition-all duration-200 hover:underline"
            >
              Sobre nosotros
            </Link>
          </li>
          {/* <li>
            <Link
              to="our-projects"
              className="transition-all duration-200 hover:underline "
            >
              Nuestros Proyectos
            </Link>
          </li> */}
          <li>
            <Link
              to="terms-and-conditions"
              className="transition-all duration-200 hover:underline"
            >
              Términos y condiciones
            </Link>
          </li>
        </ul>
      </ul>
      <ul className="flex w-full items-center justify-center">
        <div className="w-3/4 py-5 text-center">
          <li>Copyright © Cruz Patagonia</li>
        </div>
      </ul>
    </footer>
  );
};

import { Link } from "react-router-dom";
import ICON from "../assets/website_logo.svg";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../icons/Icons";

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-marine-blue text-white w-full justify-center items-center">
      <div className="w-3/4 border-b-2">
        <ul className="flex justify-evenly gap-28 py-14">
          <li className="flex flex-col">
            <p>¿Cómo podemos ayudar?</p>
            <p className="text-2xl">Contáctenos en cualquier momento</p>
          </li>
          <li className="flex flex-col">
            <p>Llámenos</p>
            <a
              href="tel:+54 294-4641368"
              className="text-xl text-light-gray text-nowrap  transition-all duration-150 hover:underline"
            >
              +54 294-4641368
            </a>
          </li>
          <li className="flex flex-col">
            <p>Envíenos un mensaje</p>
            <a
              href="mailto:rrss.cruzpatagonia@gmail.com"
              className="text-xl text-light-gray transition-all duration-150 hover:underline"
            >
              rrss.cruzpatagonia@gmail.com
            </a>
          </li>
          <li className="flex flex-col gap-3">
            <p>Síganos</p>
            <ul className="flex gap-5 text-light-gray">
              <li>
                <a className="transition-all duration-150" href="#">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a className="transition-all duration-150" href="#">
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a className="transition-all duration-150" href="https://www.instagram.com/cruzpatagonia/">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a className="transition-all duration-150" href="#">
                  <FacebookIcon />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ul className="flex justify-between items-center w-3/4 py-4">
        <img className="size-36 h-auto" src={ICON} />
        <ul className="flex text-light-gray gap-10 text-nowrap">
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
          <li>
            <Link className="transition-all duration-200 hover:underline ">
              Nuestros Proyectos
            </Link>
          </li>
          <li>
            <Link to="terms-and-conditions" className="transition-all duration-200 hover:underline">
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

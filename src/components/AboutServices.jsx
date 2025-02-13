import { Link } from "react-router-dom";
import img from "../assets/couch3.jpeg";

export const AboutServices = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  };

  return (
    <div className="flex lg:flex-row lg:w-auto flex-col items-center justify-center gap-5 pb-20">
      <img
        src={img}
        className="lg:w-2/5 w-4/5 p-3 border rounded-md shadow-md"
      />
      <div className="lg:w-2/5 w-4/5 flex flex-col justify-around">
        <div className="flex flex-col gap-3 font-nunito">
          <h2 className="lg:text-4xl text-lg lg:text-left text-center font-semibold font-inter text-slate-800">
            Diseñamos espacios únicos para mejorar tu vida.
          </h2>
          <p className="lg:text-left text-center">
            Nuestra misión es transformar tus espacios con servicios de
            remodelación y construcción de alta calidad.
          </p>
          <p className="lg:text-left text-center">
            Cada proyecto está diseñado para adaptarse a tus gustos y
            necesidades, brindándote un ambiente funcional y estéticamente
            agradable.
          </p>
        </div>
        <Link
        onClick={handleLinkClick}
          to="/services"
          className="lg:self-start self-center py-2 mt-6 px-4 text-white bg-black/85 rounded-full transition-all duration-200 hover:bg-black/95"
        >
          Descubre nuestros servicios
        </Link>
      </div>
    </div>
  );
};

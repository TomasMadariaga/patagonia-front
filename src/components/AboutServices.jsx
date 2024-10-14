import { Link } from "react-router-dom";
import img from "../assets/leaf.jpg";

export const AboutServices = () => {
  return (
    <div className="bg-white flex w-full justify-center gap-5 py-20">
      <img src={img} className="w-2/5 p-3 border rounded-md shadow-md" />
      <div className="w-2/5 flex flex-col justify-around">
        <div className="flex flex-col gap-3 font-nunito">
          <h2 className="text-4xl font-inter text-slate-800">
            Construyamos juntos el hogar de tus sueños.
          </h2>
          <p>
            Ofrecemos servicios de construcción y reparación de inmuebles con
            métodos ecológicos y sostenibles para crear espacios más saludables
            y amigables con el medio ambiente. Contáctanos para más información.
          </p>
          <p>
            Comienza con el cliente, descubre lo que quiere y dale el hogar que
            merece.
          </p>
        </div>
        <Link to="/services" className="place-self-start py-2 mt-6 px-4 text-white bg-black/85 rounded-full transition-all duration-200 hover:bg-black/95">Descubre nuestros servicios</Link>
      </div>
    </div>
  );
};

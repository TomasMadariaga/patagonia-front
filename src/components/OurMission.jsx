import img from "../assets/patagonia01.webp";

export const OurMission = () => {
  return (
    <div className="flex-col py-20 px-5">
      <h2 className="lg:text-4xl text-2xl text-center lg:pb-24 pb-14 text-slate-800 font-inter">
        Construimos tu mundo, proyecto por proyecto, casa por casa
      </h2>
      <div className="flex flex-row justify-around">
        <div className="lg:w-2/4 lg:pr-5">
          <ul className="flex flex-col lg:gap-4 gap-5">
            <li className="lg:border-none lg:bg-gray-100 bg-gray-200 border-2 border-blue-500 lg:rounded-none rounded-xl lg:shadow-none shadow-lg lg:p-0 p-1 lg:block flex flex-col gap-1">
              <span className="text-slate-800 font-bold font-inter">
                Innovación tecnologica:
              </span>{" "}
              Apostamos por la tecnología de vanguardia para simplificar el
              acceso a servicios esenciales de construcción, reparación y diseño
              de inmuebles
            </li>
            <li className="lg:border-none lg:bg-gray-100 bg-gray-200 border-2 border-blue-500 lg:rounded-none rounded-xl lg:shadow-none shadow-lg lg:p-0 p-1 lg:block flex flex-col gap-1">
              <span className="text-slate-800 font-bold font-inter">
                Calidad y confianza:
              </span>{" "}
              Garantizamos que cada profesional cumple con altos estándares de
              calidad y compromiso con la satisfacción del cliente
            </li>
            <li className="lg:border-none lg:bg-gray-100 bg-gray-200 border-2 border-blue-500 lg:rounded-none rounded-xl lg:shadow-none shadow-lg lg:p-0 p-1 lg:block flex flex-col gap-1">
              <span className="text-slate-800 font-bold font-inter">
                Empoderamiento local:
              </span>{" "}
              Apoyamos el desarrollo de profesionales locales, dándole
              herramientas para crecer y expandir sus oportunidades laborales
            </li>
            <li className="lg:border-none lg:bg-gray-100 bg-gray-200 border-2 border-blue-500 lg:rounded-none rounded-xl lg:shadow-none shadow-lg lg:p-0 p-1 lg:block flex flex-col gap-1">
              <span className="text-slate-800 font-bold font-inter">
                Transparencia:
              </span>{" "}
              Fomentamos relaciones de confianza mediante precios justos,
              evaluaciones claras y procesos abiertos
            </li>
          </ul>
        </div>
        <img
          style={{ borderRadius: "12% 88% 18% 82% / 33% 38% 68% 66%" }}
          src={img}
          className="h-72 w-2/5 lg:block hidden"
        />
      </div>
    </div>
  );
};

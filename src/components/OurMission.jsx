import img from '../assets/patagonia01.webp'

export const OurMission = () => {
  return (
    <div className="flex-col py-20 px-5">
      <h2 className="text-4xl text-center pb-24 text-slate-800 font-inter">Construimos tu mundo, proyecto por proyecto, casa por casa</h2>
      <div className="flex flex-row justify-around">
        <div className='w-2/4 pr-5'>
          <ul className='flex flex-col gap-4'>
            <li className='font-nunito'>
              <span className="text-slate-800 font-bold font-inter">Innovación tecnologica:</span> Apostamos por la tecnología
              de vanguardia para simplificar el acceso a servicios esenciales de
              construcción, reparación y diseño de inmuebles
            </li>
            <li>
              <span className="text-slate-800 font-bold font-inter">Calidad y confianza:</span> Garantizamos que cada
              profesional cumple con altos estándares de calidad y compromiso
              con la satisfacción del cliente
            </li>
            <li>
              <span className="text-slate-800 font-bold font-inter">Sostenibilidad:</span> Promovemos practicas responsables que
              minimicen el impacto ambiental en cada intervención
            </li>
            <li>
              <span className="text-slate-800 font-bold font-inter">Accesibilidad global:</span> Creemos en la inclusión y
              acceso a servicios profesionales sin importar la ubicación
              geográfica
            </li>
            <li>
              <span className="text-slate-800 font-bold font-inter">Empoderamiento local:</span> Apoyamos el desarrollo de
              profesionales locales, dándole herramientas para crecer y expandir
              sus oportunidades laborales
            </li>
            <li>
              <span className="text-slate-800 font-bold font-inter">Transparencia:</span> Fomentamos relaciones de confianza
              mediante precios justos, evaluaciones claras y procesos abiertos
            </li>
          </ul>
        </div>
        <img style={{ borderRadius: "12% 88% 18% 82% / 33% 38% 68% 66%" }} src={img} className='h-72 w-2/5'/>
      </div>
    </div>
  );
};

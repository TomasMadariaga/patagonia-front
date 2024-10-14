import {
  AnalyticsIcon,
  ArchitectureIcon,
  MoneyCheckIcon,
} from "../icons/Icons";

export const ProjectionServices = () => {
  return (
    <div  style={{'text-shadow': '1px 1px 0px black'}} className="my-5 py-20 bg-projection bg-fixed bg-cover bg-no-repeat relative">
      <div className="flex justify-around">
        <div>
          <div className="flex flex-col text-white py-14 text-center">
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <h2 className="text-4xl pb-10 font-inter font-semibold z-10">
              Proyección de Obras
            </h2>
            <p className="text-lg font-semibold z-10">
              Planificación estratégica para proyectos inmobiliarios, asegurando
              desarrollo eficiente y acorde a expectativas.
            </p>
            <p className="text-lg z-10">
              Ofrecemos estudios técnicos y económicos, junto con herramientas
              avanzadas como modelado 3D y análisis de costos, para facilitar
              decisiones informadas desde el inicio.
            </p>
            <p className="text-lg z-10">
              Con años de experiencia y un equipo certificado, usamos
              tecnologías de última generación. Contacta para una consulta
              gratuita y da vida a tu proyecto desde la planificación.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex gap-7 py-12 px-20">
              <div className="flex flex-col items-center gap-10 text-white z-10 backdrop-blur-sm bg-white border bg-opacity-20 rounded-xl p-5 w-full">
                <AnalyticsIcon size={100} className="text-cyan-700 z-10" />
                <div className="bg-cyan-700 rounded-b-md p-1 text-center">
                  <h2 className="font-semibold text-lg pb-2">
                    Análisis de viabilidad
                  </h2>
                  <p>
                    Evaluamos el terreno, el entorno y las normativas locales
                    para asegurarte una planificación precisa.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-10 text-white z-10 backdrop-blur-sm bg-white border bg-opacity-20 rounded-xl p-5 w-full">
                <ArchitectureIcon size={100} className="text-cyan-700" />
                <div className="bg-cyan-700 rounded-b-md p-1 text-center">
                  <h2 className="font-semibold text-lg pb-2">
                    Diseño arquitectónico
                  </h2>
                  <p>
                    Creamos planos detallados y renders 3D que muestran el
                    futuro de tu proyecto con total claridad.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-10 text-white z-10 backdrop-blur-sm bg-white border bg-opacity-20 rounded-xl p-5 w-full">
                <MoneyCheckIcon size={100} className="text-cyan-700" />
                <div className="bg-cyan-700 rounded-b-md p-1 text-center">
                  <h2 className="font-semibold text-lg pb-2">
                    Presupuesto inicial
                  </h2>
                  <p>
                    Ofrecemos una estimación económica ajustada y transparente
                    para cada fase del proyecto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

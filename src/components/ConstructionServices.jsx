import { CalendarIcon, DiamondIcon, ManageIcon } from "../icons/Icons";

export const ConstructionServices = () => {
  return (
    <div  style={{'text-shadow': '1px 1px 0px black'}} className="my-5 py-20 bg-construction bg-fixed bg-cover bg-no-repeat relative">
      <div className="flex justify-center">
        <div className="text-center flex flex-col py-14 text-white">
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <h2 className="text-4xl font-inter font-semibold pb-10 z-10">
            Construcción Profesional de Inmuebles
          </h2>
          <p className="text-lg font-semibold z-10">
            Compromiso con la excelencia en cada proyecto, garantizando calidad
            y entrega a tiempo.
          </p>
          <p className="text-lg z-10">
            Ejecutamos cada fase de construcción con precisión, usando
            materiales de primera calidad y cumpliendo con normativas técnicas y
            de seguridad.
          </p>
          <p className="text-lg z-10">
            Con más de X proyectos entregados, trabajamos con los mejores
            proveedores y ofrecemos garantía total sobre los resultados.
            Solicita una reunión para discutir tu próximo proyecto.
          </p>
          <div className="flex justify-center">
            <div className="flex gap-7 py-12 px-20">
              <div className="flex flex-col items-center gap-10 text-white z-10 backdrop-blur-sm bg-white border bg-opacity-20 rounded-xl p-5 w-full">
                <ManageIcon size={100} className="text-cyan-700" />
                <div className="bg-cyan-700 rounded-b-md p-1 text-center">
                  <h2 className="font-semibold text-lg pb-2">
                    Gestión completa del proyecto
                  </h2>
                  <p>
                    Nos encargamos de la planificación, coordinación y ejecución
                    de todas las fases del proceso constructivo.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-10 text-white z-10 backdrop-blur-sm bg-white border bg-opacity-20 rounded-xl p-5 w-full">
                <CalendarIcon size={100} className="text-cyan-700" />
                <div className="bg-cyan-700 rounded-b-md p-1 text-center">
                  <h2 className="font-semibold text-lg pb-2 xl:text-nowrap">
                    Cumplimiento de plazos y presupuesto
                  </h2>
                  <p>
                    Trabajamos con un enfoque eficiente para entregar resultados
                    dentro del tiempo y costo acordado.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-10 text-white z-10 backdrop-blur-sm bg-white border bg-opacity-20 rounded-xl p-5 w-full">
                <DiamondIcon size={100} className="text-cyan-700" />
                <div className="bg-cyan-700 rounded-b-md p-1 text-center">
                  <h2 className="font-semibold text-lg pb-2">
                    Calidad garantizada
                  </h2>
                  <p>
                    Supervisión constante y uso de materiales certificados para
                    asegurar la durabilidad y el valor de la construcción.
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

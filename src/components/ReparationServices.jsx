import { ElectricIcon, MaintenanceIcon, StructureIcon } from "../icons/Icons";

export const ReparationServices = () => {
  return (
    <div
      style={{ "text-shadow": "1px 1px 0px black" }}
      className="my-5 pt-5 pb-20 bg-reparacion bg-fixed bg-cover bg-no-repeat relative"
    >
      <div className="flex justify-center">
        <div className="text-center flex flex-col py-14 text-white">
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <h2 className="text-4xl text-white font-inter font-semibold pb-10 z-10">
            Reparación y Mantenimiento de Inmuebles
          </h2>
          <p className="text-lg font-semibold z-10">
            Soluciones confiables para tus necesidades de reparación y
            mantenimiento, cuidando tus propiedades como si fueran nuestras.
          </p>
          <p className="text-lg z-10">
            Ofrecemos un servicio eficiente para cualquier desperfecto, desde
            pequeñas reparaciones hasta renovaciones completas, asegurando la
            funcionalidad de tu inmueble.
          </p>
          <p className="text-lg z-10">
            Intervenciones rápidas, garantía en todos los proyectos y servicio
            disponible todos los dias con seguimiento post-entrega. Agenda tu
            llamada hoy mismo.
          </p>
          <div className="flex justify-center">
            <div className="flex gap-7 py-12 px-20">
              <div className="flex flex-col items-center gap-10 text-white z-10 backdrop-blur-sm bg-white border bg-opacity-20 rounded-xl p-5 w-full">
                <StructureIcon size={100} className="text-cyan-700" />
                <div className="bg-cyan-700 rounded-b-md p-1 text-center">
                  <h2 className="font-semibold text-lg pb-2 xl:text-nowrap">
                    Reparaciones estructurales especializadas
                  </h2>
                  <p>
                    Soluciones para problemas de muros y techos. Diagnosticamos
                    y resolvemos fisuras y filtraciones.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-10 text-white z-10 backdrop-blur-sm bg-white border bg-opacity-20 rounded-xl p-5 w-full">
                <ElectricIcon size={100} className="text-cyan-700" />
                <div className="bg-cyan-700 rounded-b-md p-1 text-center">
                  <h2 className="font-semibold text-lg pb-2 xl:text-nowrap">
                    Reparaciones eléctricas y de plomería
                  </h2>
                  <p>
                    Intervenciones inmediatas para garantizar la seguridad y el
                    correcto funcionamiento de tus instalaciones.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-10 text-white z-10 backdrop-blur-sm bg-white border bg-opacity-20 rounded-xl p-5 w-full">
                <MaintenanceIcon size={100} className="text-cyan-700" />
                <div className="bg-cyan-700 rounded-b-md p-1 text-center">
                  <h2 className="font-semibold text-lg pb-2 xl:text-nowrap">
                    Mantenimiento preventivo y correctivo
                  </h2>
                  <p>
                    Programas a medida para asegurar que tu inmueble esté
                    siempre en óptimas condiciones.
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

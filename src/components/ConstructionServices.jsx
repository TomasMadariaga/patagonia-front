import { CalendarIcon, DiamondIcon, ManageIcon } from "../icons/Icons";
import { ServiceCard } from "./ServiceCard";

export const ConstructionServices = () => {
  return (
    <div className="lg:py-20 bg-construction bg-fixed bg-cover bg-no-repeat relative">
      <div>
        <div className="text-center flex flex-col lg:gap-0 gap-3 px-8 py-14 text-white">
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <h2 className="text-4xl font-inter font-semibold pb-10 z-10">
            Construcción Profesional
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
            Trabajamos con los mejores
            proveedores y ofrecemos garantía total sobre los resultados.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-7 py-12 lg:px-20 px-10">
          <ServiceCard
            icon={<ManageIcon size={100} className="text-blue-700 z-10" />}
            title="Gestión completa del proyecto"
            description="Nos encargamos de la planificación, coordinación y ejecución de todas las fases del proceso constructivo."
          />
          <ServiceCard
            icon={<CalendarIcon size={100} className="text-blue-700 z-10" />}
            title="Cumplimiento de plazos y presupuesto"
            description="Trabajamos con un enfoque eficiente para entregar resultados dentro del tiempo y costo acordado."
          />
          <ServiceCard
            icon={<DiamondIcon size={100} className="text-blue-700 z-10" />}
            title="Calidad garantizada"
            description="Supervisión constante y uso de materiales certificados para asegurar la durabilidad y el valor de la construcción."
          />
        </div>
      </div>
    </div>
  );
};

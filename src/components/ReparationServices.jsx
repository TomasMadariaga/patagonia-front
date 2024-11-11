import { ElectricIcon, MaintenanceIcon, StructureIcon } from "../icons/Icons";
import { ServiceCard } from "./ServiceCard";

export const ReparationServices = () => {
  return (
    <div className="mt-5 lg:py-20 bg-reparacion bg-fixed bg-cover bg-no-repeat relative">
      <div>
        <div className="text-center flex flex-col lg:gap-0 gap-3 px-8 py-14 text-white">
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <h2 className="text-4xl text-white font-inter font-semibold pb-10 z-10">
            Reparación y Mantenimiento
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
            disponible todos los dias con seguimiento post-entrega.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-7 py-12 lg:px-20 px-10">
          <ServiceCard
            icon={<StructureIcon size={100} className="text-blue-700 z-10" />}
            title="Reparaciones estructurales especializadas"
            description="Soluciones para problemas de muros y techos. Diagnosticamos y resolvemos fisuras y filtraciones."
          />
          <ServiceCard
            icon={<ElectricIcon size={100} className="text-blue-700 z-10" />}
            title="Reparaciones eléctricas y de plomería"
            description="Intervenciones inmediatas para garantizar la seguridad y el correcto funcionamiento de tus instalaciones."
          />
          <ServiceCard
            icon={<MaintenanceIcon size={100} className="text-blue-700 z-10" />}
            title="Mantenimiento preventivo y correctivo"
            description="Programas a medida para asegurar que tu inmueble esté siempre en óptimas condiciones."
          />
        </div>
      </div>
    </div>
  );
};

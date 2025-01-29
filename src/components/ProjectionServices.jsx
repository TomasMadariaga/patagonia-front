import {
  AnalyticsIcon,
  ArchitectureIcon,
  MoneyCheckIcon,
} from "../icons/Icons";
import { ServiceCard } from "./ServiceCard";

export const ProjectionServices = () => {
  return (
    <div className="lg:py-20 bg-projection bg-fixed bg-cover bg-no-repeat relative">
      <div>
        <div className="flex flex-col lg:gap-0 gap-3 px-8 text-white py-14 text-center">
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <h2 className="text-4xl lg:text-5xl pb-10 font-inter font-semibold z-10">
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
            Con años de experiencia y un equipo certificado, usamos tecnologías
            de última generación.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-7 py-12 lg:px-20 px-10">
          <ServiceCard
            icon={<AnalyticsIcon size={100} className="text-blue-700 z-10" />}
            title="Análisis de viabilidad"
            description="Evaluamos el terreno, el entorno y las normativas locales para asegurarte una planificación precisa."
          />
          <ServiceCard
            icon={
              <ArchitectureIcon size={100} className="text-blue-700 z-10" />
            }
            title="Diseño arquitectónico"
            description="Creamos planos detallados y renders 3D que muestran el futuro de tu proyecto con total claridad."
          />
          <ServiceCard
            icon={<MoneyCheckIcon size={100} className="text-blue-700 z-10" />}
            title="Presupuesto inicial"
            description="Ofrecemos una estimación económica ajustada y transparente para cada fase del proyecto."
          />
        </div>
      </div>
    </div>
  );
};

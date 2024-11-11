import { Card } from "./Card";
import service_01 from "../assets/armar-proyecto2.jpeg";
import service_02 from "../assets/asesoramiento.jpeg";
import service_03 from "../assets/ejecucion-obra.jpeg";

export const Services = () => {
  return (
    <div className="flex lg:flex-row items-baseline flex-col lg:gap-8 gap-12 justify-center lg:py-28 py-12 lg:px-10">
      <Card
        image={service_01}
        title="Armado del proyecto"
        description="Contamos con arquitectos, diseñadores y personal especializado para asesorarte en cada paso del proyecto. Te brindamos un acompañamiento integral, asegurando que tu idea se convierta en una realidad sólida y bien planificada."
      />
      <Card
        image={service_02}
        title="Asesoramiento financiero"
        description="Gracias a nuestras alianzas con proveedores y empresas de servicios, te ayudamos a optimizar los costos del proyecto, obteniendo materiales y servicios de calidad a precios preferenciales."
      />
      <Card
        image={service_03}
        title="Ejecución del proyecto"
        description="La ejecución está garantizada por profesionales certificados que aseguran un trabajo eficiente, cumpliendo con los más altos estándares de calidad y seguridad."
      />
    </div>
  );
};

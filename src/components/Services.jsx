import { Card } from "./Card";
import service_01 from "../assets/service_1.jpg";
import service_02 from "../assets/service_2.jpg";
import service_03 from "../assets/service_3.jpg";

export const Services = () => {
  return (
    <div className="flex gap-8 justify-center items-baseline py-28 px-10">
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

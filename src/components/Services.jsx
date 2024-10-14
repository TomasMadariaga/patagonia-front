import { Card } from "./Card";
import service_01 from "../assets/service_1.jpg";
import service_02 from "../assets/service_2.jpg";
import service_03 from "../assets/service_3.jpg";

export const Services = () => {
  return (
    <div className="flex gap-8 justify-center items-baseline py-28">
      <Card
        image={service_01}
        title="Reutilización de aguas residuales"
        description="La reutilización del agua en la construcción y reparación de inmuebles puede ser una buena forma de reducir el consumo de agua dulce y cuidar nuestro planeta."
      />
      <Card
        image={service_02}
        title="Diseño de espacios habitables"
        description="Construimos y reparamos inmuebles con materiales sostenibles y de alta calidad para minimizar nuestro impacto en el planeta y maximizar nuestro impacto positivo en la comunidad local."
      />
      <Card
        image={service_03}
        title="Diseño de jardines sostenibles"
        description="Aprende a construir y reparar inmuebles con nuestros métodos ecológicos y sostenibles para crear espacios más saludables y amigables con el medio ambiente."
      />
    </div>
  );
};

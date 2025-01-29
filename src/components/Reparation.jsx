import { Carrousel } from "./Carrousel";
import image1 from "../assets/construccion.jpeg";
import image2 from "../assets/interior.jpg";
import image3 from "../assets/leaf.jpg";

const project = {
  images: [image1, image2, image3],
};

export const Reparation = () => {
  return (
    <div className="mt-16 flex flex-col py-10">
      <Carrousel project={project} />
      <div className="place-self-center w-3/4">
        <h2 className="text-center text-4xl pb-4">
          Reparaciones que reviven tus espacios
        </h2>
        <p className="text-center">
          Nos especializamos en devolver la vida a tus espacios con soluciones
          de reparación efectivas y duraderas. Desde detalles estéticos hasta
          mejoras estructurales, nuestro equipo analiza cada caso para ofrecerte
          un servicio a la medida de tus necesidades.
        </p>
      </div>
    </div>
  );
};

import { Carrousel } from "./Carrousel";
import image1 from "../assets/construccion.jpeg";
import image2 from "../assets/interior.jpg";
import image3 from "../assets/leaf.jpg";

const project = {
  images: [image1, image2, image3],
};

export const Construction = () => {
  return (
    <div className="flex flex-col mt-16 py-10">
      <Carrousel project={project} />
      <div className="place-self-center w-3/4">
        <h2 className="text-center text-4xl pb-4">
          Transforma tus ideas en espacios de ensueño
        </h2>
        <p className="text-center">
          Nuestra pasión es transformar ideas en espacios que inspiran. Desde
          viviendas residenciales hasta proyectos comerciales, ofrecemos
          servicios de construcción que combinan diseño, funcionalidad y
          calidad. Con un enfoque centrado en el cliente, trabajamos de la mano
          contigo para crear un espacio que realmente sientas como tuyo.
        </p>
      </div>
    </div>
  );
};

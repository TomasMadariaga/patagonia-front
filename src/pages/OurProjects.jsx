import { Carrousel } from "../components/Carrousel";
import image1 from "../assets/construccion.jpeg";
import image2 from "../assets/interior.jpg";
import image3 from "../assets/leaf.jpg";

export const OurProjects = () => {

  const project = {
    title: 'Titulo',
    images: [image1, image2, image3]
  }

  return (
    <div className="mt-16 flex flex-col gap-10">
      <h1 className="text-5xl text-center font-inter font-semibold text-slate-800 py-8">Nuestros proyectos</h1>
      <Carrousel project={project}/>
      <Carrousel project={project}/>
      <Carrousel project={project}/>
    </div>
  );
};

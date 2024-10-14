import { ConstructionServices } from "../components/ConstructionServices";
import { ProjectionServices } from "../components/ProjectionServices";
import { ReparationServices } from "../components/ReparationServices";

export const Services = () => {
  return (
    <div className="mt-16 bg-light-gray">
      <div className="relative flex w-full bg-interior2 bg-fixed bg-cover bg-no-repeat p-9">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <h1 className="text-5xl text-white z-10 font-inter pl-10">Servicios</h1>
      </div>
      <ProjectionServices />
      <ConstructionServices />
      <ReparationServices />
    </div>
  );
};

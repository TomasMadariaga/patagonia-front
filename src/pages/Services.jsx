import { ConstructionServices } from "../components/ConstructionServices";
import { ProjectionServices } from "../components/ProjectionServices";
import { ReparationServices } from "../components/ReparationServices";

export const Services = () => {
  return (
    <div className="mt-16 bg-light-gray">
      <ProjectionServices />
      <ConstructionServices />
      <ReparationServices />
    </div>
  );
};

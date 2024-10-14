import { AboutHome } from "../components/AboutHome";
import { AboutServices } from "../components/AboutServices";
import { OurMission } from "../components/OurMission";
import { SectionHome } from "../components/SectionHome";

export const AboutUs = () => {
  return (
    <div className="mt-16">
      <div className="relative flex w-full bg-interior2 bg-fixed bg-cover bg-no-repeat p-9">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <h1 className="text-5xl text-white z-10 font-inter pl-10">
          Sobre nosotros
        </h1>
      </div>
      <AboutHome />
      <AboutServices />
      <SectionHome />
      <OurMission />
    </div>
  );
};

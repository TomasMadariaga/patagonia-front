import { AboutHome } from "../components/AboutHome";
import { AboutServices } from "../components/AboutServices";
import { OurMission } from "../components/OurMission";
import { SectionHome } from "../components/SectionHome";

export const AboutUs = () => {
  return (
    <div className="mt-16 bg-gray-100">
      <AboutHome />
      <AboutServices />
      <SectionHome />
      <OurMission />
    </div>
  );
};

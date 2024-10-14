import { AboutHome } from "../components/AboutHome";
import { ContactHome } from "../components/ContactHome";
import { SectionHome } from "../components/SectionHome";
import { Services } from "../components/services";

export const Home = () => {
  return (
    <div>
      <ContactHome />
      <AboutHome />
      <SectionHome />
      <Services />
    </div>
  );
};

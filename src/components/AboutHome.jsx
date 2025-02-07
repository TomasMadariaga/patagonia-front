import PHOTO from "../assets/couch2.jpeg";

export const AboutHome = () => {
  return (
    <div className="w-full flex justify-evenly items-center pt-28 pb-20">
      <div className="flex flex-col lg:px-5 px-10 lg:w-2/5 items-start gap-5">
        <p className="font-roboto text-sm font-thin lg:block hidden">
          SOBRE NOSOTROS
        </p>
        <h3 className="text-4xl tracking-wide lg:text-left text-center font-inter">
          Espacios únicos, diseñados a tu medida
        </h3>
        <p className="font-nunito text-lg lg:text-left text-center">
          En Cruz Patagonia, somos expertos en diseño, reparación y remodelación
          de inmuebles, transforando espacios con estilo y funcionalidad. Nos
          dedicamos a crear soluciones personalizadas, adaptadas a las
          necesidades y sueños de cada cliente, garantizando calidad y
          satisfacción en cada proyecto. 
        </p>
        {/* <Link
          to="/our-projects"
          className="py-2 mt-6 px-4 text-white lg:self-auto self-center bg-black/85 rounded-full transition-all duration-200 hover:bg-black/95"
        >
          Descubre nuestros proyectos
        </Link> */}
      </div>
      <div>
        <img
          style={{ borderRadius: "88% 12% 82% 18% / 68% 66% 34% 32%" }}
          src={PHOTO}
          className="h-72 w-80 object-cover lg:block hidden border border-slate-700"
        />
      </div>
    </div>
  );
};

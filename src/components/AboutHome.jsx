import PHOTO from "../assets/ladybugs.jpg";

export const AboutHome = () => {
  return (
    <div className="w-full flex justify-evenly items-center bg-white py-28">
      <div className="flex flex-col px-5 w-2/5 items-start gap-5">
          <p className="font-roboto text-sm font-thin">SOBRE NOSOTROS</p>
          <h3 className="text-4xl tracking-wide text-black/85 font-inter">Construimos el futuro de tu hogar</h3>
          <p className="font-nunito text-lg">
            Con todos los problemas en el mundo a los que se enfrenta nuestro
            planeta hoy en día, es importante construir y reparar inmuebles de
            manera sostenible para minimizar nuestro impacto negativo en el
            medio ambiente y maximizar nuestro impacto positivo en la comunidad
            local.
          </p>
        <button className="py-2 mt-6 px-4 text-white bg-black/85 rounded-full transition-all duration-200 hover:bg-black/95">
          Descubre nuestros proyectos
        </button>
      </div>
      <div>
        <img
          style={{ borderRadius: "88% 12% 82% 18% / 68% 66% 34% 32%" }}
          src={PHOTO}
          className="object-cover h-72"
        />
      </div>
    </div>
  );
};

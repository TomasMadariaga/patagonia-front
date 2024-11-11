import '../index.css'

export const SectionHome = () => {
  return (
    <section className="flex justify-center items-center bg-interior relative bg-no-repeat bg-fixed bg-cover py-36">
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none z-0"></div>
      <h2 className="lg:text-7xl text-3xl lg:px-0 text-center text-white z-10 font-inter">
        Transformamos espacios para mejorar tu calidad de vida.
      </h2>
    </section>
  );
};

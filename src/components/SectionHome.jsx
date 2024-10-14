import '../index.css'

export const SectionHome = () => {
  return (
    <section className="flex justify-center items-center bg-interior relative bg-no-repeat bg-fixed bg-cover py-36 px-32">
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none z-0"></div>
      <h2 className="text-7xl text-center text-white z-10 font-inter">
        Transformamos espacios para mejorar tu calidad de vida.
      </h2>
    </section>
  );
};

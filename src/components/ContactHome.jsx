import { HomeIcon } from "../icons/Icons";

export const ContactHome = () => {
  return (
    <div className="relative flex h-screen bg-patagonia bg-fixed bg-no-repeat bg-cover justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none z-0"></div>
      <div className="flex flex-col items-center z-10 w-3/4 gap-12">
        <div className="p-6 bg-white rounded-full">
          <HomeIcon className="text-red-500" size={25}/>
        </div>
        <div>
          <h2 className="relative text-white font-bold text-center text-7xl z-10 py-4">
            Construcción y Reparación de Inmuebles
          </h2>
          <p className="text-center text-lg text-white font-mono">
            Nuestra misión es construir y reparar inmuebles de manera sostenible
            para proteger y conservar los lugares silvestres más extraordinarios
            del planeta.
          </p>
        </div>
        <button className="bg-red-500 py-2 px-4 rounded-full text-white transition-all duration-300 hover:bg-red-600">
          Únete al cambio hacia una construcción más sostenible
        </button>
      </div>
    </div>
  );
};

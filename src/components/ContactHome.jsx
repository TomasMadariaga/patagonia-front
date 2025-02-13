export const ContactHome = () => {
  return (
    <div className="relative flex h-fit pb-20 py-5 bg-patagonia bg-fixed bg-no-repeat bg-cover justify-center">
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none z-0"></div>
      <div className="flex flex-col items-center z-10 w-3/4 gap-12 select-none">
        <div>
          <div className="flex flex-col items-center">
            <img
              className="w-1/4 rounded-full bg-cover"
              src="/logo.png"
              alt="LOGO"
            />
            <h2
              style={{ "textShadow": "1px 1px 0px white" }}
              className="text-red-600 font-bold text-center text-7xl z-10"
            >
              Cruz Patagonia
            </h2>
          </div>
        </div>
        <div>
          <h2 className="relative text-white font-bold text-center text-5xl z-10 pb-4">
            Diseño, construcción y reparación
          </h2>
          <p className="text-center text-lg text-white font-mono">
            Nuestra misión es diseñar, construir y reparar inmuebles, enfocándonos en
            brindar soluciones de calidad para nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  );
};

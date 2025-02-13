import evaluation1 from "../assets/evaluation1.jpg"
import evaluation2 from "../assets/evaluation2.jpg"
import evaluation3 from "../assets/evaluation3.jpg"
import reparation1 from "../assets/reparation1.jpg"
import reparation2 from "../assets/reparation2.jpg"
import reparation3 from "../assets/reparation3.jpg"
import mantenimiento1 from "../assets/mantenimiento1.jpg";
import mantenimiento2 from "../assets/mantenimiento2.jpg"
import mantenimiento3 from "../assets/mantenimiento3.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  {
    title: "Diagnóstico y Evaluación",
    description:
      "Realizamos un diagnóstico detallado de la estructura para identificar daños, filtraciones, grietas y otros problemas. Nuestros expertos en inspección estructural te brindan un informe técnico con las mejores soluciones para restaurar tu propiedad con calidad y seguridad.",
    images: [evaluation1, evaluation2, evaluation3],
  },
  {
    title: "Reparación y Restauración",
    description:
      "Ejecutamos reparaciones de albañilería, plomería, electricidad y acabados, utilizando materiales de alta calidad y tecnología avanzada. Garantizamos trabajos duraderos y eficientes, minimizando molestias para los ocupantes y optimizando costos.",
    images: [reparation1, reparation2, reparation3],
  },
  {
    title: "Mantenimiento Preventivo",
    description:
      "Evita costosas reparaciones futuras con nuestro servicio de mantenimiento preventivo. Detectamos y solucionamos problemas antes de que se conviertan en emergencias, asegurando la durabilidad de tu inmueble con revisiones periódicas y soluciones efectivas.",
    images: [mantenimiento1, mantenimiento2, mantenimiento3],
  },
];

export const Reparation = () => {
  return (
    <div className="flex flex-col xl:items-center mt-16 py-10 bg-gray-100">
      <div className="bg-white shadow xl:w-3/4 p-10">
        <div className="place-self-center w-3/4 text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 pb-4">
            Reparaciones que reviven tus espacios
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nos especializamos en devolver la vida a tus espacios con soluciones
            de reparación efectivas y duraderas. Desde detalles estéticos hasta
            mejoras estructurales, nuestro equipo analiza cada caso para
            ofrecerte un servicio a la medida de tus necesidades.
          </p>
        </div>
        <div className="w-full max-w-6xl mx-auto px-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center mb-16 select-none">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <div className="relative w-full max-w-2xl rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  className="rounded-lg"
                >
                  {service.images.map((photo, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={photo}
                        className="w-full h-96 object-cover rounded-lg select-none"
                        alt={`Slide ${i + 1}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute z-10 inset-0 flex justify-center items-center text-center bg-black bg-opacity-50 p-6 rounded-lg">
                  <p className="text-white text-lg max-w-md">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




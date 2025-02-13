import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import design1 from "../assets/design1.jpg"
import design2 from "../assets/design2.jpg"
import design3 from "../assets/design3.jpg"
import obra1 from "../assets/obra1.jpg"
import obra2 from "../assets/obra2.jpg"
import obra3 from "../assets/obra3.jpg"
import final1 from "../assets/final1.jpg"
import final2 from "../assets/final2.jpg"
import final3 from "../assets/final3.jpg"

const services = [
  {
    title: "Diseño y Planificación",
    description:
      "Transformamos ideas en proyectos concretos con un diseño arquitectónico innovador y planificación estratégica. Nuestro equipo de expertos se encarga de cada detalle, optimizando costos y asegurando que la construcción cumpla con los más altos estándares de calidad y normativas vigentes.",
    images: [design1, design2, design3],
  },
  {
    title: "Ejecución de Obra",
    description: "Llevamos tu proyecto a la realidad con una construcción sólida y eficiente. Contamos con un equipo de albañiles, ingenieros y técnicos especializados en estructuras de hormigón, albañilería y acabados, garantizando tiempos de entrega óptimos y calidad en cada detalle.",
    images: [obra1, obra2, obra3],
  },
  {
    title: "Entrega y Acabados",
    description:
      "Finalizamos tu construcción con acabados de alta calidad que marcan la diferencia. Desde pintura y revestimientos hasta instalaciones eléctricas y sanitarias, nos aseguramos de que cada detalle refleje perfección, funcionalidad y durabilidad.",
    images: [final1, final2, final3],
  },
];

export const Construction = () => {
  return (
    <div className="flex flex-col xl:items-center mt-16 py-10 bg-gray-100">
      <div className="bg-white shadow xl:w-3/4 p-10">
        <div className="place-self-center w-3/4 text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 pb-4">
            Transforma tus ideas en espacios de ensueño
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nuestra pasión es transformar ideas en espacios que inspiran. Desde
            viviendas residenciales hasta proyectos comerciales, ofrecemos
            servicios de construcción que combinan diseño, funcionalidad y
            calidad. Con un enfoque centrado en el cliente, trabajamos de la
            mano contigo para crear un espacio que realmente sientas como tuyo.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-16 select-none"
            >
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

                {/* Texto sobre la imagen */}
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

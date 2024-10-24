import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/carrousel.css'

export const Carrousel = ({ project }) => {
  return (
    <div className="px-5 pb-5">
      <div className="overflow-x-hidden border p-5 rounded-xl border-slate-300">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          loop={true}
          pagination={{ type: "bullets" }}
          autoplay={{ delay: 3000 }}
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index} className="h-5/6">
              <img
                className="w-full h-96 object-cover rounded-md"
                src={image}
                alt={`Image ${index}`}
              />
              <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
                {project.title}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

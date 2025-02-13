import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useWork } from "../context/WorkContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const PublicProfile = () => {
  const { findAUser } = useUser();
  const { getWorkPhotos } = useWork();
  const { id } = useParams();

  const [professional, setProfessional] = useState(null);
  const [rating, setRating] = useState(null);
  const [totalVotes, setTotalVotes] = useState(null);
  const [workPhotos, setWorkPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const MAX_STARS = 5;

  const renderStars = () => {
    const stars = [];
    let remainingRating = rating;

    for (let i = 1; i <= MAX_STARS; i++) {
      if (remainingRating >= 1) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
        remainingRating -= 1;
      } else if (remainingRating >= 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
        remainingRating = 0;
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  useEffect(() => {
    const getProfessionalData = async () => {
      const data = await findAUser(id);
      const photos = await getWorkPhotos(id);
      setWorkPhotos(photos);
      setProfessional({
        id: data.id,
        name: data.name,
        description: data.description,
        role: data.role,
        totalVotes: data.totalVotes,
        profilePicture: data.profilePicture,
      });
      setRating(data.rating);
      setTotalVotes(data.totalVotes);
    };

    getProfessionalData();
  }, [id, findAUser, getWorkPhotos]);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-700 to-marine-blue p-6 text-white">
          <div className="flex items-center space-x-6">
            <img
              src={`http://localhost:3000/uploads/pfp/${professional?.profilePicture}`}
              alt={professional?.name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold">
                <span className="text-lg p-1 rounded-xl bg-slate-100 text-blue-700">{professional?.id}</span> {professional?.name}
              </h2>
              <p className="text-lg text-blue-100">{professional?.role}</p>
              <p className="text-blue-100">{professional?.description}</p>
            </div>
          </div>
        </div>

        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="flex">{renderStars()}</div>
            <span className="text-gray-600">
              {rating?.toFixed(1)} ({totalVotes} votos)
            </span>
          </div>
        </div>

        {workPhotos.length > 0 && (
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Fotos de su trabajo
            </h3>
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              modules={[Autoplay]}
              className="w-full"
            >
              {workPhotos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => openModal(photo)}
                  >
                    <img
                      src={photo.url}
                      alt={`Trabajo ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-md bg-opacity-0 group-hover:bg-opacity-30 transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-opacity rounded-lg"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedPhoto.url}
                alt="Foto de trabajo"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const ProfessionalCard = ({
  id,
  name,
  role,
  photo,
  rating,
  totalVotes,
  onRate,
  find
}) => {
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

  const handleRate = async (value) => {
    if (onRate) await onRate({ id: id, rating: value });
    find();
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-72">
      <img
        className="w-full h-48 object-cover"
        src={`http://localhost:3000/uploads/${photo}`}
        alt={`${name}'s photo`}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-500">{role}</p>
        <div className="flex items-center mt-2">
          {renderStars()}
          <span className="text-sm text-gray-500 ml-2">
            ({rating.toFixed(1)} de {totalVotes} votos)
          </span>
        </div>
        <div className="flex gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => handleRate(value)}
              className="text-gray-400 hover:text-yellow-500"
            >
              <FaStar />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

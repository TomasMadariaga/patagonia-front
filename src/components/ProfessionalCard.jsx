import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

export const ProfessionalCard = ({
  id,
  name,
  role,
  photo,
  rating: initialRating,
  totalVotes: initialTotalVotes,
  onRate,
  find,
}) => {
  const { user } = useAuth();
  const [rating, setRating] = useState(initialRating);
  const [totalVotes, setTotalVotes] = useState(initialTotalVotes);

  useEffect(() => {
    setRating(initialRating);
    setTotalVotes(initialTotalVotes);
  }, [initialRating, initialTotalVotes]);

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
    try {
      if (onRate) {
        await onRate({ id: id, rating: value });
      }
      if (find) {
        find();
      }
      setRating(value);
      setTotalVotes(totalVotes + 1);
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: "top-center",
        pauseOnHover: false,
        autoClose: 2000,
        closeButton: false,
        toastId: 1,
      });
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-48 hover:shadow-lg transition-shadow">
      <img
        className="w-full h-28 object-cover"
        src={`http://localhost:3000/uploads/pfp/${photo}`}
        alt={`${name}'s photo`}
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
        <p className="text-xs text-gray-500">{role}</p>
        <div className="flex items-center mt-1">
          {renderStars()}
          <span className="text-xs text-gray-500 ml-1">
            ({rating.toFixed(1)} de {totalVotes} votos)
          </span>
        </div>
        {onRate && user.role === "Cliente" ? (
          <div className="tomas flex gap-1 mt-1">
            {[1, 2, 3, 4, 5].map((v) => (
              <button
                key={v}
                onClick={() => handleRate(v)}
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <FaStar className="w-3 h-3" />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

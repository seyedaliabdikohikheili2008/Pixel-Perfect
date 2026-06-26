import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, onRate, interactive = false }) => {
  const [hoverRating, setHoverRating] = useState(0);

  if (interactive) {
    return (
      <div className="flex items-center flex-row-reverse gap-1">
        {[1, 2, 3, 4, 5].map((starIndex) => {
          const active = starIndex <= (hoverRating || rating);
          return (
            <button
              key={starIndex}
              className="cursor-pointer transition-colors"
              onMouseEnter={() => setHoverRating(starIndex)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => onRate?.(starIndex)}
            >
              {active ? (
                <FaStar className="text-yellow-400 text-xl" />
              ) : (
                <FaRegStar className="text-gray-300 text-xl" />
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex items-center flex-row-reverse gap-1">
      {[1, 2, 3, 4, 5].map((starIndex) => {
        if (rating >= starIndex) {
          return <FaStar key={starIndex} className="text-yellow-400 text-xl" />;
        } else if (rating >= starIndex - 0.5 && rating < starIndex) {
          return <FaStarHalfAlt key={starIndex} className="text-yellow-400 text-xl" />;
        } else {
          return <FaRegStar key={starIndex} className="text-gray-300 text-xl" />;
        }
      })}
      <span className="mr-2 text-sm text-neutral-400">({rating})</span>
    </div>
  );
};

export default StarRating;

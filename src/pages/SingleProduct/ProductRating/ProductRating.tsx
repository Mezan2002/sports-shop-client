import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

interface ProductRatingProps {
  rating: number;
  onChange: (newRating: number) => void;
}

const ProductRating: React.FC<ProductRatingProps> = ({ rating, onChange }) => {
  return (
    <div className="flex items-center">
      <Rating
        initialRating={rating}
        onChange={onChange}
        emptySymbol={
          <FaRegStar style={{ fontSize: "1.5rem" }} className="text-gray-400" />
        }
        fullSymbol={
          <FaStar style={{ fontSize: "1.5rem" }} className="text-indigo-500" />
        }
        fractions={2}
      />
      <span className="ml-2 text-gray">{rating.toFixed(1)}</span>{" "}
      {/* Display rating with one decimal */}
    </div>
  );
};

export default ProductRating;

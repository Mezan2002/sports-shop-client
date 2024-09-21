import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

interface ProductRatingProps {
  rating: number;
  starSize?: string | number | undefined;
  starColor?: string;
  starOnly?: boolean;
  isChangeAble?: boolean;
  onChange?: (newRating: number) => void;
}

const ProductRating: React.FC<ProductRatingProps> = ({
  rating,
  starSize = 1.5,
  starColor = "text-indigo-500",
  starOnly = false,
  isChangeAble = false,
  onChange = () => {},
}) => {
  return (
    <div className="flex items-center">
      <Rating
        initialRating={rating}
        onChange={onChange}
        emptySymbol={
          <FaRegStar
            style={{ fontSize: `${starSize}rem` }}
            className="text-gray-400"
          />
        }
        fullSymbol={
          <FaStar
            style={{ fontSize: `${starSize}rem` }}
            className={starColor}
          />
        }
        readonly={!isChangeAble}
        fractions={2}
      />
      {starOnly && <span className="ml-2 text-gray">{rating?.toFixed(1)}</span>}
    </div>
  );
};

export default ProductRating;

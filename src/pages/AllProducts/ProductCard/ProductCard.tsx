import { Card, CardBody, Chip, Tooltip } from "@nextui-org/react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TProductCardProps } from "../../../types/types";
import ProductRating from "../../SingleProduct/ProductRating/ProductRating";

const ProductCard: React.FC<TProductCardProps> = ({
  isTopSell,
  isOffSell,
  isNewArrival,
  isGridCard,
  product,
}) => {
  const miniIconsData = [
    {
      icon: <AiOutlineHeart className="h-4 w-4" />,
      tooltipContent: "ADD TO WISHLIST",
    },
    {
      icon: <AiOutlineShoppingCart className="h-4 w-4" />,
      tooltipContent: "ADD TO CART",
    },
  ];
  return (
    <Card
      className={`shadow-none group relative ${
        isGridCard
          ? "rounded-none border-1 hover:z-40 hover:shadow-2xl"
          : "rounded-3xl"
      }`}
    >
      <Link to={`/product/${product._id}`}>
        <CardBody className="overflow-x-hidden cursor-pointer">
          {/* chip start */}
          {isTopSell && (
            <Chip className="text-white bg-indigo-500 uppercase">
              Best Selling
            </Chip>
          )}
          {isOffSell && (
            <Chip className="text-white bg-indigo-500 uppercase">-20%</Chip>
          )}
          {isNewArrival && (
            <Chip className="text-white bg-indigo-500 uppercase">
              New Arrival
            </Chip>
          )}

          {/* chip amount end */}

          {/* card top container start */}
          <div>
            {/* card top image container start */}
            <div className="mb-2">
              <img
                draggable
                src={product.images[0]}
                alt="Image"
                className="block group-hover:hidden transition-all duration-1000 h-80 object-cover"
              />
              <img
                draggable
                src={product.images[1]}
                alt="Image"
                className="transition-all duration-1000 hidden group-hover:block h-80 object-cover"
              />
            </div>
            {/* card top image container end */}
            {/* buttons container start */}
            <div className="absolute top-6 -right-5 group-hover:right-5 opacity-0  duration-500 group-hover:opacity-100 flex flex-col items-center gap-3">
              {miniIconsData.map((icon, index) => (
                <div key={index}>
                  <Tooltip
                    delay={400}
                    showArrow
                    placement="left"
                    content={icon.tooltipContent}
                  >
                    <button className="duration-500 bg-gray-100 hover:bg-black hover:text-white p-2 rounded-full">
                      {icon.icon}
                    </button>
                  </Tooltip>
                </div>
              ))}
            </div>
            {/* buttons container end */}
          </div>
          {/* card top container end */}
          {/* card content container start */}
          <div>
            <div className="flex items-center justify-between mt-2 mb-4">
              <p className="uppercase cursor-pointer">{product.brand}</p>
              <Chip size="sm" className="bg-indigo-500 text-white">
                In Stock
              </Chip>
            </div>
            <p className="text-lg font-medium cursor-pointer hover:text-indigo-500 duration-500 line-clamp-2 truncate">
              {product.name}
            </p>
            <div className="flex items-center justify-between mt-3">
              <h2 className="font-bold text-lg text-indigo-500">
                {product.price.currency === "USD" && "$"}
                {product.price.discounted_price
                  ? product.price.discounted_price
                  : product.price.regular_price}
                {product.price.discounted_price && (
                  <sup className="text-gray-400">
                    <del>
                      {product.price.discounted_price &&
                        product.price.regular_price}
                    </del>
                  </sup>
                )}
              </h2>

              <div className="flex items-center">
                <ProductRating
                  starColor="text-yellow-500"
                  starSize={1.2}
                  onChange={() => {}}
                  rating={product.rating}
                />
              </div>
            </div>
          </div>
          {/* card content container end */}
        </CardBody>
      </Link>
    </Card>
  );
};

export default ProductCard;

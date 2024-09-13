import { Card, CardBody, Chip, Tooltip } from "@nextui-org/react";
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { PiArrowsClockwiseBold } from "react-icons/pi";

const ProductCard = ({ isTopSell, isOffSell, isNewArrival, isGridCard }) => {
  const miniIconsData = [
    {
      icon: <AiOutlineHeart className="h-4 w-4" />,
      tooltipContent: "ADD TO WISHLIST",
    },
    {
      icon: <PiArrowsClockwiseBold className="h-4 w-4" />,
      tooltipContent: "COMPARE",
    },
    {
      icon: <AiOutlineEye className="h-4 w-4" />,
      tooltipContent: "QUICK VIEW",
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
          ? "rounded-none border-1 hover:z-40  hover:shadow-2xl"
          : "rounded-3xl"
      }`}
    >
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
          <div className="w-[250px] mx-auto">
            <img
              draggable
              src="/images/samsung-phone.jpg"
              alt="Image"
              className="block group-hover:hidden transition-all duration-1000 max-h-80"
            />
            <img
              draggable
              src="/images/samsung-phone-white.jpg"
              alt="Image"
              className="transition-all duration-1000 hidden group-hover:block max-h-80"
            />
          </div>
          {/* card top image container end */}
          {/* buttons container start */}
          <div className="absolute top-6 -right-5 group-hover:right-5 opacity-0  duration-500 group-hover:opacity-100 flex flex-col items-center gap-3">
            {miniIconsData.map((icon) => (
              <div key={icon.icon}>
                <Tooltip
                  delay={400}
                  showArrow
                  placement="left"
                  content={icon.tooltipContent}
                  classNames={{
                    base: "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-neutral-300",
                    arrow:
                      "bg-gradient-to-br from-white to-neutral-300 dark:bg-white",
                  }}
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
            <p className="uppercase cursor-pointer">Umino</p>
            <Chip size="sm" className="bg-indigo-500 text-white">
              In Stock
            </Chip>
          </div>
          <p className="text-lg font-medium cursor-pointer hover:text-indigo-500 duration-500">
            {"Samsung Galaxy S21 FE 8GB/128GB - White".length > 42
              ? "Samsung Galaxy S21 FE 8GB/128GB - White".slice(0, 42) + "..."
              : "Samsung Galaxy S21 FE 8GB/128GB - White"}
          </p>
          <div className="flex items-center justify-between mt-3">
            {isOffSell ? (
              <h2 className="font-bold text-lg text-indigo-500">
                $110.00
                <sup className="text-gray-400">
                  <del>$150.00</del>
                </sup>
              </h2>
            ) : (
              <h2 className="font-bold text-lg text-indigo-500">$110.00</h2>
            )}

            <div className="flex items-center">
              <AiFillStar className="text-yellow-400" />
              <AiFillStar className="text-yellow-400" />
              <AiFillStar className="text-yellow-400" />
              <AiFillStar className="text-yellow-400" />
              <AiFillStar className="text-yellow-400" />
            </div>
          </div>
        </div>
        {/* card content container end */}
      </CardBody>
    </Card>
  );
};

export default ProductCard;

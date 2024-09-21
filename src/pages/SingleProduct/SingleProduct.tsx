// Import Swiper React components
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import required Swiper styles
import { Button, Chip, Spinner, Tab, Tabs } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useGetSingleProductByIdQuery } from "../../redux/features/product/productsApi";
import { TProduct } from "../../types/types";
import ProductRating from "./ProductRating/ProductRating";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetSingleProductByIdQuery(id);

  // Error Handling
  useEffect(() => {
    if (isError) console.error(error);
  }, [isError, error]);

  const productData: TProduct = data?.data;
  const [productQuantity, setProductQuantity] = useState(1);

  if (isLoading) {
    return (
      <div className="h-40 flex items-center justify-center">
        <Spinner label="Loading..." color="warning" />
      </div>
    );
  }
  return (
    <section className="flex flex-col items-center justify-center mb-10">
      {/* Container for product layout */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: Image Slider */}
        <div className="relative w-full h-full">
          <Swiper
            key={productData?.images?.length}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            modules={[Pagination, Navigation]}
            className="h-full bg-gradient-to-b from-white to-gray-light"
          >
            {/* Add Swiper Slides */}
            {productData?.images?.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${productData.name}'s image`}
                  className="w-full h-[52.5rem] overflow-hidden object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Swiper Arrows */}
          <div className="swiper-button-prev-custom absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/35 border border-gray-500 p-2 rounded-full shadow-lg cursor-pointer">
            <FaAngleLeft />
          </div>

          <div className="swiper-button-next-custom absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/35 border border-gray-500 p-2 rounded-full shadow-lg cursor-pointer">
            <FaAngleRight />
          </div>

          {/* Pagination bullets */}
          <div className="space-x-6 swiper-pagination-custom absolute bottom-4 left-0 right-0 flex justify-center z-10" />
        </div>

        {/* Right side: Product Info */}
        <div className="flex flex-col justify-center">
          <Chip className="uppercase text-sm bg-indigo-500 font-medium text-white mb-10">
            New Collection
          </Chip>
          <h1 className="text-6xl text-dark mb-3 line-clamp-2 text-ellipsis">
            {productData?.name}
          </h1>
          <p className="text-5xl text-gray mb-8 font-extralight">
            {productData.productAttributes.color.color_name}
          </p>
          <div className="mb-5">
            {productData.productAttributes.size!.length > 0 && (
              <div className="mb-2 flex items-center gap-5">
                <p className="text-lg font-semibold text-gray">Sizes:</p>
                <div className="flex items-center gap-2">
                  {productData.productAttributes.size!.map((sz) => (
                    <p className="border rounded-lg px-4 py-1 cursor-pointer">
                      {sz}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {productData.productAttributes.color.color_code.length > 0 && (
              <div className="mb-2 flex items-center gap-5">
                <p className="text-lg font-semibold text-gray">Colors:</p>
                {productData.productAttributes.color.color_code.map((code) => (
                  <div
                    style={{ backgroundColor: code }}
                    className="h-6 w-6 rounded-full border border-gray-600 cursor-pointer"
                  />
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2">
            <div>
              <p className="text-sm mb-2 text-disabledText uppercase">Price</p>
              <h2 className="font-bold text-2xl text-indigo-500">
                {productData.price.currency === "USD" && "$"}
                {productData.price.discounted_price
                  ? productData.price.discounted_price
                  : productData.price.regular_price}
                {productData.price.discounted_price && (
                  <sup className="text-gray-400">
                    <del>{productData.price.regular_price}</del>
                  </sup>
                )}
              </h2>
            </div>
            <div>
              <p className="text-sm mb-2 text-disabledText uppercase">
                Quantity
              </p>
              <div className="w-8/12 h-12 flex justify-between items-center p-2 rounded-full bg-gray-light border">
                <button
                  onClick={() =>
                    productQuantity > 0 &&
                    setProductQuantity(productQuantity - 1)
                  }
                  className="bg-indigo-500 text-white rounded-full p-2"
                >
                  <BiMinus />
                </button>
                <p>{productQuantity}</p>
                <button
                  onClick={() => setProductQuantity(productQuantity + 1)}
                  className="bg-indigo-500 text-white rounded-full p-2"
                >
                  <BiPlus />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Tabs
              variant="underlined"
              aria-label="Tabs variants"
              classNames={{
                tabList: "gap-1 flex-1",
                cursor: "w-full bg-indigo-500",
                tab: "h-10 grid grid-cols-3 text-left px-0 uppercase",
              }}
            >
              <Tab key="details" title="Details">
                <div className="h-56 overflow-y-auto no-scrollbar flex flex-col gap-2">
                  <p className="text-sm font-medium text-gray-700 capitalize">
                    Name:{" "}
                    <span className="text-gray-500">{productData.name}</span>
                  </p>
                  <p className="text-sm font-medium text-gray-700 capitalize">
                    Product code:{" "}
                    <span className="text-gray-500">{productData.id}</span>
                  </p>
                  <p className="text-sm font-medium text-gray-700 capitalize">
                    Brand name:{" "}
                    <span className="text-gray-500">{productData.brand}</span>
                  </p>
                  <p className="text-sm font-medium text-gray-700 capitalize">
                    Category:{" "}
                    <span className="text-gray-500">
                      {productData.category.category_name}
                    </span>
                  </p>
                  <p className="text-sm font-medium text-gray-700 capitalize">
                    Color:{" "}
                    <span className="text-gray-500">
                      {productData.productAttributes.color.color_name}
                    </span>
                  </p>
                  <p className="text-sm font-medium text-gray-700 capitalize">
                    Price:{" "}
                    <span className="text-gray-500">
                      ${productData.price.regular_price}
                    </span>
                  </p>
                  <div className="text-sm font-medium text-gray-700 capitalize flex items-center gap-1">
                    Rating:{" "}
                    <div className="mt-1">
                      <ProductRating
                        starSize={0.8}
                        starColor="text-yellow-500"
                        rating={productData.rating}
                      />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700 capitalize">
                    Availability:{" "}
                    <span className="text-gray-500">
                      {productData.stock.current_stock_amount > 0
                        ? "In stock"
                        : "Out of stock"}
                    </span>
                  </p>
                  <p className="text-sm font-medium text-gray-700 capitalize">
                    Stock available:{" "}
                    <span className="text-gray-500">
                      {productData.stock.current_stock_amount}
                    </span>
                  </p>
                </div>
              </Tab>
              <Tab key="descriptions" title="Descriptions">
                <div className="h-56 overflow-y-auto no-scrollbar">
                  {productData?.description}
                </div>
              </Tab>

              <Tab key="reviews" title="Reviews">
                <div className="h-56 flex items-center justify-center overflow-y-auto no-scrollbar">
                  <p className="text-xl font-semibold text-gray-800">
                    Coming Soon!
                  </p>
                </div>
              </Tab>
            </Tabs>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              size="lg"
              radius="full"
              className="bg-transparent border text-lg text-gray uppercase"
            >
              Add to wishlist <CiHeart size={26} className="text-gray" />
            </Button>
            <Link to="/cart">
              <Button
                size="lg"
                radius="full"
                className="bg-indigo-500 text-white text-lg uppercase"
              >
                Add to Cart <CiShoppingCart size={26} className="text-white" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;

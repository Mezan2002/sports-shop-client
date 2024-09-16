// Import Swiper React components
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import required Swiper styles
import { Button, Chip, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductRating from "./ProductRating/ProductRating";

const SingleProduct = () => {
  // const { id } = useParams();
  const [productQuantity, setProductQuantity] = useState(1);
  const [rating, setRating] = useState(4.5);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };
  return (
    <section className="flex flex-col items-center justify-center mb-10">
      {/* Container for product layout */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: Image Slider */}
        <div className="relative w-full h-full">
          <Swiper
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
            <SwiperSlide>
              <img
                src="https://th.bing.com/th/id/R.0288f2ee5dc6cbb800fc5fa3bc05a0b6?rik=jz2i2w1l3JXGIg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fCricket-Bat-PNG-Pic.png&ehk=WIGN7NaX376jzPl%2fo1QdaVy2Zk9K%2bfvdem2KnONl6Iw%3d&risl=1&pid=ImgRaw&r=0"
                alt="Product Image 1"
                className="w-full h-[52.5rem] overflow-hidden object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://th.bing.com/th/id/OIP.DfyFb4_yaXzrr2cuP5MJrgHaHa?w=1346&h=1346&rs=1&pid=ImgDetMain"
                alt="Product Image 2"
                className="w-full h-[52.5rem] overflow-hidden object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.prodirectsport.com/productimages/Main/193902_Main_Thumb_0383503.jpg"
                alt="Product Image 3"
                className="w-full h-[52.5rem] overflow-hidden object-cover"
              />
            </SwiperSlide>
          </Swiper>

          {/* Custom Swiper Arrows */}
          <div className="swiper-button-prev-custom absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>

          <div className="swiper-button-next-custom absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          {/* Pagination bullets */}
          <div className="space-x-6 swiper-pagination-custom absolute bottom-4 left-0 right-0 flex justify-center z-10" />
        </div>

        {/* Right side: Product Info */}
        <div className="flex flex-col justify-center">
          <Chip className="uppercase text-sm bg-indigo-500 font-medium text-white mb-10">
            New Collection
          </Chip>
          <h1 className="text-6xl text-dark mb-3">Cricket Bat Champso</h1>
          <p className="text-5xl text-gray mb-10 font-extralight">White</p>
          <div className="mb-10">
            <ProductRating rating={rating} onChange={handleRatingChange} />
          </div>
          <div className="grid grid-cols-2">
            <div>
              <p className="text-sm mb-2 text-disabledText uppercase">Price</p>
              <h4 className="text-4xl font-medium text-indigo-500">$59.00</h4>
            </div>
            <div>
              <p className="text-sm mb-2 text-disabledText uppercase">
                Quantity
              </p>
              <div className="w-8/12 h-12 flex justify-between items-center p-2 rounded-full bg-gray-light border">
                <button
                  onClick={() => setProductQuantity(productQuantity - 1)}
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
          <div className="-mx-2.5 mt-5">
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
                <div className="h-60 overflow-y-auto no-scrollbar">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  in quibusdam molestias reiciendis aut commodi possimus soluta
                  aperiam similique cupiditate.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nisi alias id, numquam tenetur
                  corporis animi aliquam aliquid similique? Iure, optio!
                </div>
              </Tab>
              <Tab key="descriptions" title="Descriptions">
                <div className="h-60 overflow-y-auto no-scrollbar">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore quos suscipit totam pariatur sit. Alias voluptatum
                  molestias asperiores mollitia ex!Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nisi alias id, numquam tenetur
                  corporis animi aliquam aliquid similique? Iure, optio! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nisi alias
                  id, numquam tenetur corporis animi aliquam aliquid similique?
                  Iure, optio! Lorem ipsum dolor sit amet consectetur
                </div>
              </Tab>

              <Tab key="reviews" title="Reviews">
                <div className="h-60 overflow-y-auto no-scrollbar">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  in quibusdam molestias reiciendis aut commodi possimus soluta
                  aperiam similique cupiditate.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nisi alias id, numquam tenetur
                  corporis animi aliquam aliquid similique? Iure, optio!
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
            <Button
              size="lg"
              radius="full"
              className="bg-indigo-500 text-white text-lg uppercase"
            >
              Add to Cart <CiShoppingCart size={26} className="text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;

"use client";
import { Button } from "@nextui-org/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const BannerImageSlider = () => {
  const data = [
    {
      title: "Hot Deals",
      subTitle: (
        <h5 className="md:text-6xl text-4xl mt-2 mb-5 font-semibold">
          Hot Deals <br />
          Of Headphone
        </h5>
      ),
      image: "/images/sliderImage1.jpg",
    },
    {
      title: "Best Sales",
      subTitle: (
        <h5 className="md:text-6xl text-4xl mt-2 mb-5 font-semibold">
          Best Offers <br />
          For Keyboards
        </h5>
      ),
      image: "/images/sliderImage2.jpg",
    },
    {
      title: "Top Deals",
      subTitle: (
        <h5 className="md:text-6xl text-4xl mt-2 mb-5 font-semibold">
          Top Deals <br />
          On Accesories
        </h5>
      ),
      image: "/images/sliderImage3.png",
    },
  ];
  return (
    <div className="md:h-[500px]">
      <Swiper
        style={
          { "--swiper-pagination-color": "#ff0000" } as React.CSSProperties
        }
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="cursor-grab"
      >
        {data.map((dt, i) => (
          <SwiperSlide className="relative px-4 md:px-0" key={dt.text}>
            <div
              className={`absolute md:top-[30%] top-1/3 left-[17%] ${
                i === 0 && "md:left-[31%] left-[17%]"
              } ${i === 1 && "md:left-[32%] left-[17%]"} ${
                i === 2 && "md:left-[31.5%] left-[19%]"
              } text-center text-white`}
            >
              <p className="text-md font-bold">{dt.title}</p>
              {dt.subTitle}
              <Button
                radius="full"
                className="uppercase bg-indigo-500 text-white text-sm font-bold"
              >
                Shop Now
              </Button>
            </div>
            <img
              draggable
              src={dt.image}
              alt="Image"
              className="md:w-full rounded-3xl object-cover object-center h-[440px] md:h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerImageSlider;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const SwiperCarousel = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '#slider-button-right',
          prevEl: '#slider-button-left',
        }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        className="default-carousel"
      >
        <SwiperSlide>
          <div className="relative home-image">
            <img
              src={slide1}
              alt="Home"
              className="w-full h-[calc(100vh-56px)] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-8 md:px-16">
              <h1 className="text-4xl md:text-5xl font-bold">Experience the Difference!</h1>
              <p className="mt-2 text-lg md:text-xl">Discover</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative home-image">
            <img
              src={slide2}
              alt="Home"
              className="w-full h-[calc(100vh-56px)] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-8 md:px-16">
              <h1 className="text-4xl md:text-5xl font-bold">Experience the Difference!</h1>
              <p className="mt-2 text-lg md:text-xl">Discover</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative home-image">
            <img
              src={slide3}
              alt="Home"
              className="w-full h-[calc(100vh-56px)] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-8 md:px-16">
              <h1 className="text-4xl md:text-5xl font-bold">Experience the Difference!</h1>
              <p className="mt-2 text-lg md:text-xl">Discover</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination"></div>

      {/* Optional Navigation Buttons */}
      <div
        id="slider-button-left"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 cursor-pointer text-2xl"
      >
        <FaArrowRightLong />
      </div>
      <div
        id="slider-button-right"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 cursor-pointer text-2xl"
      >
        <FaArrowRightLong />
      </div>
    </div>
  );
};

export default SwiperCarousel;

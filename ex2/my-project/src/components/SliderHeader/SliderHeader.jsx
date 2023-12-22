// import Swiper core and required modules
import { A11y, Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      className="container h-screen"
      modules={[Autoplay, Pagination, A11y]}
      direction={"vertical"}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="grid place-items-center">
        <div className="text-center uppercase text-white">
          <h2 className="mb-4 text-4xl font-bold tracking-[8px] md:text-6xl lg:text-[80px]">
            Simple & Modern
          </h2>
          <p className="tracking-[6px]">
            We make the world beautiful every day
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="grid place-items-center">
        <div className="text-center uppercase text-white">
          <h2 className="mb-4 text-4xl font-bold tracking-[8px] md:text-6xl lg:text-[80px]">
            Simple & Modern
          </h2>
          <p className="tracking-[6px]">
            We make the world beautiful every day
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="grid place-items-center">
        <div className="text-center uppercase text-white">
          <h2 className="mb-4 text-4xl font-bold tracking-[8px] md:text-6xl lg:text-[80px]">
            Simple & Modern
          </h2>
          <p className="tracking-[6px]">
            We make the world beautiful every day
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="grid place-items-center">
        <div className="text-center uppercase text-white">
          <h2 className="mb-4 text-4xl font-bold tracking-[8px] md:text-6xl lg:text-[80px]">
            Simple & Modern
          </h2>
          <p className="tracking-[6px]">
            We make the world beautiful every day
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="grid place-items-center">
        <div className="text-center uppercase text-white">
          <h2 className="mb-4 text-4xl font-bold tracking-[8px] md:text-6xl lg:text-[80px]">
            Simple & Modern
          </h2>
          <p className="tracking-[6px]">
            We make the world beautiful every day
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";

export default () => {
  return (
    <Swiper
      className="md:min-h-dvh container h-[50vh]"
      modules={[Autoplay, Navigation, Pagination, A11y]}
      direction={"vertical"}
      loop={true}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="grid place-items-center pr-2">
        <Slide
          title={"Simple & Modern"}
          description={"We make world beautiful every day"}
        />
      </SwiperSlide>
      <SwiperSlide className="grid place-items-center pr-2">
        <Slide
          title={"Simple & Modern"}
          description={"We make world beautiful every day"}
        />
      </SwiperSlide>
      <SwiperSlide className="grid place-items-center pr-2">
        <Slide
          title={"Simple & Modern"}
          description={"We make world beautiful every day"}
        />
      </SwiperSlide>
      <SwiperSlide className="grid place-items-center pr-2">
        <Slide
          title={"Simple & Modern"}
          description={"We make world beautiful every day"}
        />
      </SwiperSlide>
      <SwiperSlide className="grid place-items-center pr-2">
        <Slide
          title={"Simple & Modern"}
          description={"We make world beautiful every day"}
        />
      </SwiperSlide>
    </Swiper>
  );
};

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";

const slider = [
  {
    id: 1,
    className: "grid place-items-center pr-2",
    title: "Simple & Modern",
    description: "We make world beautiful every day",
  },
];

export default () => {
  return (
    <Swiper
      className="md:h-dvh container h-[50dvh]"
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
      {[...slider, ...slider, ...slider, ...slider, ...slider].map(
        ({ id, className, title, description }, index) => (
          <SwiperSlide key={id + index} className={className}>
            <Slide title={title} description={description}></Slide>
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
};

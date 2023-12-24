import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import slides from "./slides.json";

export const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={2}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          1020: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          1530: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {slides.map(
          ({ id, image, title, description, userName, data, userPhoto }) => (
            <SwiperSlide key={id}>
              <Card
                image={image}
                title={title}
                description={description}
                userName={userName}
                data={data}
                userPhoto={userPhoto}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </>
  );
};

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Item4 from "./Item4";
import { useEffect, useState } from "react";

const Carousel = ({ menu, t }) => {
  const [swiper, setSwiper] = useState(null);
  const items = [<Item1 t={t} />, <Item2 t={t} />, <Item3 t={t} />, <Item4 t={t} />];

  useEffect(() => {
    if (swiper) swiper.slideTo(menu, 500);
  }, [menu, swiper]);

  return (
    <Swiper
      onSwiper={setSwiper}
      spaceBetween={50}
      slidesPerView={1}
      allowTouchMove={false}
    >
      {items.map((item, index) => {
        return <SwiperSlide key={index + 1}>{item}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default Carousel;

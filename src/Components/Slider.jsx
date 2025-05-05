import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = () => {
  return (
    <div className="h-screen w-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-full"
      >
        <SwiperSlide className="h-full">
          <img
            src="https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/bg-1-1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img
            src="https://webtemplatemasters.com/diplomat/wp-content/uploads/2015/03/slide-1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <img
            src="https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/bg-2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <img
            src="https://webtemplatemasters.com/diplomat/wp-content/uploads/2015/03/slide-2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

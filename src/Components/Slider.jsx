import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <div className="w-full h-[80vh] sm:h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide className="h-full">
          <img
            src="https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/bg-1-1.jpg"
            alt="Outdoor jazz event"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img
            src="https://webtemplatemasters.com/diplomat/wp-content/uploads/2015/03/slide-1.jpg"
            alt="Live music stage"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img
            src="https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/bg-2.jpg"
            alt="Festival crowd"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img
            src="https://webtemplatemasters.com/diplomat/wp-content/uploads/2015/03/slide-2.jpg"
            alt="Jazz concert lights"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

import React from 'react';
import News from './News';

// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

const NewsSection = () => {
  return (
    <div className='news-section pt-lg-5 pt-4 mt-xl-0 mt-lg-5'>
      <h1>In News</h1>
      <div className='d-flex justify-content-around'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 0px
            0: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            // when window width is >= 1000px
            600: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1000: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <News url='/images/Brand/logo-1.png' />
          </SwiperSlide>
          <SwiperSlide>
            <News url='/images/Brand/logo-2.png' />
          </SwiperSlide>
          <SwiperSlide>
            <News url='/images/Brand/logo-3.png' />
          </SwiperSlide>
          <SwiperSlide>
            <News url='/images/Brand/logo-4.png' />
          </SwiperSlide>
          <SwiperSlide>
            <News url='/images/Brand/logo-5.png' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewsSection;

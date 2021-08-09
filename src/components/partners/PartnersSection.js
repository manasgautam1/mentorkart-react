import React from 'react';
import Partners from './Partners';

// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

const PartnersSection = () => {
  return (
    <div className='partners-section pt-lg-5 pt-5 mt-xl-0 mt-lg-5'>
      <h1>In Partnership with</h1>
      <div className='mt-md-4 mt-3 text-center'>
        <Swiper
          spaceBetween={0}
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
              spaceBetween: 0,
            },
            1000: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide>
            <Partners url='/images/Brand/logo-1.png' />
          </SwiperSlide>
          <SwiperSlide>
            <Partners url='/images/Brand/logo-2.png' />
          </SwiperSlide>
          <SwiperSlide>
            <Partners url='/images/Brand/logo-3.png' />
          </SwiperSlide>
          <SwiperSlide>
            <Partners url='/images/Brand/logo-4.png' />
          </SwiperSlide>
          <SwiperSlide>
            <Partners url='/images/Brand/logo-5.png' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PartnersSection;

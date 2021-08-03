import React from 'react';
import JoinCard from './JoinCard';
import AdCard from './AdCard';

// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

// install Swiper modules
SwiperCore.use([A11y, Autoplay]);

const JoinSection = () => {
  return (
    <div className='mt-xl-4 mt-lg-5 mt-0 join-section pt-lg-5'>
      <h1 className='mb-0'>Join Mentorkart</h1>
      <p>We have Numerous Solutions for you</p>
      <div className='join-cards row'>
        <div className='col-lg-4 one'>
          <JoinCard title='Individual' />
        </div>
        <div className='col-lg-8'>
          <div className='row'>
            <div className='col-6 two'>
              <JoinCard title='Organization' />
            </div>
            <div className='col-6 two'>
              <JoinCard title='Campus' />
            </div>
          </div>
        </div>
      </div>
      <div className='ads-cards'>
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ autoplay: true, delay: 5000 }}
          breakpoints={{
            // when window width is >= 0px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 1000px
            900: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <AdCard id='one' />
          </SwiperSlide>
          <SwiperSlide>
            <AdCard id='two' />
          </SwiperSlide>
          <SwiperSlide>
            <AdCard id='three' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default JoinSection;

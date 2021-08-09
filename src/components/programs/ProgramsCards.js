import React from 'react';

// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

const ProgramsCards = () => {
  return (
    <div className='programsCard'>
      <Swiper
        spaceBetween={60}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ autoplay: true, delay: 5000 }}
        breakpoints={{
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          // when window width is >= 1000px
          1100: {
            slidesPerView: 1.5,
          },
        }}
      >
        <SwiperSlide>
          <div className='program-container'>
            <img src='/images/program-bg-2.png' alt='' className='bg-2' />
            <div className='programs-content d-flex align-items-center'>
              <img src='/images/program-bg-1.png' alt='' className='bg-1' />
              <h1>Student Mentorship Program</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='program-container'>
            <img src='/images/program-bg-2.png' alt='' className='bg-2' />
            <div className='programs-content d-flex align-items-center'>
              <img src='/images/program-bg-1.png' alt='' className='bg-1' />
              <h1>Student Mentorship Program</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='program-container'>
            <img src='/images/program-bg-2.png' alt='' className='bg-2' />
            <div className='programs-content d-flex align-items-center'>
              <img src='/images/program-bg-1.png' alt='' className='bg-1' />
              <h1>Student Mentorship Program</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProgramsCards;

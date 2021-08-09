import React from 'react';
import MentorCard from './MentorCard';

// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

const FindMentor = () => {
  return (
    <div className='pt-xl-2 pt-md-5 pt-4 find-mentor px-md-0 px-2'>
      <h1>Find a Mentor</h1>
      <p>We have Hundreds of Mentors at Affordable price</p>
      <div className='mentor-cards row px-xl-5'>
        <Swiper
          spaceBetween={60}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ autoplay: true, delay: 10000 }}
          breakpoints={{
            // when window width is >= 0px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 1000px
            1000: {
              slidesPerView: 2.2,
            },
          }}
        >
          <SwiperSlide>
            <MentorCard />
          </SwiperSlide>
          <SwiperSlide>
            <MentorCard />
          </SwiperSlide>
          <SwiperSlide>
            <MentorCard />
          </SwiperSlide>
          <SwiperSlide>
            <MentorCard />
          </SwiperSlide>
          <SwiperSlide>
            <MentorCard />
          </SwiperSlide>
        </Swiper>
      </div>
      <button className='view-all-btn mt-md-2 mt-1'>View All</button>
    </div>
  );
};

export default FindMentor;

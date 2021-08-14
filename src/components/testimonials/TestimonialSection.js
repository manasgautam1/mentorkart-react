import React from 'react';
import TestimonialCard from './TestimonialCard';

// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

const TestimonialSection = () => {
  return (
    <div className='mt-lg-5 mt-md-4 mt-4 testimonial-section pt-xl-2 pt-lg-5 pt-md-0 pt-4  px-md-0 px-2'>
      <h1>Testimonials</h1>
      <div className='mt-4 testimonial-cards mx-lg-5 px-md-0 px-2'>
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
            500: {
              slidesPerView: 2,
            },
            // when window width is >= 1000px
            800: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <TestimonialCard
              content='"Felix is a great mentor, with years of experience in the marketing industry he knows exactly what hiring managers are looking for. Really easy to talk to, very good listener and gives great advice."'
              by='- Walter, a Marketing mentee'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              content='"Felix is a great mentor, with years of experience in the marketing industry he knows exactly what hiring managers are looking for. Really easy to talk to, very good listener and gives great advice."'
              by='- Walter, a Marketing mentee'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              content='"Felix is a great mentor, with years of experience in the marketing industry he knows exactly what hiring managers are looking for. Really easy to talk to, very good listener and gives great advice."'
              by='- Walter, a Marketing mentee'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              content='"Felix is a great mentor, with years of experience in the marketing industry he knows exactly what hiring managers are looking for. Really easy to talk to, very good listener and gives great advice."'
              by='- Walter, a Marketing mentee'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              content='"Felix is a great mentor, with years of experience in the marketing industry he knows exactly what hiring managers are looking for. Really easy to talk to, very good listener and gives great advice."'
              by='- Walter, a Marketing mentee'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              content='"Felix is a great mentor, with years of experience in the marketing industry he knows exactly what hiring managers are looking for. Really easy to talk to, very good listener and gives great advice."'
              by='- Walter, a Marketing mentee'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;

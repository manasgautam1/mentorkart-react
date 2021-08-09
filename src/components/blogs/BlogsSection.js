import React from 'react';
import Blogs from './Blogs';

// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

const BlogsSection = () => {
  return (
    <div className='blogs-section pt-lg-5 pt-5 mt-xl-0 mt-lg-5'>
      <h1>Blogs</h1>
      <div className='mt-md-4 mt-0 mx-xl-4'>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ autoplay: true, delay: 5000 }}
          breakpoints={{
            // when window width is >= 0px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 1000px
            700: {
              slidesPerView: 2,
            },
            // when window width is >= 1000px
            1100: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide>
            <Blogs
              date='28 January 2021'
              type='Children therapy'
              views='120'
              comment='1'
              title='Top seven challenges in counselling children'
              content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Sunt in similique  culpa qui officia deserunt.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Blogs
              date='18 January 2021'
              type='Group therapy'
              views='120'
              comment='1'
              title='The pros and cons of group psychotherapy'
              content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Sunt in similique  culpa qui officia deserunt.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Blogs
              date='30 January 2021'
              type='Therapy'
              views='120'
              comment='1'
              title='The pros and cons of group psychotherapy'
              content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Sunt in similique  culpa qui officia deserunt.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Blogs
              date='28 January 2021'
              type='Children therapy'
              views='120'
              comment='1'
              title='Top seven challenges in counselling children'
              content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Sunt in similique  culpa qui officia deserunt.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Blogs
              date='18 January 2021'
              type='Group therapy'
              views='120'
              comment='1'
              title='The pros and cons of group psychotherapy'
              content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Sunt in similique  culpa qui officia deserunt.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Blogs
              date='30 January 2021'
              type='Therapy'
              views='120'
              comment='1'
              title='The pros and cons of group psychotherapy'
              content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Sunt in similique  culpa qui officia deserunt.'
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <button className='more-articles-btn'>Read More Articles</button>
    </div>
  );
};

export default BlogsSection;

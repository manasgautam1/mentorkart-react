import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Facilities from './Facilities';
import ShowcaseMentorCard from './ShowcaseMentorCards';
import MyNavbar from '../Navbar';

// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

const Showcase = () => {
  return (
    <>
      <div className='showcase' controls={false}>
        <Container>
          <MyNavbar />
        </Container>

        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ autoplay: true, delay: 8000 }}
        >
          <SwiperSlide>
            <div className='showcase-container'>
              <img
                className='d-block showcase-image'
                src='/images/showcase-img-2.png'
                alt='First slide'
              />
              <Container>
                <div className='showcase-content'>
                  <h3>
                    Sign up for free & <br /> Get adviced from expert
                  </h3>
                  <form
                    action='/'
                    className='showcase-form d-flex justify-content-between'
                  >
                    <input
                      type='email'
                      className='showcase-input'
                      placeholder='Enter your email id'
                    />
                    <button type='submit' className='showcase-btn'>
                      Sign Up
                    </button>
                  </form>
                </div>
              </Container>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='showcase-container'>
              <img
                className='d-block showcase-image'
                src='/images/showcase-img-2.png'
                alt='First slide'
              />
              <Container>
                <div className='showcase-content'>
                  <h3>
                    Sign up for free & <br /> Get adviced from expert
                  </h3>
                  <form
                    action='/'
                    className='showcase-form d-flex justify-content-between'
                  >
                    <input
                      type='email'
                      className='showcase-input'
                      placeholder='Enter your email id'
                    />
                    <button type='submit' className='showcase-btn'>
                      Sign Up
                    </button>
                  </form>
                </div>
              </Container>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='showcase-container'>
              <img
                className='d-block showcase-image'
                src='/images/showcase-img-2.png'
                alt='First slide'
              />
              <Container>
                <div className='showcase-content'>
                  <h3>
                    Sign up for free & <br /> Get adviced from expert
                  </h3>
                  <form
                    action='/'
                    className='showcase-form d-flex justify-content-between'
                  >
                    <input
                      type='email'
                      className='showcase-input'
                      placeholder='Enter your email id'
                    />
                    <button type='submit' className='showcase-btn'>
                      Sign Up
                    </button>
                  </form>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Container>
        <div className='px-md-0 px-2'>
          <Row>
            <Col xs={12} md={{ order: 'last' }}>
              <ShowcaseMentorCard />
            </Col>
            <Col xs={12} md={{ order: 'first' }}>
              <Facilities />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Showcase;

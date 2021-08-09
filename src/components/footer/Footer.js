import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
const Footer = () => {
  return (
    <div className='footer py-4 pb-4 my-5 mb-0'>
      <Container>
        <div className='row'>
          <div className='col-lg-3 left'>
            <div className='img'>
              <img src='/images/main-icon.png' alt='' />
            </div>
            <p className='ps-lg-4 mb-0'>
              &copy; 2021 MentorKart is Registered Trademark of DGguru Learning
              Solutions Pvt. Ltd
            </p>
          </div>
          <div className='col-lg-5 center mt-lg-0 mt-4'>
            <div className='row'>
              <div className='col-6 d-flex flex-column justify-content-start align-items-center'>
                <ul>
                  <li>
                    <Link to='#about'>About</Link>
                  </li>
                  <li>
                    <Link to='#our-team'>Our Team</Link>
                  </li>
                  <li>
                    <Link to='#blogs-section'>Blogs</Link>
                  </li>
                  <li className='mb-0'>
                    <Link to='#find-mentor-section'>Find a Mentor</Link>
                  </li>
                </ul>
              </div>
              <div className='col-6  d-flex flex-column justify-content-around'>
                <ul>
                  <li>
                    <Link to='#privacy-policy'>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to='#refund-policy'>Refund Policy</Link>
                  </li>
                  <li>
                    <Link to='#faq-section'>FAQ</Link>
                  </li>
                  <li>
                    <Link to='#terms-section'>Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-4 right'>
            <h2>Mail Us : </h2>
            <span>mentorkart@mentorkart.com</span>
            <div className='socials d-flex justify-content-around'>
              <Link to='www.twitter.com'>
                <i className='fab fa-twitter'></i>
              </Link>
              <Link to='www.instagram.com'>
                <i className='fab fa-instagram'></i>
              </Link>
              <Link to='www.facebook.com'>
                <i className='fab fa-facebook'></i>
              </Link>
              <Link to='phone'>
                <i className='fas fa-phone'></i>
              </Link>
              <Link to='www.youtube.com'>
                <i className='fab fa-youtube'></i>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

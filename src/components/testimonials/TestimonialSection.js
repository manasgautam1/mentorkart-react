import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialSection = () => {
  return (
    <div className='mt-lg-5 mt-md-4 testimonial-section pt-xl-2 pt-lg-5 pt-md-0 pt-4'>
      <h1>Testimonials</h1>
      <div className='testimonial-cards row px-lg-5'>
        <TestimonialCard
          content='"Felix is a great mentor, with years of experience in the marketing industry he knows exactly what hiring managers are looking for. Really easy to talk to, very good listener and gives great advice."'
          by='- Walter, a Marketing mentee'
        />
        <TestimonialCard
          content='"Felix is a great mentor, with years of experience in the marketing industry he knows exactly what hiring managers are looking for. Really easy to talk to, very good listener and gives great advice."'
          by='- Walter, a Marketing mentee'
        />
        <TestimonialCard
          content='"Felix is a great mentor, with years of experience in the marketing industry he knows exactly what hiring managers are looking for. Really easy to talk to, very good listener and gives great advice."'
          by='- Walter, a Marketing mentee'
        />
      </div>
      <div className='testimonial-cards row d-lg-flex d-none mx-lg-5'>
        <TestimonialCard
          content='"Felix is a great mentor, with years of experience in the marketing industry he knows exactly what hiring managers are looking for. Really easy to talk to, very good listener and gives great advice."'
          by='- Walter, a Marketing mentee'
        />
        <TestimonialCard
          content='"Felix is a great mentor, with years of experience in the marketing industry he knows exactly what hiring managers are looking for. Really easy to talk to, very good listener and gives great advice."'
          by='- Walter, a Marketing mentee'
        />
        <TestimonialCard
          content='"Felix is a great mentor, with years of experience in the marketing industry he knows exactly what hiring managers are looking for. Really easy to talk to, very good listener and gives great advice."'
          by='- Walter, a Marketing mentee'
        />
      </div>
    </div>
  );
};

export default TestimonialSection;

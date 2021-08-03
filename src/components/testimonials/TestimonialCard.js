import React from 'react';

const TestimonialCard = (props) => {
  return (
    <div className='col-lg-4 mt-0 px-xl-5 px-3 py-4'>
      <div className='testimonial-card px-4 pt-5 pb-4'>
        <img src='/images/colons.png' alt='' className='colon-img' />
        <p>{props.content}</p>
        <span>{props.by}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;

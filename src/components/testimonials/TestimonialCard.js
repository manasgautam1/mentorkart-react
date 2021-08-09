import React from 'react';

const TestimonialCard = (props) => {
  return (
    <div className='col-lg-4 mt-0 py-4'>
      <div className='testimonial-card px-5 mx-xl-2 pt-5 pb-4'>
        <img src='/images/colons.png' alt='' className='colon-img' />
        <p>{props.content}</p>
        <span>{props.by}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;

import React from 'react';

const Facility = (props) => {
  return (
    <div className='facility scale-animation col-md-2 col-4 px-md-2 p-0'>
      <img className='facility-img' src='/images/facility-img.png' alt='' />
      <p className='facility-text px-lg-3 px-md-1 px-md-0 px-2'>{props.text}</p>
    </div>
  );
};

export default Facility;

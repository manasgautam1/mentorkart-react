import React from 'react';

const JoinCard = (props) => {
  return (
    <div className='mt-0 p-lg-4 py-lg-4 py-2'>
      <div className='join-card px-xl-5 px-4 py-4'>
        <span>as</span>
        <h2>{props.title}</h2>
        <button className='signup-btn'>SignUp Now</button>
      </div>
    </div>
  );
};

export default JoinCard;

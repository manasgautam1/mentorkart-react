import React from 'react';

const ShowcaseMentorCard = (props) => {
  return (
    <div className='showcase-mentor-card  scale-animation-2 col-6 p-lg-5 py-lg-4'>
      <div className='showcase-mentor-card-top d-flex align-items-center'>
        <img src='/images/showcase-card-2-icon.png' alt='' />
        <div className='ms-md-3 ms-1 content'>
          <p>{props.title}</p>
          <h2 className='mb-0'>Mentor</h2>
        </div>
        <img src={props.bg_url} alt='' className='bg-img' />
      </div>
      <div className={props.classes}>
        <span className='show-in-mobile'>Click Here</span>
        <span className='show-in-desktop'>{props.text}</span>
      </div>
    </div>
  );
};

export default ShowcaseMentorCard;

import React from 'react';
import ShowcaseMentorCard from './ShowcaseMentorCard';

const ShowcaseMentorCards = () => {
  return (
    <div className='showcase-mentor-cards row mb-0 mb-lg-5 mt-lg-1 mt-md-0 mt-5 mt-lg-0'>
      <ShowcaseMentorCard
        classes='card-one showcase-mentor-card-bottom'
        title='Find a'
        text='Click here to find a mentor'
        bg_url='/images/showcase-card-1-icon.png'
      />
      <ShowcaseMentorCard
        classes='card-two showcase-mentor-card-bottom'
        title='Ask a'
        text='Click here to ask a mentor'
        bg_url='/images/showcase-card-2-icon.png'
      />
    </div>
  );
};

export default ShowcaseMentorCards;

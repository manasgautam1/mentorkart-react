import React from 'react';
import Facility from './Facility';

const Facilities = () => {
  return (
    <div className='facilities row text-center my-4'>
      <Facility img='/images/icon1.png' text='Live Session with Mentors' />
      <Facility img='/images/icon2.png' text='Schedule Calls with Mentors' />
      <Facility img='/images/icon3.png' text='1:1 Chat with Mentor' />
      <Facility img='/images/icon4.png' text='Ask a Mentor (Group Chat)' />
      <Facility img='/images/icon5.png' text='Goals Setting' />
      <Facility img='/images/icon6.png' text='Master Classes' />
    </div>
  );
};

export default Facilities;

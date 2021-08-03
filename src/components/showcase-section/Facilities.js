import React from 'react';
import Facility from './Facility';

const Facilities = () => {
  return (
    <div className='facilities row text-center my-4'>
      <Facility text='Live Session with Mentors' />
      <Facility text='Schedule Calls with Mentors' />
      <Facility text='1:1 Chat with Mentor' />
      <Facility text='Ask a Mentor (Group Chat)' />
      <Facility text='Goals Setting' />
      <Facility text='Master Classes' />
    </div>
  );
};

export default Facilities;

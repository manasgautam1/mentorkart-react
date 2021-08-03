import React from 'react';
import ProgramsCards from './ProgramsCards';

const ProgramsSection = () => {
  return (
    <div className='programs-section mt-xl-3 mt-lg-5 pt-lg-5 pt-4'>
      <h1>Programs & Courses</h1>
      <p>Are you Ready? Become sure with our Mentorship Programs</p>
      <div className='programs-cards'>
        <ProgramsCards />
      </div>
    </div>
  );
};

export default ProgramsSection;

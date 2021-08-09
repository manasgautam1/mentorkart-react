import React from 'react';
import ProgramsCards from './ProgramsCards';

const ProgramsSection = () => {
  return (
    <div className='programs-section mt-xl-3 mt-lg-5 pt-lg-5  px-md-0 px-2  mt-md-4 mt-5'>
      <h1>Programs & Courses</h1>
      <p className='mb-5'>
        Are you Ready? Become sure with our Mentorship Programs
      </p>
      <div className='programs-cards px-xl-5'>
        <ProgramsCards />
      </div>
    </div>
  );
};

export default ProgramsSection;

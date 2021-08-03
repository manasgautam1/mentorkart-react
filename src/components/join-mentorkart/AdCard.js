import React from 'react';

const AdCard = (props) => {
  return (
    <div id={props.id} className='mt-lg-4 mt-0 p-4 col-lg-4 '>
      <div className='ad-card'>
        <p>
          Your Advertisement <br />
          <span>513*273px</span>
        </p>
      </div>
    </div>
  );
};

export default AdCard;

import React from 'react';

const Blogs = (props) => {
  return (
    <div className='p-4'>
      <div className='blogs-container'>
        <div className='header'>
          <img src='/images/blogs-bg.png' alt='' className='main-img' />
          <div className='icon'>
            <img src='/images/main-icon.png' alt='' />
          </div>
          <div className='type'>{props.type}</div>
        </div>
        <div className='content p-4 pt-3'>
          <div className='head'>
            <span className='date'>{props.date}</span>
            <span className='likes'>{props.views} likes</span>
            <span className='comments'>{props.comment} comments</span>
          </div>
          <div className='title'>{props.title}</div>
          <div className='body'>{props.content}</div>
          <button className='read-more-btn btn'>
            Read More <i className='fas fa-arrow-right'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

import React, { useState } from 'react';
import uniqid from 'uniqid'
import './ProjectCarousel.css';

const ProjectCarousel = ({ media }) => {
  const [current, setCurrent] = useState(0);
  const total = media.length;

  const next = () => setCurrent((curr) => (curr + 1) % total);
  const prev = () => setCurrent((curr) => (curr - 1 + total) % total);

  return (
    <div className='project-carousel'>
      <div
        className='carousel-media-wrapper'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {media.map((item, index) => (
          <div className='carousel-media-item' key={uniqid()}>
            {item.type === 'image' && (
              <img src={item.src} alt={`Slide ${index + 1}`} />
            )}
            {item.type === 'iframe' && (
              <iframe
                width='100%'
                height = '100%'
                src={item.src}
                title={`Iframe ${index + 1}`}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            )}
          </div>
        ))}
      </div>

      <div className='carousel-buttons'>
        <button type='button' onClick={prev} className='carousel-button'>
          ‹
        </button>
        <button type='button' onClick={next} className='carousel-button'>
          ›
        </button>
      </div>

      <div className='carousel-dots'>
        {media.map((_, idx) => (
          <button
            type='button'
            key={uniqid()}
            className={`carousel-dot ${idx === current ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  )
};

export default ProjectCarousel;

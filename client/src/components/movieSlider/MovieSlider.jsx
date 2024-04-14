import { Link } from 'react-router-dom';
import MovieCard from '../movieCard/MovieCard';
import { bigSliderItems } from '../../lib/dummy';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

const MovieSlider = ({ title, offerMore }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);
  const handleRotation = (direction) => {
    direction === 'left' && slideIndex > 0
      ? setSlideIndex((prev) => prev - 1)
      : direction === 'right' && setSlideIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        (100 / bigSliderItems.length) * 4 * slideIndex
      }%)`;
    }
  }, [slideIndex]);

  return (
    <div className='pl-8 lg:pl-16'>
      <div className='flex items-center gap-2 text-[21px] font-bold'>
        <span className='text-mainBlue'>Prime</span>
        <span>{title}</span>
        {offerMore && (
          <Link to='/' className='ml-8 flex items-center gap-1'>
            Daha fazlasını görüntüle
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 512 512'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
              className='mt-0.5'
            >
              <path d='M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z'></path>
            </svg>
          </Link>
        )}
      </div>
      <div className='mt-4 relative group'>
        <span
          className={classNames(
            'absolute top-0 items-center justify-center w-10 rounded-md -left-12 z-10 cursor-pointer hidden group-hover:flex bg-black/20 shadow-2xl shadow-black/40 h-full',
            slideIndex == 0 && 'hidden'
          )}
          onClick={() => handleRotation('left')}
        >
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 512 512'
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 hover:scale-125'
          >
            <path d='M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z'></path>
          </svg>
        </span>
        <span
          className='absolute top-0 items-center justify-center w-10 rounded-md left-[calc(100%-4rem)] z-10 cursor-pointer hidden rotate-180  group-hover:flex bg-black/20 shadow-2xl shadow-black/40 h-full'
          onClick={() => handleRotation('right')}
        >
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 512 512'
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 hover:scale-125'
          >
            <path d='M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z'></path>
          </svg>
        </span>
        <div
          className='flex gap-4 overflow-x-scroll no-scrollbar min-w-max transition-all duration-700 ease-linear'
          ref={sliderRef}
        >
          {bigSliderItems.map((item, i) => (
            <MovieCard key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSlider;

import { useEffect, useRef, useState } from 'react';
import { bigSliderItems } from '../../lib/dummy';
import { Link } from 'react-router-dom';

const VideoSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);
  const handleRotation = (direction) => {
    direction === 'left' && slideIndex > 0
      ? setSlideIndex((prev) => prev - 1)
      : direction === 'right' &&
        slideIndex < 6 &&
        setSlideIndex((prev) => prev + 1);
  };

  console.log(slideIndex);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        288 * slideIndex + 64 * slideIndex
      }px)`;
    }
  }, [slideIndex]);
  return (
    <section className='h-56 lg:h-[50vh] xl:h-screen'>
      <div className='flex flex-col gap-4 h-full'>
        <div className='flex items-center gap-4 ml-8 text-xl font-bold'>
          <span className='text-mainBlue'>Prime</span>
          <span>Türkiye de ilk 10</span>
          <span>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 16 16'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5'
              ></path>
            </svg>
          </span>
        </div>
        <div className='pl-8 h-full group relative'>
          <span
            className='absolute top-0 items-center justify-center w-10 rounded-md left-0 z-10 cursor-pointer hidden rotate-180  group-hover:flex bg-black/20 shadow-2xl shadow-black/40 h-full'
            onClick={() => handleRotation('left')}
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 512 512'
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 hover:scale-125 rotate-180'
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
          <div className=''>
            <div
              className='flex gap-12 max-w-max transition-all duration-500 ease-linear'
              ref={sliderRef}
            >
              {bigSliderItems.slice(0, 10).map((item, i) => (
                <Link
                  to={`/play/${item.id}`}
                  className='w-72 h-40 shrink-0 relative rounded-md ml-4'
                  key={i}
                >
                  <span className='absolute text-8xl h-full flex items-center justify-center -left-11 -z-10 font-bold opacity-50'>
                    {i + 1}
                  </span>
                  <img
                    src={item.img}
                    alt=''
                    className='w-full h-full object-cover'
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;

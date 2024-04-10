import { useEffect, useRef, useState } from 'react';
import { bigSliderItems } from '../../lib/dummy';
import classNames from 'classnames';

const BigSlider = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const bigSliderRef = useRef(null);

  const handleRotation = (direction) => {
    direction === 'left' && imgIndex > 0 && setImgIndex((prev) => prev - 1);
    direction === 'right' && imgIndex != 13 && setImgIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (bigSliderRef.current) {
      bigSliderRef.current.style.transform = `translateX(calc(${
        imgIndex * -92
      }vw - ${imgIndex * 32}px)`;
    }
  }, [imgIndex]);

  return (
    <section className='w-full'>
      <div className='w-full flex flex-col gap-1'>
        <div className='relative pl-4'>
          <span
            className='absolute top-1/2 left-4 z-10'
            onClick={() => handleRotation('left')}
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 512 512'
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 hover:scale-125'
            >
              <path d='M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z'></path>
            </svg>
          </span>
          <span
            className='absolute top-1/2 left-[calc(100svw-40px)] z-10'
            onClick={() => handleRotation('right')}
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 512 512'
              xmlns='http://www.w3.org/2000/svg'
              className='rotate-180 w-5 h-5 hover:scale-125'
            >
              <path d='M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z'></path>
            </svg>
          </span>
          <div className='w-full'>
            <div
              className='flex gap-12 overflow-x-scroll no-scrollbar w-[calc(1288vw+502px)] transition-all duration-500 ease-linear h-56 lg:h-[580px] pl-[5vw]'
              ref={bigSliderRef}
            >
              {bigSliderItems.map((item, i) => (
                <div
                  className='w-[92vw] flex items-center justify-center text-3xl'
                  key={i}
                >
                  {item.id}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-screen flex items-center justify-center gap-3 p-2'>
          {bigSliderItems.map((item, i) => (
            <div
              key={item.id}
              className={classNames(
                ' hover:bg-gray-300/50 hover:scale-110 w-2 h-2 rounded-full',
                imgIndex === i ? 'bg-shine' : `bg-gray-700`
              )}
              onClick={() => setImgIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BigSlider;
{
  /* <div
            className={classNames(
              'flex gap-12 overflow-x-scroll no-scrollbar w-[1372svw] transition-all duration-500 ease-linear'
            )}
            ref={bigSliderRef}
          >
            {bigSliderItems.map((item, i) => (
              <div
                key={i}
                className='w-[calc(100svw-64px)] max-h-56 lg:max-h-[580px]'
              >
                <img
                  alt=''
                  src={item.img}
                  className='object-cover aspect-video w-full h-full  rounded-lg'
                />
              </div>
            ))}
          </div> */
}

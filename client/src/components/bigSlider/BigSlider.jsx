import { useEffect, useRef, useState } from 'react';
import { bigSliderItems } from '../../lib/dummy';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgIndex((prev) => (prev >= 13 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className='w-full'>
      <div className='w-full flex flex-col gap-1'>
        <div className='relative pl-4'>
          <span
            className={classNames(
              'absolute top-1/2 left-4 z-10',
              imgIndex == 0 && 'hidden'
            )}
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
            className={classNames(
              'absolute top-1/2 left-[calc(100svw-40px)] z-10',
              imgIndex >= 13 && 'hidden'
            )}
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
          <div className='w-full z-10'>
            <div
              className='flex gap-12 overflow-x-scroll no-scrollbar w-[calc(1288vw+502px)] transition-all duration-500 ease-linear h-56 lg:h-[580px] pl-[3vw]'
              ref={bigSliderRef}
            >
              {bigSliderItems.map((item, i) => (
                <div className='w-[92vw] relative' key={i}>
                  <img
                    alt=''
                    src={item.img}
                    className='object-cover aspect-video w-full h-full rounded-lg'
                  />
                  <div className='absolute w-full h-1/3 lg:w-1/2 lg:h-full bottom-2 lg:bottom-0 left-0'>
                    <div className='px-12 lg:px-16 lg:py-24 flex flex-col justify-center gap-4 lg:gap-10 w-full h-full'>
                      <p className='text-xl font-semibold hidden lg:block'>
                        {item.additional}
                      </p>
                      <img
                        src={item.subImg}
                        alt=''
                        className='w-2/5 lg:w-1/2'
                      />
                      {item.isInPrime && (
                        <p className='flex items-center gap-4'>
                          <svg
                            strokeWidth='0'
                            viewBox='0 0 512 512'
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 stroke-white fill-sky-600'
                          >
                            <path d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'></path>
                          </svg>
                          <div className='flex items-center gap-2 lg:justify-center justify-between w-full lg:w-fit'>
                            <span className='text-xl font-semibold'>
                              Prime&apos;a dahil
                            </span>
                            <span className='text-base font-semibold bg-secondary px-2'>
                              {item.rate}
                            </span>
                          </div>
                        </p>
                      )}
                      <div className='items-center gap-4 hidden lg:flex'>
                        <Link
                          to={`/play/${item.id}`}
                          className='bg-white p-5 flex items-center justify-center rounded-full text-black hover:scale-110 hover:text-black/50 cursor-pointer'
                        >
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 448 512'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-8 h-8'
                          >
                            <path d='M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z'></path>
                          </svg>
                        </Link>
                        <Link to={`/play/${item.id}`}>
                          <span className='text-xl font-semibold'>Oynat</span>
                        </Link>
                        <span className='flex items-center gap-4 ml-4'>
                          <button className='bg-white/40 text-shine p-3 flex items-center justify-center rounded-full hover:bg-white hover:text-black hover:scale-110 transition-colors duration-200 ease-linear group relative'>
                            <svg
                              stroke='currentColor'
                              fill='currentColor'
                              strokeWidth='0'
                              viewBox='0 0 448 512'
                              xmlns='http://www.w3.org/2000/svg'
                              className='w-7 h-7'
                            >
                              <path d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'></path>
                            </svg>
                            <p className='text-lg font-medium hidden absolute group-hover:block top-16 -left-[75%] bg-white whitespace-nowrap p-3 py-1 rounded-lg transition-all duration-200 ease-linear'>
                              İzleme Listesi
                            </p>
                          </button>
                          <button className='bg-white/40 text-shine p-3 flex items-center justify-center rounded-full hover:bg-white hover:text-black hover:scale-110 transition-colors duration-200 ease-linear group relative'>
                            <svg
                              stroke='currentColor'
                              fill='currentColor'
                              strokeWidth='0'
                              viewBox='0 0 512 512'
                              xmlns='http://www.w3.org/2000/svg'
                              className='w-8 h-8'
                            >
                              <path d='M235.4 172.2c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2 0-20.5-8.6-20.5-20zm1.4 35.7H275V352h-38.2V207.9z'></path>
                              <path d='M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z'></path>
                            </svg>
                            <p className='text-lg font-medium hidden absolute group-hover:block top-16 -left-[75%] bg-white whitespace-nowrap p-3 py-1 rounded-lg transition-all duration-200 ease-linear'>
                              Ayrıntılar
                            </p>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
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
                ' hover:bg-gray-300/50 hover:scale-110 w-2 h-2 rounded-full cursor-pointer',
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

import { useEffect, useRef, useState } from 'react';
import { bigSliderItems } from '../../lib/dummy';
import { Link } from 'react-router-dom';

const VideoSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [muted, setMuted] = useState(true);

  const sliderRef = useRef(null);

  const handleRotation = (direction) => {
    direction === 'left' && slideIndex > 0
      ? setSlideIndex((prev) => prev - 1)
      : direction === 'right' &&
        slideIndex < 7 &&
        setSlideIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        288 * slideIndex + 64 * slideIndex
      }px)`;
    }
  }, [slideIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
        {/* ADD FUNCTIONALITY FOR ON CLICK SHOW SELECTED SLIDE INDEX INFO IN BIG CONTAINER */}
        <div className='h-full group relative'>
          <div className='h-full hidden lg:block'>
            <div className='w-full h-full relative'>
              {showImage ? (
                <img
                  src='https://m.media-amazon.com/images/S/pv-target-images/1642bf7dd4bb0d310db0ff6ed2a0952d9e941ea2e86333c593d1d0352f6f5bd7._UR1920,1080_SX1920_FMwebp_.jpg'
                  alt=''
                  className='w-full h-full object-cover'
                />
              ) : (
                <>
                  <video
                    autoPlay
                    muted={muted}
                    className='w-full h-full object-cover'
                  >
                    <source
                      src='https://s3-iad-2.cf.trailer.row.aiv-cdn.net/81ab/3b1d/5530/426e-bfa9-cf700dbd9f65/b2c92135-e6b9-49d2-aed9-ee93603035c1_video_900_audio_aaclc_128.mp4?Expires=1713544680&Signature=EVeUQ5X47~JnYCbb8b5Z5pdwrf1U87sH89UmD3oKKayRD9vDHWFHPrJUmTeYX29tAtYCf9c~UXWhndb2uDOhJ1CeRFQzv2Bj5U~TTYz4CeSskcbmrbsPUQ71PdY5b3jeuuJN3bEek0UEKE97r2ypfUlGcWIoTXoWKCpFUm2WEZMxDievwWefbDJpNDpj9WUGkCVExrCAybxYbRY04~zIGObV69Wbzu8oZkel7dIz7dvatKyITO4QVpSXMVoMEndOMjSohLbhKRZxhl7R0iY6-2SNJnjtWToSm5j3XtbuUj6tRIRJpjl0tFo2WFur0pcIVAliGyzamvOj06BIHFU5JQ__&Key-Pair-Id=APKAJIYEUF5P2E3CCYTA'
                      type='video/mp4'
                    />
                    Your browser does not support the video tag.
                  </video>{' '}
                  <div className='absolute bg-gray-500/50 rounded-full w-10 h-10 p-2 top-12 right-16 cursor-pointer hover:scale-125'>
                    {muted ? (
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 1024 1024'
                        xmlns='http://www.w3.org/2000/svg'
                        onClick={() => setMuted(false)}
                        className='text-white'
                      >
                        <path d='M575.536 65.904c-10.432-5.552-23.087-4.928-32.911 1.696L221.52 319.712l-106.624.08c-54.512 0-98.88 38.657-98.88 86.4l1.712 211.137c0 47.536 44.352 86.224 98.863 86.224l106.592.065L542.576 956.37a31.977 31.977 0 0 0 17.905 5.472c5.152 0 10.32-1.249 15.008-3.745a31.951 31.951 0 0 0 17.008-28.256V94.16a32.044 32.044 0 0 0-16.96-28.257zm-47.039 803.728l-277.6-224.526a31.97 31.97 0 0 0-17.889-5.473l-116.384-.064c-20.544 0-34.88-11.712-34.88-22.464l-1.727-211.152c0-10.48 14.336-22.16 34.895-22.16l116.4-.08a32.017 32.017 0 0 0 17.856-5.457l279.328-224v715.376zm365.505-357.118l104.593-105.84c12.496-12.496 12.496-32.752 0-45.248-12.464-12.496-32.752-12.496-45.248 0L849.011 466.994 744.675 361.426c-12.464-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248l104.592 105.84-103.6 104.816c-12.464 12.48-12.496 32.753 0 45.249s32.784 12.496 45.28 0l103.312-104.544 103.312 104.544c12.496 12.496 32.752 12.496 45.248 0s12.496-32.769 0-45.249z'></path>
                      </svg>
                    ) : (
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 1024 1024'
                        xmlns='http://www.w3.org/2000/svg'
                        onClick={() => setMuted(true)}
                        className='text-white'
                      >
                        <path d='M574.496 65.904c-10.432-5.552-23.087-4.928-32.911 1.696L220.497 319.712l-106.624.08c-54.512 0-98.88 38.657-98.88 86.4l1.712 211.137c0 47.536 44.352 86.224 98.863 86.224l106.592.065L541.552 956.37a31.977 31.977 0 0 0 17.905 5.472c5.152 0 10.32-1.249 15.008-3.745a31.951 31.951 0 0 0 17.008-28.256V94.16a32.026 32.026 0 0 0-16.977-28.257zm-47.023 803.728L249.874 645.106a31.97 31.97 0 0 0-17.889-5.473l-116.384-.064c-20.544 0-34.88-11.712-34.88-22.464L79.01 405.953c0-10.48 14.336-22.16 34.896-22.16l116.4-.08a32.017 32.017 0 0 0 17.855-5.457l279.312-224v715.376zm320.993-352.126c0-85.008-58.433-156.433-138.913-169.873-17.712-2.928-33.935 8.864-36.848 26.305-2.912 17.424 8.88 33.92 26.288 36.832 50.32 8.4 85.473 52.304 85.473 106.753 0 51.84-36.368 96.687-86.496 106.688-17.344 3.44-28.592 20.288-25.12 37.631 3.024 15.216 16.368 25.745 31.344 25.745 2.064 0 4.192-.193 6.288-.624 79.952-15.936 137.984-87.216 137.984-169.456zm-42.465-293.601c-16.528-6.16-35.01 2.241-41.153 18.8-6.193 16.56 2.223 34.992 18.783 41.168 96.528 36.015 161.376 129.903 161.376 233.63 0 103.777-64.848 197.842-161.312 234.002-16.56 6.223-24.944 24.655-18.751 41.183 4.816 12.88 17.009 20.785 29.969 20.785a31.97 31.97 0 0 0 11.215-2.033c121.344-45.504 202.88-163.632 202.88-293.936s-81.6-248.288-203.007-293.599z'></path>
                      </svg>
                    )}
                  </div>
                </>
              )}

              <div className='absolute left-4 bottom-44 w-1/2 h-max flex flex-col justify-between gap-2 pl-8'>
                <p>Türkiye&apos;de 3 numarada</p>
                <h1 className='text-4xl font-bold xl:text-7xl my-3'>
                  Oppenheimer
                </h1>{' '}
                <p className='flex items-center gap-4'>
                  <span className='p-1 px-2 bg-gray-300/20 rounded-md font-bold'>
                    16+
                  </span>
                  <span className='font-bold text-base xl:text-lg'>
                    Askeri ve savaş Tarih Dram
                  </span>
                </p>
                <h1 className='text-5xl font-bold xl:text-7xl my-3'></h1>
                <p className='hidden xl:block xl:mb-6 text-xl font-bold'>
                  İkonik, gişe rekorlu film yapımcısı Christopher Nolan&apos;dan
                  (Kara Şövalye üçlemesi, Yıldızlararası, Tenet ve Başlangıç),
                  parlak fizikçi J. Robert...
                </p>
                <p className='flex items-center gap-3 text-lg font-bold -mt-4 xl:mt-0'>
                  {' '}
                  <svg
                    strokeWidth='0'
                    viewBox='0 0 512 512'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 stroke-white fill-sky-600'
                  >
                    <path d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'></path>
                  </svg>{' '}
                  <span>Prime&apos;a Dahil</span>
                </p>
                <div className='flex items-center gap-4'>
                  <Link
                    to={`/play/`}
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
                  <Link to={`/play/`}>
                    <span className='text-xl font-semibold'>Oynat</span>
                  </Link>
                  <span className='flex items-center gap-4 ml-4'>
                    <button className='bg-white/40 text-shine p-3 flex items-center justify-center rounded-full hover:bg-white hover:text-black hover:scale-110 transition-colors duration-200 ease-linear group add-button relative'>
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
                    </button>
                    <button className='bg-white/40 text-shine p-3 flex items-center justify-center rounded-full hover:bg-white hover:text-black hover:scale-110 transition-colors duration-200 ease-linear group info-button relative'>
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
                    </button>
                    <p className='text-lg font-medium hidden absolute group-[.info-button]:block top-16 -left-[75%] bg-white whitespace-nowrap p-3 py-1 rounded-lg transition-all duration-200 ease-linear'>
                      Ayrıntılar
                    </p>
                    <p className='text-lg font-medium hidden absolute group-[.add-button]:block top-16 -left-[75%] group-[.add-button]:bg-white whitespace-nowrap p-3 py-1 rounded-lg transition-all duration-200 ease-linear'>
                      İzleme Listesi
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 max-h-40 max-w-max h-full'>
            <div className='relative group h-full'>
              <span
                className='absolute bottom-0 items-center justify-center w-16 rounded-md left-0 z-10 cursor-pointer hidden rotate-180  group-hover:flex bg-black/20 shadow-2xl shadow-black/40 h-full'
                style={{
                  display: slideIndex === 0 && 'none',
                }}
                onClick={() => handleRotation('left')}
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 hover:scale-150 rotate-180'
                >
                  <path d='M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z'></path>
                </svg>
              </span>
              <span
                className='absolute top-0 items-center justify-center w-16 rounded-md left-[calc(100vw-3.75rem)] z-10 cursor-pointer hidden rotate-180  group-hover:flex bg-black/20 shadow-2xl shadow-black/40 h-full'
                onClick={() => handleRotation('right')}
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 hover:scale-150'
                >
                  <path d='M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z'></path>
                </svg>
              </span>
              <div
                className='flex gap-12 max-w-max transition-all duration-500 ease-linear absolute bottom-0 pl-8'
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
      </div>
    </section>
  );
};

export default VideoSlider;

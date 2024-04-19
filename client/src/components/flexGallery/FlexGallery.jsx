import { Link } from 'react-router-dom';

const FlexGallery = () => {
  return (
    <div className='w-full pl-8 lg:pl-16'>
      <div className='flex items-center gap-2 text-[21px] font-bold mb-4'>
        <div className='flex flex-col md:flex-row md:gap-2'>
          <span className='text-mainBlue'>Prime</span>
          <span>Amazon orijinal ve Özel İçerikler</span>
        </div>
        <Link
          to='/'
          className='ml-8 flex items-center gap-1 flex-grow whitespace-nowrap'
        >
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
      </div>
      <div className='flex flex-nowrap overflow-auto gap-8 w-full max-h-[420px] no-scrollbar'>
        {Array.from(Array(16), (_, i) => i + 1).map((item, i) => (
          <div
            key={i}
            className='w-[30%] lg:w-[25%] 2xl:w-[12%] aspect-[9/15] hover:aspect-[16/9] hover:w-[75%] lg:hover:w-[62.5%] 2xl:hover:w-[32%] shrink-0 group/expand'
          >
            <img
              src='https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/df0f3c95f69046ceec3ecd5ed562d4c1dcbb43d65cb1c53a832b6ec6edafff47._UR2000,3000_SX500_FMwebp_.png'
              alt=''
              className='w-full h-full object-cover rounded-xl group-hover/expand:hidden'
            />
            <div className='w-full h-full hidden group-hover/expand:flex relative'>
              <img
                src='https://m.media-amazon.com/images/S/pv-target-images/52b874047fde4bd7af70569485bb30f3cefeb8ca53374182b639fcd38603fdf4._UR1920,1080_SX1440_FMwebp_.jpg'
                alt=''
                className='w-full h-full object-cover'
              />
              <div className='absolute h-full pt-[10%] left-8'>
                <div className='flex flex-col'>
                  {' '}
                  <img
                    src='https://m.media-amazon.com/images/S/pv-target-images/ce204cb98d7be3b049a535dcd855e9c8fc547ff0ce62d800af02cacba2ffc250._AC_SX500_FMwebp_.png'
                    alt=''
                    className='max-w-64 aspect-video object-contain'
                  />
                  <div className='flex items-center gap-4 w-full'>
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
                        className='w-6 h-6'
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
                          className='w-5 h-5'
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
                          className='w-5 h-5'
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
                  <p className='flex items-center gap-4 mt-4'>
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
                        16+
                      </span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexGallery;

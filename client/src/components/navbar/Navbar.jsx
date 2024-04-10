import { Link } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import classNames from 'classnames';
import { useState } from 'react';

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav
      className={classNames(
        'w-full h-8 lg:h-12 sticky top-0 transition-all duration-200 bg-main',
        scrollPosition > 100 &&
          'md:top-2 z-10 md:w-[80%] lg:w-[60%] mx-auto md:rounded-xl px-0'
      )}
    >
      <div
        className={classNames(
          'flex items-center justify-between w-full h-full lg:w-[60%] lg:mx-auto text-fine text-sm lg:text-base font-medium p-4 relative',
          scrollPosition > 100 && 'w-full lg:w-full'
        )}
      >
        <div
          className={classNames(
            'md:hidden text-shine flex items-end p-2 -ml-4',
            openMenu && 'bg-secondaryLight'
          )}
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <span>Menü</span>
          <div
            className={classNames(
              'absolute z-20 w-full h-screen bg-secondaryLight top-8 left-0',
              openMenu ? 'block' : 'hidden'
            )}
          >
            <ul className='flex flex-col items-start gap-4 list-none p-4'>
              <li
                className='flex items-end text-fine hover:text-shine'
                onClick={() => setOpenMenu(false)}
              >
                <Link to='/'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline w-6 h-6'
                  >
                    <path d='M11.03 2.59a1.501 1.501 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z'></path>
                  </svg>
                  <span className='ml-1'>Anasayfa</span>
                </Link>
              </li>
              <li
                className='flex items-end text-fine hover:text-shine'
                onClick={() => setOpenMenu(false)}
              >
                <Link to='/movies'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 256 256'
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline w-6 h-6'
                  >
                    <path d='M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z'></path>
                  </svg>
                  <span className='ml-1'>Filmler</span>
                </Link>
              </li>
              <li
                className='flex items-end text-fine hover:text-shine'
                onClick={() => setOpenMenu(false)}
              >
                <Link to='/tv-series'>
                  {' '}
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 256 256'
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline w-6 h-6'
                  >
                    <path d='M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,136H40V80H216V200Z'></path>
                  </svg>
                  <span className='ml-1'>TV Dizileri</span>
                </Link>
              </li>
              <li>
                <Link
                  to='/categories'
                  className='flex items-end text-fine hover:text-shine'
                  onClick={() => setOpenMenu(false)}
                >
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline w-6 h-6'
                  >
                    <path d='M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z'></path>
                  </svg>
                  <span className='ml-1 flex items-center gap-1 text-base'>
                    Kategoriler
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 512 512'
                      height='1rem'
                      width='1rem'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z'></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li
                className='flex items-end text-fine hover:text-shine'
                onClick={() => setOpenMenu(false)}
              >
                <Link to='/mystuff'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 512 512'
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline w-6 h-6'
                  >
                    <rect
                      width='384'
                      height='256'
                      x='64'
                      y='176'
                      fill='none'
                      strokeLinejoin='round'
                      strokeWidth='32'
                      rx='28.87'
                      ry='28.87'
                    ></rect>
                    <path
                      strokeLinecap='round'
                      strokeMiterlimit='10'
                      strokeWidth='32'
                      d='M144 80h224m-256 48h288'
                    ></path>
                  </svg>
                  <span className='ml-1'>Bana Özel</span>
                </Link>
              </li>
            </ul>
          </div>
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 512 512'
            height='1.2rem'
            width='1.2rem'
            xmlns='http://www.w3.org/2000/svg'
            className={classNames(
              'group-hover:rotate-180 transition-all duration-200 ease-linear inline',
              openMenu && 'rotate-180'
            )}
          >
            <path d='M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z'></path>
          </svg>
        </div>
        <div>
          <h1 className='text-shine text-base lg:text-lg xl:text-2xl font-bold whitespace-nowrap'>
            prime video
          </h1>
        </div>
        <div className='hidden lg:block text-sm xl:text-lg'>
          <ul className='flex items-center list-none'>
            <li className='py-2 px-4 hover:bg-secondaryLight hover:text-shine transition-colors ease-linear duration-200'>
              <Link to='/' className=' whitespace-nowrap'>
                Anasayfa
              </Link>
            </li>{' '}
            <li className='py-2 px-4 hover:bg-secondaryLight hover:text-shine transition-colors ease-linear duration-200'>
              <Link to='/' className=' whitespace-nowrap'>
                Filmler
              </Link>
            </li>{' '}
            <li className='py-2 px-4 hover:bg-secondaryLight hover:text-shine transition-colors ease-linear duration-200'>
              <Link to='/' className=' whitespace-nowrap'>
                TV Dizileri
              </Link>
            </li>{' '}
            <li className='py-2 px-4 hover:bg-secondaryLight hover:text-shine transition-colors ease-linear duration-200 group'>
              <Link
                to='/'
                className='whitespace-nowrap flex items-center gap-1'
              >
                <span>Kategoriler</span>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  height='1.2rem'
                  width='1.2rem'
                  xmlns='http://www.w3.org/2000/svg'
                  className='group-hover:rotate-180 transition-all duration-200 ease-linear'
                >
                  <path d='M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z'></path>
                </svg>
                <div className='w-full left-0 min-h-80 hidden group-hover:block absolute top-10 bg-secondaryLight text-fine transition-all duration-300 ease-linear'>
                  <div className='flex w-full h-full justify-between p-2'>
                    <div className='w-[75%] mx-auto flex'>
                      <div className='w-[66%]'>
                        <p className='text-fine text-xl'>Türler</p>
                        <div className='flex items-start gap-12 ml-6 mt-4'>
                          <ul className='flex flex-col gap-4 list-none'>
                            <li className='hover:bg-shine p-2 rounded-lg hover:text-main'>
                              Aksiyon ve macera
                            </li>
                            <li className='hover:bg-shine p-2 rounded-lg hover:text-main'>
                              Komedi
                            </li>

                            <li className='hover:bg-shine p-2 rounded-lg hover:text-main'>
                              Belgesel
                            </li>

                            <li className='hover:bg-shine p-2 rounded-lg hover:text-main'>
                              Dram
                            </li>

                            <li className='hover:bg-shine p-2 rounded-lg hover:text-main'>
                              Fantastik
                            </li>
                          </ul>
                          <ul className='flex flex-col gap-4 list-none'>
                            <li className='hover:bg-shine p-2 rounded-lg hover:text-main'>
                              Korku
                            </li>

                            <li className='hover:bg-shine p-2 rounded-lg hover:text-main'>
                              Çocuk
                            </li>

                            <li className='hover:bg-shine p-2 rounded-lg hover:text-main'>
                              Gizem ve gerilimler
                            </li>

                            <li className='hover:bg-shine p-2 rounded-lg hover:text-main'>
                              Romantik
                            </li>

                            <li className='hover:bg-shine p-2 rounded-lg hover:text-main'>
                              Bilim kurgu
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='w-[33%]'>
                        <p className='text-fine text-xl'>Seçme koleksiyonlar</p>

                        <p className='hover:bg-shine p-2 rounded-lg hover:text-main ml-4 mt-2'>
                          Avrupa'da üretilmiştir
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>{' '}
            <li className='py-2 px-4 hover:bg-secondaryLight hover:text-shine transition-colors ease-linear duration-200'>
              <Link to='/' className=' whitespace-nowrap'>
                Bana Özel
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className='flex items-center gap-4 whitespace-nowrap ml-4 xl:ml-0'>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 512 512'
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 xl:w-7 xl:h-7'
            >
              <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
            </svg>
            <div className='hover:bg-secondaryLight hover:text-shine flex items-center gap-1 p-2 cursor-pointer'>
              <span className='hidden xl:inline lg:text-lg ml-4'>
                John Doe{' '}
              </span>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 512 512'
                xmlns='http://www.w3.org/2000/svg'
                className='inline ml-1 w-5 h-5 lg:w-8 lg:h-8'
              >
                <path d='M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z'></path>
              </svg>
            </div>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

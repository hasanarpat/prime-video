import { Link } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import classNames from 'classnames';

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={classNames(
        'w-full h-8 lg:h-12 sticky top-0 px-5 transition-all duration-200 bg-main',
        scrollPosition > 100 &&
          'md:top-2 z-10 md:w-[80%] lg:w-[60%] mx-auto md:rounded-xl px-0'
      )}
    >
      <div
        className={classNames(
          'flex items-center justify-between w-full h-full lg:w-[60%] lg:mx-auto text-fine text-sm lg:text-base font-medium p-4',
          scrollPosition > 100 && 'w-full lg:w-full'
        )}
      >
        <div className=' md:hidden text-shine flex items-end'>
          <span>Menü</span>
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 512 512'
            height='1.2rem'
            width='1.2rem'
            xmlns='http://www.w3.org/2000/svg'
            className='group-hover:rotate-180 transition-all duration-200 ease-linear inline'
          >
            <path d='M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z'></path>
          </svg>
        </div>
        <div>
          <h1 className='text-shine text-base lg:text-lg xl:text-2xl font-bold whitespace-nowrap'>
            prime video
          </h1>
        </div>
        <div className='hidden lg:block'>
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
                className='whitespace-nowrap flex items-center gap-1 relative'
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
                <div className='w-[76vw] h-80 hidden group-hover:block absolute top-8 left-[-42vw] lg:left-[-46.5vw] 2xl:left-[-31.5vw] 2xl:w-[60vw] bg-secondaryLight text-fine transition-all duration-300 ease-linear'>
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
            <span className='hidden lg:inline lg:text-lg ml-4'>John Doe </span>
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
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
